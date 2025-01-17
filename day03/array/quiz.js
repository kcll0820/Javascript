const fruits = ["딸기", "블루베리", "배", "애플", "바나나"];

const [a, b, ...rest] = fruits; // 딸기, 블루베리, 나머지 변수

console.log(fruits[0] + fruits[2]); // 딸기, 배 가져와서 콘솔로 딸기, 배 출력
