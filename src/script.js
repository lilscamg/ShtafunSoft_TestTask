import { addRow, addColumn } from "./utils/domUtils.js";
import { Row } from "../dist/entities/Row.js";
import { Column } from "../dist/entities/Column.js";

const container = document.getElementById('container');
const row = addRow();
const column = addColumn();
const requiredWidth = 800;
const imagesTree = [
    'img/1.jpg', 
    'img/2.jpg', 
    'img/3.jpg', 
    'img/4.jpg', 
    'img/5.jpg'
];

function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
    })
}

function drawStoryBoard() {

}

document.addEventListener('DOMContentLoaded', () => {

    let imageLoadPromises = imagesTree.map(url => loadImage(url));
    Promise.all(imageLoadPromises)
        .then(images => {

            //#region Задание 1
            let ratioSum = 0;
            images.forEach(img => {
                ratioSum += img.width / img.height;
            });
            let requiredHeight = (requiredWidth / ratioSum).toFixed(5);
            images.forEach(img => {
                img.style.height = requiredHeight + 'px';
                row.appendChild(img);
            });
            container.appendChild(row);
            //#endregion

            //#region Задание 2
            const r1 = new Row();
            r1.add(images[0]).add(images[2]).add(images[1]);
            let width = r1.getWidth();
            console.log(width);
            //#endregion

            //#region Задание 3

            //#endregion
        })
        .catch(ex => {
            console.log(ex);
        })
    
})
