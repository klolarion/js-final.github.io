const dday = document.querySelector('#dday');


function getClock() {

    const now = new Date();
    const xmas = new Date(2023, 11, 25, 0, 0, 0);

    const diff = xmas-now;


    const day = Math.floor(diff / (1000*60*60*24));
    const hour = Math.floor((diff / (1000*60*60)) % 24);
    const min = Math.floor((diff / (1000*60)) % 60);
    const sec = Math.floor(diff / 1000 % 60);

    dday.innerText = `${day}d ${hour}h ${min}m ${sec}s`;
}

getClock()
//주기적으로 실행할 (함수, ms)
setInterval(getClock, 1000);

//(실행할함수, ms뒤에 실행)
// setTimeout(sayHello, 2000);
