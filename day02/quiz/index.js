const food = prompt("좋아하는 음식");
const place = prompt("가장 최근에 갔던 장소");
console.log(`최근에 깄던 ${place}에서 ${food}을(를) 먹고 싶어요`);

const tall = prompt("키?(m)");
const weight = prompt("몸무게?");
window.alert(
  `BMI 지수는 ${Number(weight) / (Number(tall) * Number(tall))}입니다.`
);

const rate = prompt("현재 달러 환율");
const dollar = prompt("얼마(USD)를 원으로 환전하시겠습니까?");
const won = Number(rate) * Number(dollar);
console.log(`${dollar} -> ${won}원 입니다.`);

const btc_rate = prompt("1 BTC = 몇 원");
const btc = prompt("몇 BTC를 환산하고 싶습니까?");
const result = Number(btc_rate) * Number(btc);
console.log(`${result}`);
