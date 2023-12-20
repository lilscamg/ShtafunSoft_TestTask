import { Row } from "../dist/entities/Row.js";
import { Column } from "../dist/entities/Column.js";
import { Img } from "../dist/entities/Image.js";
import { addColumn, addRow } from "./utils/domUtils.js";

const imagesTree = [
    'img/1.jpg', 
    'img/2.jpg', 
    'img/3.jpg', 
    'img/4.jpg', 
    'img/5.jpg',
    'img/6.jpg'
];


// главный контейнер
const container = document.getElementById('container');
// строка куда вставляются изображения
const _row1 = addRow();
const _row2 = addRow();
const _row3 = addRow();
container.appendChild(_row1);
container.appendChild(_row2);
container.appendChild(_row3);


function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
    })
}

function drawStoryBoard1(head, params) {
    let ratioSum = 0;

    head.elements.forEach(el => {
        ratioSum += el.getWidth() / el.getHeight(); 
    });

    let newHeight = (params.width / ratioSum);

    head.elements.forEach(el => {
        el.setHeight(newHeight);
    });

    draw(head, params.container);
}

/* function drawStoryBoard(head, params) {
    // если узел - фото
    if (head instanceof Img) {
        if (head.getWidth() >= params.width)
            head.setWidth(params.width);
        return head.getHeight(); // Возвращаем высоту
    }
    // если узел - строка, проходим по дочерним узлам
    else if (head instanceof Row) {
        // Если узел - строка, проходим по дочерним узлам
        let totalHeight = 0;
        head.elements.forEach(el => {
            totalHeight += drawStoryBoard(el, { width: params.width / head.elements.length});
        })
        // Возвращаем общую высоту строки
        return totalHeight; 
    }
    // если узел - столбец, проходим по дочерним узлам
    else if (head instanceof Column) {
        let maxHeight = 0;
        head.elements.forEach(el => {
            let childHeight = drawStoryBoard(el, params);
            if (childHeight > maxHeight) {
                maxHeight = childHeight;
            }
        })
        return maxHeight;
    }
} */

function drawStoryBoard(head, params) {
    // если узел - фото
    if (head instanceof Img) {
        if (head.getWidth() >= params.width)
            head.setWidth(params.width);
        return head.getHeight();
    }
    else if (head instanceof Row) {
        let maxHeight = 0;
        head.elements.forEach(el => {
            let newHeight = drawStoryBoard(el, { width: (params.width / head.elements.length) });
            maxHeight += newHeight > maxHeight ? newHeight : 0;
            return maxHeight;
        })
    }
    else if (head instanceof Column) {

    }
}


function draw(head, container) {
    head.elements.forEach(el => {
        if (el instanceof Img) {
            container.appendChild(el.domElement);
        }
        else if (el instanceof Row) {
            let row = addRow();
            draw(el, row);
            container.appendChild(row);
        }
        else if (el instanceof Column) {
            let column = addColumn();
            draw(el, column);
            container.appendChild(column);
        }
    })
}


document.addEventListener('DOMContentLoaded', () => {

    let imageLoadPromises = imagesTree.map(url => loadImage(url));
    Promise.all(imageLoadPromises)
        .then(images => {

            let img1 = new Img(images[0]); 
            let img2 = new Img(images[1]); 
            let img3 = new Img(images[2]); 
            let img4 = new Img(images[3]);
            let img5 = new Img(images[4]);
            let img6 = new Img(images[5]);

            //#region Задание 1
            let r1 = new Row();
            r1.add(img1).add(img2).add(img3).add(img4).add(img5).add(img6);
            drawStoryBoard1(r1, { width: 666, container: _row1 });
            // drawStoryBoard(r1, {width: 666})
            // draw(r1, _row1);
            //#endregion
            

            //#region Задание 2
            /*let r2 = new Row();
            let c1 = new Column();
            c1.add(img2).add(img3);
            let c2 = new Column();
            c2.add(img4).add(img5);
            r2.add(img1).add(c1).add(c2).add(img6);
            drawStoryBoard(r2, {width: 666, container: _row2});
            console.log(r2);
            draw(r2, _row2);*/
            //#endregion


            //#region Задание 3

            //#endregion
            
        })
        .catch(ex => {
            console.log(ex);
        })
    
})
