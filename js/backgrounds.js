const images = [
    'paris.jpg',
    'prague.jpg',
    'red-square.jpg',
]
const iNum = parseInt(Math.random()*images.length);
const chosenImnage = images[iNum];


const bgImg = document.createElement('img');
bgImg.src = `img/${chosenImnage}`;

document.body.appendChild(bgImg);


const b = document.body

b.style.backgroundImage = `linear-gradient(to left, #e66465, #9198e5)`;