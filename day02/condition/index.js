// if문
// const username = prompt("이름이 뭐에요");
// if (username == "엄준식") {
//   alert("살아있다");
// }

// const num = Number(prompt("숫자를 입력하세요"));
// if (num > 0) {
//   alert("양의 정수입니다");
// } else {
//   alert("음의 정수입니다");
// }

// const num = +prompt("숫자(정수)를 입력하세요");
// if (num % 2) {
//   alert("홀수입니다");
// } else {
//   alert("짝수입니다");
// }

// const num = +prompt("정수 입력");
// if (num > 0) {
//   alert("양의 정수");
// } else if (num == 0) {
//   alert("0입니다");
// } else {
//   alert("음의 정수");
// }

// const num = +prompt("숫자를 입력하세요");
// if (num > 0 && num % 2 == 1) {
//   alert("양의 홀수입니다");
// } else if (num > 0 && num % 2 == 0) {
//   alert("양의 짝수입니다");
// } else if (num < 0 && num % 2 == 1) {
//   alert("음의 홀수입니다");
// } else if (num < 0 && num % 2 == 0) {
//   alert("음의  짝수입니다");
// } else if (num == 0) {
//   alert("0입니다");
// } else {
//   const result = num == 0 ? "0입니다" : "에러입니다";
//   alert(result);
// }

const year = +prompt("몇년생이신가요");
if (year % 12 == 0) {
  alert("원숭이띠입니다");
} else if (year % 12 == 1) {
  alert("닭띠입니다");
} else if (year % 12 == 2) {
  alert("개띠입니다");
} else if (year % 12 == 3) {
  alert("돼지띠입니다");
} else if (year % 12 == 4) {
  alert("쥐띠입니다");
} else if (year % 12 == 5) {
  alert("소띠입니다");
} else if (year % 12 == 6) {
  alert("호랑이띠입니다");
} else if (year % 12 == 7) {
  alert("토끼띠입니다");
} else if (year % 12 == 8) {
  alert("용띠입니다");
} else if (year % 12 == 9) {
  alert("뱀띠입니다");
} else if (year % 12 == 10) {
  alert("말띠입니다");
} else {
  alert("양띠입니다");
}
