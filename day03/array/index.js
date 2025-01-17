// array 타입
const menu = ["아메리카노", "라떼", "바닐라"];
console.log(menu[1]);
const b = [100, false, "지각", ["커피", "콜라", "아이스크림"]];

const soccer = ["손흥민", "황희찬", "이강인", "김민재"];
const soccer1 = new Array(10);

// 배열 관련된 연산자
// 1. Indexing 연산자 (=꺼내기)
const test = [menu, soccer];
console.log(test[0][2]); //바닐라
console.log(test[1][1]); //황희찬

// 2. Destructuring 연산자 (=분해)
const test1 = [...menu, ...soccer];
console.log(test1);

// 3. Rest 연산자
const [son, ...abc] = soccer; //["손흥민", "황희찬", "이강인", "김민재"]
console.log(son);
console.log(abc);

const [son1, ...abc1] = soccer; //["손흥민", "황희찬", "이강인", "김민재"]
console.log(son1); //손흥민
console.log(abc1); //황희찬

// 4. add 및 update 연산자
soccer[4] = "박지성";
soccer[1] = "씨찬이형";
console.log(soccer);

// 5. delete 연산자 (=삭제)
delete soccer[3];
console.log(soccer);
