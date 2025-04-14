import translation from "./translation.js";

import { MyHeader } from "./components/header.js";
customElements.define("my-header", MyHeader);

import { MyNavbar } from "./components/navbar.js";
customElements.define("my-navbar", MyNavbar);

import { mySlideshow } from "./components/slodeshow.js";
customElements.define("my-slideshow", mySlideshow);

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
    });
    
    document.querySelectorAll("[data-lang]").forEach(element => {
        element.classList.remove("selected");
        if (lang == element.dataset.lang) {
            element.classList.add("selected");
        }
    })
}

const buttonList = document.querySelectorAll("button");
buttonList.forEach(btn => {
    if ("href" in btn.dataset) {
        const data = btn.dataset.href;

        btn.addEventListener("click", () => {
            window.location.href = `${data}.html`;
        });

        if (document.documentElement.getAttribute("data-page") == data) {
            btn.classList.add("selected");
        }
    }
    else if ("lang" in btn.dataset) {
        btn.addEventListener("click", (e) => {
            const lang = e.target.dataset.lang;
            setLanguage(lang);
            updateTextContent(lang);
    
            // buttonList.forEach(otherBtn => {
            //     if ("lang" in btn.dataset){
            //         otherBtn.classList.remove("selected");
            //     }
            // })
            // btn.classList.add("selected");
        });
    }
})


function startSlideshow() {
    const slides = document.querySelectorAll('.slideshow-container img');
    let current = 0;
    
    setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, 2000);
}

window.addEventListener("DOMContentLoaded", () => {
    loadLanguage();
    startSlideshow();
});