const translations = {
    english: {
        loginTitle: "Login to Your Account",
        loginBtn: "Login",
        registerLink: "New user? Register here",
        guide: "To login, enter your email and password, then click the login button."
    },
    kannada: {
        loginTitle: "ನಿಮ್ಮ ಖಾತೆಗೆ ಲಾಗಿನ್ ಮಾಡಿ",
        loginBtn: "ಲಾಗಿನ್",
        registerLink: "ಹೊಸ ಬಳಕೆದಾರರಾ? ನೋಂದಣಿ ಮಾಡಿ",
        guide: "ಲಾಗಿನ್ ಮಾಡಲು ನಿಮ್ಮ ಇಮೇಲ್ ಮತ್ತು ಪಾಸ್ವರ್ಡ್ ನಮೂದಿಸಿ."
    },
    telugu: {
        loginTitle: "మీ ఖాతాలోకి లాగిన్ చేయండి",
        loginBtn: "లాగిన్",
        registerLink: "కొత్త వినియోగదారుడా? నమోదు చేయండి",
        guide: "లాగిన్ చేయడానికి మీ ఇమెయిల్ మరియు పాస్‌వర్డ్ నమోదు చేయండి."
    },
    tamil: {
        loginTitle: "உங்கள் கணக்கில் உள்நுழைக",
        loginBtn: "உள்நுழை",
        registerLink: "புதிய பயனரா? பதிவு செய்யவும்",
        guide: "உள்நுழைய உங்கள் மின்னஞ்சல் மற்றும் கடவுச்சொல்லை உள்ளிடவும்."
    }
};

let currentLanguage = "english";

document.getElementById("languageSelect").addEventListener("change", function(){
    currentLanguage = this.value;
    const t = translations[currentLanguage];

    document.getElementById("loginTitle").innerText = t.loginTitle;
    document.getElementById("loginBtn").innerText = t.loginBtn;
    document.getElementById("registerLink").innerText = t.registerLink;
});

function speakGuide() {
    const speech = new SpeechSynthesisUtterance(
        translations[currentLanguage].guide
    );
    speech.lang = "en-IN";
    window.speechSynthesis.speak(speech);
}
