export class mySlideshow extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                    <img src="img/nice_guitar_photos/2.jpg" alt="Image 1" class="active">
                    <img src="img/nice_guitar_photos/7.jpg" alt="Image 2">
                    <img src="img/nice_guitar_photos/5.jpg" alt="Image 3">
        `
    }
}