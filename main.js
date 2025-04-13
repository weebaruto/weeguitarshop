import translation from "./translation.js";

import { MyHeader } from "./components/header.js";
customElements.define("my-header", MyHeader);

import { MyNavbar } from "./components/navbar.js";
customElements.define("my-navbar", MyNavbar);

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
        element.innerHTML = translation[text][lang];
    })

    document.querySelector(`[data-lang="${lang}"]`).classList.add("selected");
    // const buttonList = document.querySelectorAll(["data-lang"]);
    // buttonList.forEach(element => {
    //     element.classList.remove
    // })
}

const buttonList = document.querySelectorAll(".lang-btn");
buttonList.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const lang = e.target.dataset.lang;
        setLanguage(lang);
        updateTextContent(lang);

        buttonList.forEach(otherBtn => {
            otherBtn.classList.remove("selected");
        })
        btn.classList.add("selected");
    })
})

document.querySelectorAll(".lang-btn").forEach(button => {
    button.addEventListener("click", (e) => {
        const lang = e.target.dataset.lang;
        setLanguage(lang);
        updateTextContent(lang);


        button.classList.add("selected");
    });
});

window.addEventListener("DOMContentLoaded", loadLanguage);

// const translation = {
//     subtitle: {
//         en: "Handmade guitars from Belfast",
//         jp: "ベルファスト手作りギター"
//     }
// }