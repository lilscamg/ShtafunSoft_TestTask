export interface IElement {
    elements: IElement[];
    width: number;
    height: number;
    add(element: IElement) : IElement;
    getWidth(): number;
}