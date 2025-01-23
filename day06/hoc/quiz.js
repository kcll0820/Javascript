// const menu = [
//   {
//     name: "부대찌개",
//     price: 13000,
//     kcal: 700,
//     ingredients: ["햄", "라면", "파", "두부", "김치", "콩"],
//   },
//   { name: "죽", price: 4000, kcal: 200, ingredients: ["소고기", "밥", "물"] },
//   {
//     name: "샌드위치",
//     price: 0,
//     kcal: 400,
//     ingredients: ["고구마", "참치", "빵", "치즈"],
//   },
//   {
//     name: "해장국",
//     price: 10000,
//     kcal: 700,
//     ingredients: ["뼈다귀", "시래기", "감자", "수제비"],
//   },
// ];

// const tenPercent = (x) => {
//   x.price = x.price * 1.1;
//   return x;
// };
// const priceUp = menu.map(tenPercent);
// console.log(priceUp);

// const addSugar = (x) => {
//   x.kcal = x.kcal + 100;
//   x.ingredients.push("설탕");
//   return x;
// };
// const newMenu1 = menu.map(addSugar);
// console.log(newMenu1);

// const vegan = (x) => x.ingredients.every((v) => !(v == "햄" || v == "소고기"));
// const newMenu2 = menu.filter(vegan);
// console.log(newMenu2);

const starbucks = [
  {
    name: "카페모카",
    price: 6000,
    shots: 2,
    ingredients: ["커피콩", "물", "초코"],
  },
  {
    name: "레몬에이드",
    price: 4000,
    shots: 0,
    ingredients: ["레몬", "사이다", "시럽"],
  },
  {
    name: "아메리카노",
    price: 3000,
    shots: 2,
    ingredients: ["커피콩", "물"],
  },
  {
    name: "자몽허니블랙티",
    price: 4000,
    shots: 0,
    ingredients: ["자몽", "꿀", "홍차"],
  },
  {
    name: "화이트초코",
    price: 5000,
    shots: 1,
    ingredients: ["크림", "초코", "우유", "얼음"],
  },
];

const zeroShots = (x) => x.shots == 0;
const nonCoffee = starbucks.filter(zeroShots);
console.log(nonCoffee);

const sale = (x) => {
  x.price = x.ingredients.some((x) => x == "커피콩") ? x.price * 0.8 : x.price;
  return x;
};
const newArr = starbucks.map(sale);
console.log(newArr);

const honey = (x) => {
  if (!x.ingredients.includes("꿀")) {
    x.ingredients.push("꿀");
    x.name = x.name + "꿀💛";
    x.price = x.price + 300;
  }
  return x;
};
const newArr1 = starbucks.map(honey);
console.log(newArr1);

// string -> array
const arr = "엄준식".split(" ");
const arr1 = [..."엄준식"];
// array -> string
["김밥", "천국"].join(" ");
