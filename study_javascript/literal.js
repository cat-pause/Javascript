"use strict";

// 숫자(Number)
let myName = "홍길동";                   //리터럴
let yourName = new String("김길동");     //생성자
console.log(myName, yourName);
console.log(typeof myName, typeof yourName);

// 문자열(Strings)
let myScore = 100;                      //리터럴
let yourScore = new Number(70);         //생성자
console.log(myScore, yourScore);
console.log(typeof myScore, typeof yourScore);

// 배열(Arrays)
let myArr = [10, 20, 30];               //리터럴 : []
let yourArr = new Array(40, 50, 60);    //생성자
console.log(myArr, yourArr);
console.log(typeof myArr, typeof yourArr);

// 객체(object)
let myObj = {                   //리터럴 : {} curly brace
    name : "wonhee",
    gender : "male",
    Address : "2 white fir dr"
}
let yourObj = new Object({      // 생성자
    name : "king",
    gender : "none",
    born : "west coast"
})

console.log(myObj.name, myObj['gender']);
console.log(yourObj.name, yourObj['born']);

let isOk = true;    // python : True
let inNo = false;   // python : False

function myFunc(){  //메소드 : 클래스(객체) 내부에 생성한 함수
    console.log("myFunc");
}

let func1 = function(){
    console.log("func1");
}