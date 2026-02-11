CREATE DATABASE farmerhub;
USE farmerhub;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    role ENUM('farmer','buyer'),
    language VARCHAR(20) DEFAULT 'english'
);

CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    farmer_id INT,
    crop_name VARCHAR(100),
    quantity INT,
    price DECIMAL(10,2),
    FOREIGN KEY (farmer_id) REFERENCES users(id)
);
