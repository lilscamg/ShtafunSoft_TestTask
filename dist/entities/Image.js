export class Img {
    constructor(domElement) {
        this.domElement = domElement;
    }
    getWidth() {
        return this.domElement.width;
        // let width = Number(this.domElement.style.width.replace('px', ''));
        // return width
    }
    getHeight() {
        return this.domElement.height;
        // let height = Number(this.domElement.style.height.replace('px', ''));
        // return height
    }
    setHeight(height) {
        let ratio = this.domElement.width / this.domElement.height;
        this.domElement.style.height = height + 'px';
        this.domElement.style.width = height * ratio + 'px';
    }
    setWidth(width) {
        let ratio = this.domElement.width / this.domElement.height;
        this.domElement.style.width = width + 'px';
        this.domElement.style.height = width / ratio + 'px';
    }
}
