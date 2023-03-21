# FE RULING

\***\*\*\*\*\*\*\*\*** 잘 부탁 드립니다 지혜 님,, \***\*\*\*\*\***\*\*\* \***\*\*\*\*\*\*\*\*** 잘 부탁 드립니다 은형 님,, \***\*\*\*\*\***\*\*\*

# Component

    쪼갤 때,

# git branch

main(origin)
feature/JH
features/EH

# Test JSX

> src > pages > ApiTest.jsx

# 내일 할 것

[v] fetch check
[v] 네비 연결
[v] 청크 연결
[] 로그인 & 쿠키에 jwt 토큰까지

<!-- [] 레지스터 -> 아이디.length >=5 <=12 / password.length >=5 <=15 -->

-->백 단에서 처리

# 3/18 11:51

[ ] 상기 쌤 강의 보기

[v] 해결해야 할 것 -> 토큰 발급 및 쿠키에 물리기
-> 토큰 쿠키에 물리기 통과 (cookies.set() 사용) / 토큰 발급은 서버 분들이 헤더에 하기로 명세 작성. 기다리는 중.

[v] signup -> 청크 거쳐서 포스트할 시, id가 바깥에 붙음.
청크에 데이터 보낼 때.. user를 {}로 감쌌음..

cors ~ 백에서 다 풀어버리는 것도 있고
~ front에서 froxy로 우회해서 연결

[ ] logout delete jwt

App> cookie

name : Authorization

login
/
hanghae9
pass!@#word2
/

//

# 내일 할 것

Response msg를 활용해서 alert 띄우기

## 추가..

어.. 근데 굳이 리스폰스 메시지를 활용할 필요가 없잖아?
유효성 규칙을 공유하고 있으면
그냥 state로 인풋값 보고 체크하면 되잖어??
??? 읭 ㅋ..

cf.)
https://velog.io/@niboo/React-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%82%AC%ED%95%98
%EA%B8%B0

cf.2)
https://velog.io/@94lfnv/React-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0

cf.3)
청크로 유효성 처리

https://github.com/codestates-seb/seb40_pre_032/blob/main/Fromtend/src/routes/signUp.js

# 방법 1

fetch('/api/users')
.then(response => response.json())
.then(data => {
if (data.statusCode === 400) {
alert(data.msg);
} else {
// handle other responses
}
})
.catch(error => console.error(error));

# 방법 2

axios.get('/api/users')
.then(response => {
const data = response.data;
if (data.statusCode === 400) {
alert(data.msg);
} else {
// handle other responses
}
})
.catch(error => console.error(error));

//
회원가입이랑
로그인

백단에서 유효성 검증 기준 받고,
내가 passwordCheck 같은 거 알아서 처리하고
state로

//
모양도 예쁘게 하자
인풋 밑에 스트링으로 유효성 알림 뜨게도 하고

//
test12
dldmsgud1!

///
15:00~

1. 회원가입 & 로그인 코드 정리
   [v] 로그인/회원가입 유효성 alert, thunk로 처리
   -> back 성님덜 인풋에 밸루 없을 때 response msg "000을 작성해 주세요" 추가 필요.
   [ ] 비밀번호 확인 client 단에서 추가하기
   -> user.password가 checkPw에 맞춰서 따라가면 if문이 동작을 안 함.

2. 헤더
   2-1. [v] 헤더 > 내비게이션 바
   2-2. [ ] 헤더 > 네비게이션 바 > token? 로그아웃 : 로그인
   2-2-1. token state 전역 관리 -> recoil?

3. 어바웃
4. 르탄이 이미지

질문
1청크 사용, 트라이캐치로 다 되는데 .. -> 사용할 이유 없다.
2리코일 또는 스토어. 토큰 상태 전역 관리 ? 노노 헤더에 적은 거 보자.

//이윤 매니저님
기능이 좀 적더라도 완성도가 높은 게 좋은 것 같다.
배포를 앞당겨서 .. ..... 같이 디버깅.....

======================================================
========================03/21=========================
======================================================

# dev입니다

# JH && EH

11:20-12:15

1. [v] Origin Dev "1st Merging"

# EH

14:00-

0. [V] isLogin Store 18:00

1. [V] cookies.remove("token") re-rendering 18:40

2. [ ] login/signup front validation

- [ ] signup front RegExp validation
- [ ] login front RegExp validation

3. [ ] login/signup view

- [ ] <Header/> display: none
- [ ] login align
- [ ] signup align

# JH
