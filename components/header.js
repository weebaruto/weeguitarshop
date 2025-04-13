class MyHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <h1>Christopher Daisuke Guitars</h1>
            <h3>Handmade guitars from Belfast</h3>
        `;
    }
}
customElements.define("my-header", MyHeader);