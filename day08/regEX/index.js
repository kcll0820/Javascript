// 정규표현식 타입 => /문자열/
const a = /hello/i; // i 는 대소문자 무시해달라는 뜻

const b = a.test("HELLO world"); //true
console.log(b);

const str = "hello world";
const result = str.match(a); //일치하면 배열로 만들어줌
console.log(result);

const c = /a{2,4}/;
// aa or aaa or aaaa 있냐
console.log(c.test("a"));
console.log(c.test("aa"));
console.log(c.test("aaa"));
console.log(c.test("aaaa"));
console.log(c.test("aaaaa"));
