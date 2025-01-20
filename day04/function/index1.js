// 함수
// 자바스크립트에서는 함수를 일급 객체[타입]로 취급함

// array, object, function
// const a = [];
// const b = {};
// const c = function (a, b) {
//   return a + b;
// };
// const d = c(1, 2); // 3

// const subway = {
//   name: "부평점 서브웨이",
//   sale: 0,
//   sellBread: function () {
//     this.sale = this.sale + 1000;
//   },
//   printSale: function () {
//     console.log(this.sale);
//   },
// };

// subway.sellBread();
// subway.sellBread();
// subway.sellBread();
// subway.printSale();

const baskinRabbins = {
  icecream: [
    { name: "민트초코", price: 2000 },
    { name: "엄마는외계인", price: 2500 },
    { name: "이상한나라의솜사탕", price: 4000 },
  ],
  sale: 0,
  sellIcecream: function (num) {
    if (this.icecream[num] == undefined) console.log("그런 번호는 없습니다");
    else {
      console.log(`${this.icecream[num].name}아이스크림이 판매되었습니다`);
      this.sale = this.sale + this.icecream[num].price;
    }
  },
  printSale: function () {
    console.log(`현재 매출:${this.sale}`);
  },
  addIcecream: function (name, price) {
    this.icecream.push({ name: name, price: price });
  },
};

baskinRabbins.sellIcecream(0);
baskinRabbins.sellIcecream(1);
baskinRabbins.sellIcecream(2);
baskinRabbins.sellIcecream(3);
baskinRabbins.printSale();
baskinRabbins.addIcecream("치즈케이크", 3500);
baskinRabbins.sellIcecream(3);
baskinRabbins.printSale();
