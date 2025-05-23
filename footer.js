export class MyFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <footer>
                <div>
                    <img src="img/icons/mail.png" alt="mail">
                    <span>christopherdaisukeluthier@gmail.com</span>
                </div>
                <div>
                    <div>
                        <img src="img/icons/twit.png" alt="Twitter">
                        <a>Twitter</a>
                    </div>
                    <div>
                        <img src="img/icons/inst.png" alt="instagram">
                        <a>Instagram</a>
                    </div>
                    <div>
                        <img src="img/icons/fb.png" alt="Facebook">
                        <a>Facebook</a>
                    </div>
                </div>
            </footer>
        `;
    }
}