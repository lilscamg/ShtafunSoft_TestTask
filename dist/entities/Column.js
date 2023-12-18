export class Column {
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
