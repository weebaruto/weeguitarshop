export class MyFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <footer>
            <p>email@email.com</p>
            <a>Twitter</a>
            <a>Instagram</a>
        </footer>
        `;
    }
}