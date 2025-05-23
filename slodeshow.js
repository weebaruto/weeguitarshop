export class mySlideshow extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                    <img src="img/2.webp" alt="Guitar Photo" class="active">
                    <img src="img/7.webp" alt="Guitar Photo">
                    <img src="img/9.webp" alt="Guitar Photo">
                    <img src="img/10.webp" alt="Guitar Photo">
        `
    }
}