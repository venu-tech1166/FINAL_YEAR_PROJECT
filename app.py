from flask import Flask, render_template, request, redirect, session, url_for
from flask_mysqldb import MySQL
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = "secretkey"

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'farmerhub'

mysql = MySQL(app)

# LOGIN REQUIRED DECORATOR
def login_required(f):
    from functools import wraps
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'user_id' not in session:
            return redirect(url_for('login'))
        return f(*args, **kwargs)
    return decorated_function


@app.route('/')
def home():
    if 'user_id' not in session:
        return render_template("home.html")
    return redirect('/dashboard')


@app.route('/register', methods=['GET','POST'])
def register():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        password = generate_password_hash(request.form['password'])
        role = request.form['role']
        language = request.form['language']

        cur = mysql.connection.cursor()
        cur.execute("""
            INSERT INTO users (name, email, password, role, language)
            VALUES (%s, %s, %s, %s, %s)
        """, (name, email, password, role, language))
        mysql.connection.commit()
        cur.close()

        return redirect('/login')

    return render_template('register.html')


@app.route('/login', methods=['GET','POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM users WHERE email=%s", (email,))
        user = cur.fetchone()

        if user and check_password_hash(user[3], password):
            session['user_id'] = user[0]
            session['role'] = user[4]
            session['language'] = user[5]
            return redirect('/dashboard')

    return render_template('login.html')


@app.route('/farmer_dashboard')
@login_required
def farmer_dashboard():
    if session['role'] != 'farmer':
        return redirect('/dashboard')

    cur = mysql.connection.cursor()
    cur.execute("SELECT name FROM users WHERE id=%s", (session['user_id'],))
    user = cur.fetchone()

    cur.execute("SELECT * FROM products WHERE farmer_id=%s", (session['user_id'],))
    products = cur.fetchall()

    cur.close()

    return render_template("farmer_dashboard.html", 
                           name=user[0], 
                           products=products)


@app.route('/dashboard')
@login_required
def dashboard():
    if session['role'] == 'farmer':
        return render_template('farmer_dashboard.html')
    else:
        return render_template('buyer_dashboard.html')

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/login')

if __name__ == "__main__":
    app.run(debug=True)
