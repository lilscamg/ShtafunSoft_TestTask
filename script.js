import { addRow, addColumn } from "./utils/domUtils.js";

const container = document.getElementById('container');
const row = addRow();
const requiredWidth = 777;
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

document.addEventListener('DOMContentLoaded', () => {
    let imageLoadPromises = imagesTree.map(url => loadImage(url));
    let ratioSum = 0;
    Promise.all(imageLoadPromises)
        .then(images => {

            images.forEach(img => {
                ratioSum += img.width / img.height;
            });

            let requiredHeight = (requiredWidth / ratioSum).toFixed(5);

            images.forEach(img => {
                img.style.height = requiredHeight + 'px';
                row.appendChild(img);
            });

            container.appendChild(row);
        })
})
