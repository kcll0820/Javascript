// function[함수]
// 입력 : x
// 출력 : x + 100

function plus100(x) {
  return x + 100;
}
// plus100 [함수 이름]
const a = plus100(500);
console.log(a); // 600

function twice(x) {
  return x * 2;
}
const b = twice(100);
console.log(b); // 200

function luckybiky(sentence) {
  return sentence + "러키비키잖아😊";
}
const c = luckybiky("월요일");
console.log(c);

function isOddOrEven(x) {
  return x % 2 ? "홀수" : "짝수";
}
