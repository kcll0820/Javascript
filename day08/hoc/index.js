const arr = [1, 3, 5, 7, 9];

// const q1 = Array(1001)
//   .fill(0)
//   .map((x, i) => i);
// console.log(q1);

// const q2 = Array(101)
//   .fill(0)
//   .map((x, i) => i)
//   .filter((x) => x % 5 == 0);
// console.log(q2);

// const q3 = Array(101)
//   .fill(0)
//   .map((x, i) => i)
//   .map((x) => {
//     if (x % 3 == 0 && x % 5 == 0) return "🐰";
//     else if (x % 3 == 0) return "🐭";
//     else if (x % 5 == 0) return "🐷";
//     else return x;
//   });
// console.log(q3);
const makeZodiac = (to, from) => {
  const animal = {
    0: "🐵",
    1: "🐔",
    2: "🐶",
    3: "🐷",
    4: "🐭",
    5: "🐮",
    6: "🐯",
    7: "🐰",
    8: "🐉",
    9: "🐍",
    10: "🐴",
    11: "🐏",
  };
  return Array(from - to)
    .fill(0)
    .map((v, i) => i + 1900)
    .map((v) => {
      return { 연도: v, 띠: animal[v % 12] };
    });
};

const result = makeZodiac(1000, 3000);
console.log(result);
