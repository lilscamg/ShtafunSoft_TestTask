import { IElement } from "./IElement"

export class Column implements IElement {
    
    public elements: IElement[] = [];
    public width: number = 0;
    public height: number = 0; 

    public add(element: IElement) : IElement {
        this.elements.push(element); 
        return this;   
    }

    public getWidth(): number {
        let width = 0;
        // если дошли до изображения
        if (this instanceof Image)
            return this.width;
        // иначе рекурсивно вызываем метод получения ширины
        this.elements.forEach(el => {
            width += el.getWidth();
        });
        return width;
    }
}