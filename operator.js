// 0. 대입연산자 : =
// let k = 10;
// console.log("k의 값 : " + k);

// 1. 산술연산자 : +, -, *, /, %
// 1-1. 문자연결 연산자 : + (덧셈이 아닌 문자열끼리 이어서 쓰는 연산자)
// let n1 = 10;

// let n2 = 50;

// console.log("n1 + n2 : " + (n1 + n2));

// 2. 복합대입 연산자 : +=, -=, *=, /*, %=

// n1 += 100;
// n2 -= 100;
// console.log("n1 += 100의 결과 : " + n1);
// console.log(`n2 -= 100의 결과 : ${n2}`);

// n1 %= n2;
// console.log(`n1 %= n2의 결과 : ${n1 %= n2}`);

// 3. 증감연산자 : ++, --
// 위치에 따른 결과가 달라짐 : A = B++  vs  A = ++B 는 다른 결과
// let a =10;
// let b =20;
// console.log(`a : ${a}`)
// console.log(`b : ${b}`)
// console.log(`a++ : ${a++}`)
// console.log(`++a : ${++a}`)

// 4. 비교연산자 : ==, ===, !=, >, >=, <, <=
// 연산의 결과가 논리값(true, false)을 반환     
//비교 연산자 압축 폰트(Nanum Gothic Liagature)

// console.log(1 == '1');      //값만 비교
// console.log(1 === '1');     //값, 자료형 비교

// 5. 논리연산자 : AND, OR, NOT
// 연산 결과가 논리값(true, false) 반환
// let bool1 = true;
// let bool2 = false;

// console.log(bool1 && bool2);
// console.log(bool1 || bool2);
// console.log(!bool1);            //true → false, false → true

// 6. 삼항 조건 연산자 : 조건 ? true일때 실행 표현식 : false일때 실행 표현식;
// let n1 = 10;
// let n2 = 50;
// n1 > n2 ? console.log('n1 > n2'): console.log('n1 < n2');

// 7. 우선순위 연산자 : ()
let j = 1 + '100';
console.log(j, typeof j);






