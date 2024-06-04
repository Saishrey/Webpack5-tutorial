import Car from './car.png';

function addImage() {
    const img = document.createElement('img');
    img.alt = 'Porsche 911 GT3 RS';
    img.width = 1366
    img.src = Car;
    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;