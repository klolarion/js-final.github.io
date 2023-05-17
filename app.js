

//list
const list = [1, "a", false];
console.log(list[2]);

//object
const person = {
    name: "kim",
    sayHello: function (name, age){
        console.log("Hello my name is " + name + ", age is " + age);
    }
}
person.sayHello("park", 20);
person.gender = "male"; //필드 추가 가능
console.log(person);

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

cal.minus(2,1);
cal.multiple(1,3);
cal.div(4,2);
cal.power(3,3);

//return
const result = cal.plus(2, 3);
console.log(result);

//팝업입력창
const name = prompt("Who are you?");
const age = parseInt(prompt("How old are you?"));

//값 타입 변경/체크
person.sayHello(name, age);
console.log(isNaN(age));

//조건문
if(isNaN(age)){
    console.log("age is not a number");
}else {
    console.log("age is number");
}



