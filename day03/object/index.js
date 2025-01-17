// const coffee = {
//   name: "아메리카노",
//   price: 2500,
//   ingredients: ["물", "커피콩", "얼음"],
// };
// // .(dot) 연산자
// console.log(coffee.price);
// console.log(coffee["price"]);

// console.log(coffee.ingredients[1]);
// console.log(coffee["ingredients"][1]);

const dplus = {
  top: {
    playerName: "siwoo",
    champion: "Sion",
    kda: {
      kill: 1,
      death: 3,
      assist: 10,
    },
  },
  mid: {
    playerName: "showmaker",
    champion: "ahri",
    kda: {
      kill: 9,
      death: 2,
      assist: 7,
    },
  },
};

console.log(dplus.top.kda.kill + dplus.mid.kda.kill);

const lunch = {
  name: "햄버거",
  franchise: "버거킹",
};

// 오브젝트 데이터 추가
lunch.kcal = 900;
lunch.side = "치즈 스틱";
lunch.drink = "콜라";

// 오브젝트 데이터 삭제
delete lunch.name;

//
const drama = {
  title: "오징어게임2",
  grade: 18,
  genres: ["액션", "블랙 코미디", "군상극", "데스 게임"],
};

const a = drama.title; //오징어게임2
const { title } = drama; //오징어게임2
const [action, black] = drama.genres;

const menu = ["아메리카노", "라떼", "민트"];
const a1 = menu[0];
const [a2] = menu;

const player = {
  name: "이승엽",
  position: ["타자"],
  salary: 30000,
};

const coffee1 = {
  coffeeName: "아메리카노",
  price: 2500,
};

// key - value 이름이 같으면 생략 가능
const data = { player, coffee1: coffee1 };
console.log(data);
const data1 = { ...player, ...coffee1 };
console.log(data1);

const cosmatic = {
  type: "핸드크림",
  company: "카밀",
  price: 8000,
  ingredients: {
    first: {
      name: "글리세리",
      chemicals: ["수소", "산소"],
    },
    second: {
      name: "글리세리",
      chemicals: ["수소", "산소"],
    },
  },
};

const { company } = cosmatic;
const { first } = cosmatic.ingredients;
const test1 = { ...cosmatic.ingredients.first };

//laptop lap[허벅지 위]
const laptop = {
  title: "그램",
  price: 800000,
  specs: {
    cpu: "Intel i5",
    ram: "8GB",
    storage: "256GB SSD",
  },
};

const { cpu, ram, storage } = laptop.specs;
