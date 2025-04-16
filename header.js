export class MyHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <h1>Christopher Daisuke Luthier</h1>
            <h3 data-i18n="subtitle"></h3>
        `;
    }
}