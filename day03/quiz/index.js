// const age = +prompt("나이를 입력하세요");
// const busType = +prompt("버스 노선을 선택하세요(1~3)");

// if (busType == 1) {
//   if (age <= 7 || 65 <= age)
//     alert(
//       `나이는 ${age}세, 선택하신 버스 노선은 시내버스, 버스요금은 무료입니다.`
//     );
//   else if (8 <= age && age <= 19)
//     alert(
//       `나이는 ${age}세, 선택하신 버스 노선은 시내버스, 버스요금은 ${
//         1200 * 0.7
//       }입니다.`
//     );
//   else {
//     alert(
//       `나이는 ${age}세, 선택하신 버스 노선은 시내버스, 버스요금은 ${
//         1200 * 1
//       }입니다.`
//     );
//   }
// } else if (busType == 2) {
//   if (age <= 7 || 65 <= age)
//     alert(
//       `나이는 ${age}세, 선택하신 버스 노선은 광역버스, 버스요금은 무료입니다.`
//     );
//   else if (8 <= age && age <= 19)
//     alert(
//       `나이는 ${age}세, 선택하신 버스 노선은 광역버스, 버스요금은 ${
//         2000 * 0.7
//       }입니다.`
//     );
//   else {
//     alert(
//       `나이는 ${age}세, 선택하신 버스 노선은 광역버스, 버스요금은 ${
//         2000 * 1
//       }입니다.`
//     );
//   }
// } else if (busType == 3) {
//   if (age <= 7 || 65 <= age)
//     alert(
//       `나이는 ${age}세, 선택하신 버스 노선은 마을버스, 버스요금은 무료입니다.`
//     );
//   else if (8 <= age && age <= 19)
//     alert(
//       `나이는 ${age}세, 선택하신 버스 노선은 마을버스, 버스요금은 ${
//         1000 * 0.7
//       }입니다.`
//     );
//   else {
//     alert(
//       `나이는 ${age}세, 선택하신 버스 노선은 마을버스, 버스요금은 ${
//         1000 * 1
//       }입니다.`
//     );
//   }
// } else {
//   alert("버스 노선 번호를 입력해주세요(1~3)");
// }

// const age = +prompt("나이를 입력하세요");
// const busType = +prompt("버스 노선을 선택하세요(1~3)");
// const busData = ["시내버스", "광역버스", "마을버스"];
// const busPrice = [1200, 2000, 1000];

// if (age <= 7 || 65 <= age) alert("무료입니다");
// else if (8 <= age && age <= 19) {
//   alert(
//     `청소년 ${busData[busType - 1]} 비용은 ${
//       busPrice[busType - 1] * 0.7
//     }원 입니다.`
//   );
// } else {
//   alert(
//     `청소년 ${busData[busType - 1]} 비용은 ${
//       busPrice[busType - 1] * 1
//     }원 입니다.`
//   );
// }

const movieType = +prompt("영화 종류를 선택하세요(1~3)");
const age = +prompt("나이를 입력하세요");
const movieData = ["액션 영화", "로맨틱 코미디", "공포 영화"];
const moviePrice = [10000, 8000, 9000];

if (age < 13)
  alert(
    `선택하신 ${movieData[movieType - 1]} 티켓가격은 ${
      moviePrice[movieType - 1] * 0.5
    }원입니다`
  );
else if (age >= 60)
  alert(
    `선택하신 ${movieData[movieType - 1]} 티켓가격은 ${
      moviePrice[movieType - 1] * 0.7
    }원입니다`
  );
else {
  alert(
    `선택하신 ${movieData[movieType - 1]} 티켓가격은 ${
      moviePrice[movieType - 1] * 1
    }원입니다`
  );
}
