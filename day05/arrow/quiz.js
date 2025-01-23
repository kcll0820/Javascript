function hello(name) {
  return `${name}님 문자 :${name.lenght}`;
}

const a = hello();
console.log(a);

function square_three(x) {
  return x ** 2 * 3;
}
function iunch_menu(x) {
  return `오늘의 점심 메뉴 :${x}입니다`;
}
function threeToArray(a, b, c) {
  return [a, b, c];
}

function getIphone(version, model, strong) {
  return { version: version, model: model, strong: strong };
}

function degree(a) {
  return a == 180 || a == 0
    ? "평각"
    : a > 180 && a > 90
    ? "둔각"
    : a == 90
    ? "직각"
    : a > 0 && a < 90
    ? "예각"
    : "다른각도로 다시 작성";
}

function str(a, b) {
  const ss = a.split(b);
  return ss[0].toUpperCase();
}

const c = str("icecream", "r");
console.log(c);

function nnn(a) {
  const ac = a.length;
  return ac <= 10 && ac >= 4 ? "길이가 적당 " : "길이가 안적당";
}

const aaa = nnn("asdasd");
console.log(aaa);
