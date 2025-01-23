// map : 요소를 조건(함수)에 맞게 바꿔줌
// some : 요소중에 조건(함수)에 맞는거 하나라도 갖는지 물음
// every : 요소중에 조건(함수)에 맞는거 모두 갖는지 물음

// const arr = [1, 3, 5, 7, 9];

// const double = (x) => x * 2;
// const newArr = arr.map(double);
// console.log(newArr);

// const plus10 = (x) => x + 10;
// const newArr1 = arr.map(plus10);
// console.log(newArr1);

// const change = (x) => (x ** 2 < 10 ? "짜장면" : "탕수육");
// const newArr2 = arr.map(change);
// console.log(newArr2);

// const changeFood = (x) => (x ** 3 < 100 ? "커피" : "붕어빵");
// const newArr3 = arr.map(changeFood);
// console.log(newArr3);

// const fruits = [
//   "peach",
//   "mango",
//   "strawberry",
//   "apple",
//   "orange",
//   "mandarin",
//   "plum",
//   "persimmon",
//   "fig",
// ];

// const changeHeart = (word) => (word.length >= 6 ? `${word}💙` : `${word}❤`);
// const a = fruits.map(changeHeart);
// console.log(a);

// const twice = (word) => (word.length * 2 < 15 ? "짧음" : "김");
// const b = fruits.map(twice);
// console.log(b);

// const arr = [1, 3, 5, 7, 9];

// const isThree = (x) => x == 3;
// const hasThree = arr.some(isThree);
// console.log(hasThree);

// const isUnderFive = (x) => x < 5;
// const hasUnderFive = arr.some(isUnderFive);
// console.log(hasUnderFive);

// const isEven = (x) => x % 2 == 0;
// const hasEven = arr.some(isEven);
// console.log(hasEven);

// const fruits = [
//   "peach",
//   "mango",
//   "strawberry",
//   "apple",
//   "orange",
//   "mandarin",
//   "plum",
//   "persimmon",
//   "fig",
// ];

// const kbs = (x) =>
//   x.startsWith("k") || x.startsWith("b") || x.startsWith("s") ? true : false;
// const haskbs = fruits.some(kbs);
// console.log(haskbs);

// const length = (x) => (4 <= x.length && x.length <= 16 ? true : false);
// const arrlength = fruits.every(length);
// console.log(arrlength);

// const iou = (x) =>
//   x.includes("i") || x.includes("o") || x.includes("u") ? "💛" : "🧨";
// const hasiou = fruits.map(iou);
// console.log(hasiou);

// const song = `I, I just woke up from a dream
// Where you and I had to say goodbye
// And I don't know what it all means
// But since I survived, I realized
// Wherever you go, that's where I'll follow
// Nobody's promised tomorrow
// So I'ma love you every night like it's the last night
// Like it's the last night
// If the world was ending
// I'd wanna be next to you
// If the party was over
// And our time on Earth was through
// I'd wanna hold you just for a while
// And die with a smile
// If the world was ending
// I'd wanna be next to you
// Ooh, lost, lost in the words that we scream
// I don't even wanna do this anymore
// 'Cause you already know what you mean to me
// And our love's the only one worth fighting for
// Wherever you go, that's where I'll follow
// Nobody's promised tomorrow
// So I'ma love you every night like it's the last night
// Like it's the last night
// If the world was ending
// I'd wanna be next to you
// If the party was over
// And our time on Earth was through
// I'd wanna hold you just for a while
// And die with a smile
// If the world was ending
// I'd wanna be next to you
// Right next to you
// Next to you
// Right next to you
// Oh-oh
// If the world was ending
// I'd wanna be next to you
// If the party was over
// And our time on Earth was through
// I'd wanna hold you just for a while
// And die with a smile
// If the world was ending
// I'd wanna be next to you
// If the world was ending
// I'd wanna be next to you
// I'd wanna be next to you`;

// const result3 = song
//   .split(" ")
//   .map((word) => (word.length > 6 ? "💛" : word))
//   .join(" ");
// console.log(result3);

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter [입구컷]
// const num = (x) => x >= 6;
// const newArr = numArr.filter(num);
// console.log({ newArr: newArr });

const oddArr = numArr.filter((x) => x % 2);

// 제곱해서 100보다 작으면 살리고 +10
const newArr = numArr.filter((x) => x ** 2 < 100).map((x) => x + 10);

console.log(oddArr);
