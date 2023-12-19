export class Column {
    constructor() {
        this.elements = [];
    }
    add(element) {
        this.elements.push(element);
        return this;
    }
    getWidth() {
        let width = 0;
        this.elements.forEach(el => {
            let elWidth = el.getWidth();
            elWidth > width;
            width = elWidth;
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
