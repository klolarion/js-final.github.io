

//list
const list = [1, "a", false];
// console.log(list[2]);

//object
const person = {
    name: "kim",
    sayHello: function (name, age){
        // console.log("Hello my name is " + name + ", age is " + age);
    }
}
person.sayHello("park", 20);
person.gender = "male"; //필드 추가 가능
// console.log(person);

const cal = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        console.log(a-b);
    },
    multiple: function (a, b) {
        console.log(a*b);
    },
    div: function (a, b) {
        console.log(a/b);
    },
    power: function (a, b){
        console.log(a ** b); //제곱
    }
}

// cal.minus(2,1);
// cal.multiple(1,3);
// cal.div(4,2);
// cal.power(3,3);

//return
// const result = cal.plus(2, 3);
// console.log(result);

//팝업입력창
// const name = prompt("Who are you?");
// const age = parseInt(prompt("How old are you?"));

//값 타입 변경/체크
// person.sayHello(name, age);
// console.log(isNaN(age));

//조건문
// if(isNaN(age)){
//     console.log("age is not a number");
// }else {
//     console.log("age is number");
// }


// const title = document.getElementById("title");
// console.log(title.id)
// console.log(title.className)
// console.log(title.autofocus)
// console.log(document.getElementsByTagName("h1"))

//검색조건으로 다양한 조회 가능. 중복되면 첫번째 요소만 불러오며 그 안에서 검색조건 설정가능
// console.log(document.querySelector(".h1class h1:last-child"))

// title.style.color = "blue";

//이벤트리스너에 사용될 함수
// function handleTitleClick(){
//     title.style.color = "red";
//     title.innerText = "changed";

const superEventHandler = {
    mouseIn: function(){
        h2.innerText = "Mouse in";
    },
    mouseLeave: function(){
        h2.innerText = "Mouse leave";
    },
    resize: function(){
        h2.innerText = "Window Resized";
    },
    rightClick: function(){
        h2.innerText = "Right clicked";
        document.body.style.backgroundColor = "red";
    }
}

let h2 = document.getElementsByTagName("h2").item(0);

h2.addEventListener("mouseenter", superEventHandler.mouseIn);
h2.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("contextmenu", superEventHandler.rightClick);

//이벤트리스너 추가. 이벤트명과 실행함 함수를 이름만 넣어준다.
// title.addEventListener("click", handleTitleClick)
// console.dir(title)

