// const starbucks = {
//   menu: [
//     { name: "아아", price: 4000 },
//     { name: "라떼", price: 4500 },
//     { name: "유자차", price: 4000 },
//   ],
//   sale: 0,
//   sellMenu: function (num) {
//     if (!this.menu[num]) console.log("그런 메뉴는 없습니다");
//     else {
//       console.log(`${this.menu[num].name} 팔렸습니다`);
//       this.sale = this.sale + this.menu[num].price;
//     }
//   },
//   printSale: function () {
//     console.log(`현재 매출은: ${this.sale}원 입니다`);
//   },
//   addMenu: function (a, b) {
//     console.log(`${a}메뉴가 추가되었습니다`);
//     this.menu.push({ name: a, price: b });
//   },
// };

// starbucks.sellMenu(0);
// starbucks.sellMenu(1);
// starbucks.sellMenu(3);
// starbucks.printSale();
// starbucks.addMenu("딸기주스", 5000);
// starbucks.sellMenu(2);
// starbucks.sellMenu(3);
// starbucks.printSale();

// const magician = {
//   hp: 100,
//   mp: 100,
//   level: 1,
//   xp: 0,
//   getXp: function (xp) {
//     this.xp = this.xp + xp;
//     if (this.xp >= 100) {
//       this.level = this.level + 1;
//       this.xp = this.xp - 100;
//       console.log(`레벨 업, 현재 레벨: ${this.level}`);
//     }
//   },
//   magicClaw: function () {
//     if (this.mp < 10) console.log(`현재 마나: ${this.mp}, 마나가 부족합니다`);
//     else {
//       console.log("매직 클로 발동");
//       this.mp = this.mp - 10;
//       this.getXp(10);
//     }
//   },
//   teleport: function () {
//     if (this.mp < 50) console.log(`현재 마나: ${this.mp}, 마나가 부족합니다`);
//     else {
//       console.log("텔레포트 발동");
//       this.mp = this.mp - 50;
//       this.getXp(50);
//     }
//   },
//   potionDrink: function () {
//     this.hp = this.hp + 50;
//     this.mp = this.mp + 50;
//     console.log(`포션을 마셨습니다 현재 체력 :${this.hp}, 마나: ${this.mp}`);
//   },
// };

// magician.magicClaw();
// magician.teleport();
// magician.teleport();
// magician.potionDrink();
// magician.teleport();

// const youtube = {
//   id: "mini",
//   subscribeChannels: ["태하", "한화이스포츠", "티원"],
//   likeChannels: ["태하", "LCK"],
//   subscribe: function (newChannel) {
//     this.subscribeChannels.push(newChannel);
//     console.log(`${this.subscribeChannels}`);
//   },
//   like: function (newLike) {
//     this.likeChannels.push(newLike);
//     console.log(`${this.likeChannels}`);
//   },
// };

// youtube.subscribe("G무비");
// youtube.like("E무비");

// const car = {
//   name: "k5",
//   speed: 0,
//   speedUp: function (up) {
//     this.speed = this.speed + up;
//     console.log(`속도를 올립니다. 현재속도: ${this.speed}`);
//   },
//   speedDown: function (down) {
//     this.speed = this.speed ? this.speed - down : 0;
//     console.log(`속도를 내립니다. 현재속도: ${this.speed}`);
//   },
//   break: function () {
//     this.speed = 0;
//     console.log(`브레이크를 밟았습니다. 현재속도: ${this.speed}`);
//   },
//   speedNow: function () {
//     console.log(`현재속도: ${this.speed}`);
//   },
// };

// car.speedUp(50);
// car.speedDown(20);
// car.speedDown(20);
// car.speedDown(20);
// car.break();

const calculator = {
  result: 0,
  showHistorys: [],
  add: function (x) {
    this.result = this.result + x;
    this.showHistory();
  },
  minus: function (x) {
    this.result = this.result - x;
    this.showHistory();
  },
  multiply: function (x) {
    this.result = this.result * x;
    this.showHistory();
  },
  divibe: function (x) {
    this.result = this.result / x;
    this.showHistory();
  },
  square: function () {
    this.result = this.result * this.result;
    this.showHistory();
  },
  clear: function () {
    this.result = 0;
    this.showHistory();
  },
  showHistory: function () {
    this.showHistorys.push(this.result);
  },
};

calculator.add(10);
calculator.minus(5);
calculator.multiply(2);
calculator.divibe(2);
calculator.square();
calculator.showHistory();
calculator.clear();
calculator.showHistory();
