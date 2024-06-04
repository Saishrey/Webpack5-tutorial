import Car from './car.png';
import altText from './alt-text.txt';

function addImage() {
    const img = document.createElement('img');
    // img.alt = 'Porsche 911 GT3 RS';
    img.alt = altText;
    img.width = 1366
    img.src = Car;
    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;