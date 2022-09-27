// 배열 연산자 : Array

// 변수 vs 배열 : 값을 1개만 저장 vs 여러개의 값을 저장

// 변수
/*
let k = 10;     //변수
const j = 100;  //상수(변하지 않음)

k = 50;         //재할당
console.log(k);

j = 90;         //오류 발생
console.log(j);
*/

// 배열 선언 : 리터럴, 생성자
// 배열[인덱스] : 0부터 배열길이값n-1까지 배열 '인텍스(주소, 번지)'를 찾는다
// 배열에 포함되는 데이터 타입 : 모든 타입 가능
// .sort(), .reverse() : 정렬, 역정렬(in Place)
// .pop(), .push('추가할 원소값') : 배열의 마지막 원소를 제거, 추가

/*
let arr1 = [1, 10, '100']
arr1[1] = '십';
console.log(arr1);

const arr2 = new Array('1', null, 100, 'good')
arr2[1] = true;
console.log(arr2);

const arr3 = ['가', '나', '다']
console.log(arr2.concat(arr3));     // 배열끼리 연결, 새로운 배열을 반환

console.log(`배열 arr2의 길이 : ${arr2.length}`);

console.log("arr2.join(' / ') : " + arr2.join(' / '));        // 배열 원소를 '문자열'로 연결한 결과 반환

console.log(arr2);

console.log("pop() : " + arr2.pop());        // 마지막 원소 배열 제거 후 반환

console.log("push('bad') : " + arr2.push('bad'));  // 배열의 마지막에 원소 추가

console.log(arr2.shift());      // 배열의 첫 원소를 제거하고 그 원소 반환

console.log(arr2.unshift(6));   // 배열의 첫 원소를 추가

console.log(arr2);
*/









