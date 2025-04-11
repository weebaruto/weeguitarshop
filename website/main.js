import "./components/header.js";
import "./components/navbar.js";

function setLanguage(lang) {
    localStorage.setItem("userLanguage", lang);
    //updateTextContent(lang);
    //make this.
}

function loadLanguage() {
    const savedLang = localStorage.getItem("userLanguage");
    if (savedLang) {
        //updateTextContent(lang);
    }
}

document.querySelectorAll(".lang-btn").forEach(button => {
    button.addEventListener("click", (e) => {
        setLanguage(e.target.dataset.lang);
    });
});

window.addEventListener("DOMContentLoaded", loadLanguage);