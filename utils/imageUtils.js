export function createImage(src, margin = 0) {
    const img = new Image();
    img.src = '../' + src + '.jpg';
    if (!margin) 
        img.style.margin = margin;
    return img;
}