const usernickname = prompt("닉네임을 입력하세요") || "Guest";
alert(`${usernickname}님 환영합니다`);

const usernickname1 = prompt("닉네임을 입력하세요");
alert(`${usernickname1 || "Guest"}님 환영합니다`);

const password = prompt("화장실 비밀번호를 입력하세요");
password == "1024" && alert("화장실 비밀번호 정답");
