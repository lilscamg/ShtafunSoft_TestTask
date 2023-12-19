export class Row {
    constructor() {
        this.elements = [];
    }
    add(element) {
        this.elements.push(element);
        return this;
    }
    getWidth() {
        let width = 0;
        // иначе рекурсивно вызываем метод получения ширины
        this.elements.forEach(el => {
            width += el.getWidth();
        });
        return width;
    }
    getHeight() {
        let height = 0;
        this.elements.forEach(el => {
            let elHeight = el.getHeight();
            elHeight > height;
            height = elHeight;
        });
        return height;
    }
    setHeight(height) {
        this.elements.forEach(el => {
            el.setHeight(height);
        });
    }
    setWidth(width) {
        this.elements.forEach(el => {
            el.setWidth(width);
        });
    }
}
