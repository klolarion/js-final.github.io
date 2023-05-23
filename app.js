
const gameForm = document.querySelector('#game-form');
const range = document.querySelector('#game-form .range');
const my = document.querySelector('#game-form .my');
const result = document.querySelector('#result');
const wl = document.querySelector('#wl');

const HIDDEN_CLASSNAME = 'hidden';


function onGameSubmit(event){
    event.preventDefault();

    const rangeNum = range.value;
    const myNum = parseInt(my.value);
    const random = parseInt(Math.random() * rangeNum + 1);

    result.innerText = `You chose : ${myNum}, the machine chose: ${random}`;

    if(myNum === random){
        wl.innerText = 'You won!';
    }else {
        wl.innerText = 'You lost!';
    }

    result.classList.remove(HIDDEN_CLASSNAME);
    wl.classList.remove(HIDDEN_CLASSNAME);
}

gameForm.addEventListener('submit', onGameSubmit);


