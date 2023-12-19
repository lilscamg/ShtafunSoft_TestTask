export class Img {
    constructor(domElement) {
        this.domElement = domElement;
    }
    getWidth() {
        return this.domElement.width;
    }
    getHeight() {
        return this.domElement.height;
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
