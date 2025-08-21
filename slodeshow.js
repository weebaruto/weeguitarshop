export class mySlideshow extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                    <img src="img/IMG_7196.webp" alt="Guitar Photo" class="active">
                    <img src="img/TrevBensPhotography_3.webp" alt="Guitar Photo">
                    <img src="img/TrevBensPhotography_5.webp" alt="Guitar Photo">
                    <img src="img/IMG_7215.webp" alt="Guitar Photo">
                    <img src="img/TrevBensPhotography_6.webp" alt="Guitar Photo">
                    <img src="img/TrevBensPhotography_7.webp" alt="Guitar Photo">
                    <img src="img/11.webp" alt="Guitar Photo">
                    <img src="img/TrevBensPhotography_8.webp" alt="Guitar Photo">
        `
    }
}