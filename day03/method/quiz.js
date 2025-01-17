const userId = prompt("만들고싶은 ID를 입력하세요");

if (4 > userId.length || userId.length > 16)
  alert("아이디의 길이가 유효하지 않습니다");
else if (
  !(
    userId.includes("!") ||
    userId.includes("@") ||
    userId.includes("#") ||
    userId.includes("&")
  )
)
  alert("반드시 특수문자 (!, @, #, $) 중 하나를 포함해야합니다");
else if (
  userId.slice(userId.length - 1, userId.length) !=
  userId.slice(userId.length - 1, userId.length).toUpperCase()
)
  alert("마지막 알파벳은 대문자로 해야합니다");
else alert("아이디 완성");
