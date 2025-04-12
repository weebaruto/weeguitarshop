import translation from "./translation.js";

function setLanguage(lang) {
    localStorage.setItem("userLanguage", lang);
}

function loadLanguage() {
    const savedLang = localStorage.getItem("userLanguage");
    if (savedLang) {
        updateTextContent(savedLang);
    } else {
        updateTextContent("en"); // default language if userlanguage has not been set before
    }
}

function updateTextContent(lang) {
    const elementList = document.querySelectorAll("[data-i18n]");

    elementList.forEach(element => {
        const text = element.dataset.i18n;
        element.textContent = translation[text][lang];
    })
}

document.querySelectorAll(".lang-btn").forEach(button => {
    button.addEventListener("click", (e) => {
        const lang = e.target.dataset.lang;
        setLanguage(lang);
        updateTextContent(lang);
    });
});

window.addEventListener("DOMContentLoaded", loadLanguage);

// const translation = {
//     subtitle: {
//         en: "Handmade guitars from Belfast",
//         jp: "ベルファスト手作りギター"
//     }
// }