import { IElement } from "./IElement";

export class Img implements IElement {
    public domElement: any;

    constructor(domElement: any) {
        this.domElement = domElement;
    }
    getWidth(): number {
         return this.domElement.width;
        // let width = Number(this.domElement.style.width.replace('px', ''));
        // return width
    }

    getHeight(): number {
        return this.domElement.height;
        // let height = Number(this.domElement.style.height.replace('px', ''));
        // return height
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