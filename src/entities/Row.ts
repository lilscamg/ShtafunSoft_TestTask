import { IElement } from "./IElement";

export class Row implements IElement {
    
    public elements: IElement[] = [];

    public add(element: any) : IElement {
        this.elements.push(element);
        return this;   
    }

    public getWidth(): number {
        let width = 0;
        // иначе рекурсивно вызываем метод получения ширины
        this.elements.forEach(el => {
            width += el.getWidth();
        });
        return width;
    }

    public getHeight(): number {
        let height = 0;
        this.elements.forEach(el => {
            let elHeight = el.getHeight();
            elHeight > height;
            height = elHeight;
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