
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings();
}

function paintGreetings() {
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}


const savedUser = localStorage.getItem(USERNAME_KEY);

if (savedUser === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
}else {
    paintGreetings();
}