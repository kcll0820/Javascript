const height = prompt("손님 키?");
const aa = Number(height) >= 140 ? `탑승 가능` : `탑승 금지`;
alert(aa);

const num = prompt("숫자를 입력하세요");
const bb = Number(num) % 2 == 0 ? "짝수" : `홀수`;
alert(bb);

const birth = prompt("태어난 년도");
const age = 2026 - Number(birth);
const cc = age >= 20 ? "성인입니다" : `미성년자 입니다.`;
alert(cc);

const hour = prompt("몇시");
const min = prompt("몇분");
const sec = prompt("몇초");
alert(`${Number(hour) * 3600 + Number(min) * 60 + Number(sec)}초`);

const num1 = prompt("숫자를 입력하세요");
const num2 = prompt("숫자를 입력하세요");
alert(Number(num1) > Number(num2) ? num1 : num2);
