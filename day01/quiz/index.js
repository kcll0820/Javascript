const name = prompt("이름?");
const age = prompt("나이?");
const color = prompt("좋아하는 색?");
console.log(
  `제 이름은 ${name}, 나이는 ${age}살이고, 좋아하는 색은 ${color}입니다!`
);

const date = prompt("오늘 날짜?"); //new Date().toLocaleDateString();
const plan = prompt("계획한 일정?");
console.log(`오늘은 ${date}, 계획하신 일정은 ${plan}입니다.`);

const num1 = prompt("숫자를 입력하세요.");
const num2 = prompt("숫자를 입력하세요.");
window.alert(`${num1}와 ${num2}의 합 : ${sum} 차 : ${diff}`);

const price = prompt("음식 가격?");
const count = prompt("몇개 구매?");
window.alert(`총 음식 가격 : ${Number(price) * Number(count)}`);

const c = prompt("섭씨 온도?");
window.alert(`화씨 온도 : ${Number(c) * 1.8 + 32}`);

const side = prompt("한 변의 길이?");

window.alert(`정사각형 넓이 : ${Number(side) * Number(side)}`);
