const translations = {
    english: {
        registerTitle: "Create Your Account",
        registerBtn: "Register",
        farmerText: "👨‍🌾 Farmer",
        buyerText: "🛒 Buyer",
        loginLink: "Already have an account? Login"
    },
    kannada: {
        registerTitle: "ನಿಮ್ಮ ಖಾತೆ ರಚಿಸಿ",
        registerBtn: "ನೋಂದಣಿ",
        farmerText: "👨‍🌾 ರೈತ",
        buyerText: "🛒 ಖರೀದಿದಾರ",
        loginLink: "ಈಗಾಗಲೇ ಖಾತೆ ಇದೆಯಾ? ಲಾಗಿನ್ ಮಾಡಿ"
    },
    telugu: {
        registerTitle: "మీ ఖాతాను సృష్టించండి",
        registerBtn: "నమోదు",
        farmerText: "👨‍🌾 రైతు",
        buyerText: "🛒 కొనుగోలుదారు",
        loginLink: "ఇప్పటికే ఖాతా ఉందా? లాగిన్"
    },
    tamil: {
        registerTitle: "உங்கள் கணக்கை உருவாக்குங்கள்",
        registerBtn: "பதிவு",
        farmerText: "👨‍🌾 விவசாயி",
        buyerText: "🛒 வாங்குபவர்",
        loginLink: "ஏற்கனவே கணக்கு உள்ளதா? உள்நுழை"
    }
};

let currentLanguage = localStorage.getItem("language") || "english";

// Set dropdown value from saved language
document.getElementById("languageSelect").value = currentLanguage;

// Apply language when page loads
applyLanguage(currentLanguage);

// When language changes
document.getElementById("languageSelect").addEventListener("change", function(){
    currentLanguage = this.value;

    // Save to browser
    localStorage.setItem("language", currentLanguage);

    applyLanguage(currentLanguage);
});

// Function to update text
function applyLanguage(lang){
    const t = translations[lang];

    document.getElementById("registerTitle").innerText = t.registerTitle;
    document.getElementById("registerBtn").innerText = t.registerBtn;
    document.getElementById("farmerText").innerText = t.farmerText;
    document.getElementById("buyerText").innerText = t.buyerText;
    document.getElementById("loginLink").innerText = t.loginLink;

    // Send selected language to backend
    document.getElementById("selectedLanguage").value = lang;
}
