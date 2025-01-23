const pizza = (x) => x + "피자";
console.log(pizza("🍕"));

const word = (x) => x.repeat(3);
console.log(word("abc"));

const dollar = (x) => x / 1430;
console.log(dollar("2000"));

const gotoAcademy = (transport) => {
  console.log("집에서 출발");
  transport();
  console.log("학원 도착");
};
const texi = () => {
  console.log("택시");
};
const bus = () => {
  console.log("버스");
};
const walk = () => {
  console.log("도보");
};
const bike = () => {
  console.log("자전거");
};
const car = () => {
  console.log("엄마차");
};
gotoAcademy(car);

const makeBeverage = (makeSomething) => {
  console.log("주문 받기");
  makeSomething();
  console.log("주문 완료");
};

const makeCoffee = () => {
  console.log("1. 원두");
  console.log("2. 평탄화");
  console.log("3. 기계");
  console.log("4. 버튼");
  console.log("5. 즙");
};

const makeSmoothie = () => {
  console.log("1. 재료");
  console.log("2. 얼음");
  console.log("3. 갈기");
  console.log("4. 즙");
};

const makeTea = () => {
  console.log("1. 티백");
  console.log("2. 뜨물");
  console.log("3. 후");
};
