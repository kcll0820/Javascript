// const mbti = prompt("MBTI를 입력하세요(대문자)");
// alert(
//   `${mbti[0].includes("E") ? "외향적" : "내향적"} ${
//     mbti[0].includes("N") ? "직관적" : "감각적"
//   } ${mbti[0].includes("T") ? "이성적" : "감성적"} ${
//     mbti[0].includes("J") ? "계획적" : "즉흥적"
//   } 이시군요!`
// );

// const email = prompt("이메일을 입력하세요");
// if (email.includes("@"))
//   if (email.includes(".com") || email.includes(".net"))
//     if (
//       email.includes("naver") ||
//       email.includes("kakao") ||
//       email.includes("yahoo") ||
//       email.includes("paran")
//     )
//       alert("이메일 타당함");
//     else alert("도메인을 포함하세요");
//   else alert(".com 이나 .net 을 포함하세요");
// else alert("@ 를 포함하세요");

const mbti = prompt("MBTI를 입력하세요(대문자)");
const first = mbti.slice(0, 1).toUpperCase(); // const first = mbti[0].toUpperCase();
const second = mbti.slice(1, 2).toUpperCase(); // const first = mbti[1].toUpperCase();
const third = mbti.slice(2, 3).toUpperCase(); // const first = mbti[2].toUpperCase();
const fourth = mbti.slice(3, 4).toUpperCase(); // const first = mbti[3].toUpperCase();
const mbtiObj = {
  E: "외향적",
  E: "내향적",
  E: "감각적",
  E: "직관적",
  E: "이성적",
  E: "감성적",
  E: "계획적",
  E: "즉흥적",
};
alert(
  `${mbtiObj[first]} ${mbtiObj[second]} ${mbtiObj[third]} ${mbtiObj[fourth]} 이시군요`
);

const email = prompt("이메일을 입력하세요");
const hasAt = email.includes("@");
const hasDot = email.includes(".com") || email.includes(".net");
const hasDomain =
  email.includes("naver") ||
  email.includes("kakao") ||
  email.includes("yahoo") ||
  email.includes("paran");
hasAt && hasDot && hasDomain
  ? alert("이메일 타당함")
  : alert("이메일 타당하지 않음");
