class MyNavbar extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <div id="page_menu" class="flex">
                <a class="selected">Home</a>
                <a href="about_me.html">About</a>
                <a href="past_work.html">Past Work</a>
            </div>
            <div id="lang_menu" class="flex">
                <a  class="selected">English</a>
                <a href="index_jp.html">日本語</a>
            </div>
        `;
    }
}
customElements.define("my-navbar", MyNavbar);