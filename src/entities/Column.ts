import { IElement } from "./IElement";

export class Column implements IElement {
    
    public elements: IElement[] = [];

    public add(element: any) : IElement {
        this.elements.push(element);
        return this;   
    }

    public getWidth(): number {
        let width = 0;
        this.elements.forEach(el => {
            let elWidth = el.getWidth();
            elWidth > width;
            width = elWidth;
        });
        return width;
    }

    public getHeight(): number {
        let height = 0;
        this.elements.forEach(el => {
            height += el.getHeight();
        });
        return height;
    }

    public setHeight(height: number): void {
        this.elements.forEach(el => {
            el.setHeight(height);
        }); 
    }

    public setWidth(width: number): void {
        this.elements.forEach(el => {
            el.setWidth(width);
        }); 
    }
}