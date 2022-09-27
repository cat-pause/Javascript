//변수 선언 키워드 : var vs let[변수], const[상수]

"use strict";   //엄격모드
let a = 5;          //number        Number() : casting
console.log('a의 자료형 : ' + typeof a);

let b = 5.0;        //number
console.log('b의 자료형 : ' + typeof b);

let c = "test";     //string        String() : casting
console.log('c의 자료형 : ' + typeof c);  // template literal 문법

let d = 't';        //string

let e = false;      //boolean

let f = null;       //NULL

let g;              //undefined (값 할당되지 않은 상태)
console.log("g의 자료형 : " + typeof g);

let h = [1, 2, 3];  //Array         Array()

let i = {           //object
    name:'won',
    job :'tutor'
}

let j = function(){ //function
    console.log('hell javascript!');
}