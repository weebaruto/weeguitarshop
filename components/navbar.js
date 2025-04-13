export class MyNavbar extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <div id="page_menu" class="flex">
                <button class="selected" data-i18n="nav_home"></button>
                <button data-i18n="nav_about"></button>
                <button data-i18n="nav_pastwork"></button>
            </div>
            <div id="lang_menu" class="flex">
                <button class="lang-btn selected" data-lang="en">english</button>
                <button class="lang-btn" data-lang="jp">日本語</button>
            </div>
        `;
    }
}