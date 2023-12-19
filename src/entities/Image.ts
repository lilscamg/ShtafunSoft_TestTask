import { IElement } from "./IElement";

export class Img implements IElement {
    public domElement: any;

    constructor(domElement: any) {
        this.domElement = domElement;
    }
    getWidth(): number {
        return this.domElement.width;
    }

    getHeight(): number {
        return this.domElement.height;
    }

    setHeight(height: number): void {
        let ratio = this.domElement.width / this.domElement.height;
        this.domElement.style.height = height + 'px';
        this.domElement.style.width = height * ratio + 'px'; 
    }

    setWidth(width: number): void {
        let ratio = this.domElement.width / this.domElement.height;
        this.domElement.style.width = width + 'px';
        this.domElement.style.height = width / ratio + 'px'; 
    }
}