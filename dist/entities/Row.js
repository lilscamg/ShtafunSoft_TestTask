export class Row {
    constructor() {
        this.elements = [];
        this.width = 0;
        this.height = 0;
    }
    add(element) {
        this.elements.push(element);
        return this;
    }
    getWidth() {
        debugger
        let width = 0;
        // если дошли до изображения
        if (this.elements.length === 0)
            return this.width;
        // иначе рекурсивно вызываем метод получения ширины
        this.elements.forEach(el => {
            width += el.getWidth();
        });
        this.width = width;
        return width;
    }
}
