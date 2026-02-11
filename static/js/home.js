const translations = {
    english: {
        welcomeText: "Empowering Farmers. Connecting Buyers.",
        loginBtn: "Login"
    },
    kannada: {
        welcomeText: "ರೈತರನ್ನು ಶಕ್ತಿಮಂತಗೊಳಿಸುವುದು.",
        loginBtn: "ಲಾಗಿನ್"
    }
};

let currentLanguage = localStorage.getItem("language") || "english";

document.getElementById("languageSelect").value = currentLanguage;
applyLanguage(currentLanguage);

document.getElementById("languageSelect").addEventListener("change", function(){
    currentLanguage = this.value;

    // SAVE language
    localStorage.setItem("language", currentLanguage);

    applyLanguage(currentLanguage);
});

function applyLanguage(lang){
    const t = translations[lang];
    document.getElementById("welcomeText").innerText = t.welcomeText;
    document.getElementById("loginBtn").innerText = t.loginBtn;
}
