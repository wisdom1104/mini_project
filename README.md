## 투게더

📝 프로젝트 소개 : 투게더(게더 내에서 발생하는 세션, 이벤트 등 공유 플랫폼) 주특기 프로젝트

📅 프로젝트 기간 : 2023.03.17 ~ 2023.03.23

👨‍👩‍👧‍👦 2조 : FE [이은형](https://github.com/eh-lee) [박지혜](https://github.com/wisdom1104)

# [시연영상](https://www.youtube.com/watch?v=0miNdco9kg8)

# [Notion](https://shocking-bike-e49.notion.site/2-4bcd1815b4d140de9a656c8b0c8107cb)

## 🔧 Technologies & Software Used

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-round&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-round&logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-round&logo=redux&logoColor=white"/> <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-round&logo=axios&logoColor=white"/>

<img src="https://img.shields.io/badge/git-F05032?style=flat-round&logo=git&logoColor=white"/> <img src="https://img.shields.io/badge/github-181717?style=flat-round&logo=github&logoColor=white"/> <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat&logo=Visual Studio Code&logoColor=white" />

<img src="https://img.shields.io/badge/Postman-FF6C37?style=flat-round&logo=Postman&logoColor=white"/>

## 🔑 프로젝트 구현 기능

1. 메인 화면 (게시물 조회)

   - 로그인 한 사용자는 게시물을 조회할 수 있습니다.

   - 페이지네이션을 하여 한 페이지에 20개의 게시물이 보여집니다.

   - 네비게이션바를 만들어 구성하였습니다.

   - 메인화면에서 게시물 등록을 할 수 있습니다.

2. 회원가입 로그인

   - JWTWebToken + spring boot Security 를 적용하여 구현하였습니다.

   - 이메일 중복, 닉네임 중복 체크를 구현하였습니다.

3. 게시물 등록 (상품등록)

   - 기수와 주특기 선택 후 제목과 내용 등록이 가능합니다.

   - 제목은 3~25자, 내용 10~2000자로 작성할 수 있습니다.

4. 게시물 상세 조회

   - 게시물에 대한 정보를 조회 가능합니다.

   - 상품을 등록한 작성자만 상품 수정, 삭제가능합니다.

   - 게시물에 댓글 작성을 할 수 있습니다.

   - 게시물에 달린 댓글을 조회할 수 있습니다.

## 🏀 Trouble Shooting

[FE]

1. 처음 서버와 연결 시 게시물이 띄워지지 않고403에러가 떴습니다.  
   -> 확인해보니 헤더에 토큰값을 넣어주지 않아 권한 없음으로 인한 오류여서 헤더에 토큰을 담아서 보내주니 정상작동했습니다.

2. axios.post로 게시물 작성 시 정상 작동을 하지 않는 문제가 있어서 확인한 결과 작성한 axios.post의 순서가 잘못 되어 있었습니다.  
   -> 확인 후 axios.post("주소", 데이터, 헤더)의 순서대로 작성하여 시도하니 문제없이 정상적으로 게시물이 작성되는 것을 볼 수 있었습니다.

3. 게시물 작성 후 유효성 검사에서 걸리면 데이터가 저장되지 않고, 유효성 검사를 통과하면 데이터가 저장되는 api가 정상 실행되면
   useEffect로 alert 창으로 성공메세지를 띄우도록 했지만 정상 작동 후에 다시 alert창이 반복해서 뜨는 문제가 있었습니다.  
   -> 확인한 결과 initialState의 isSuccess가 false였는데 true로 바꾸고 useEffect에서 !isSuccess일 때 실행할 수 있도록 하자 정상 작동했습니다.

4. 게시물과 댓글을 본인이나 관리자만 수정 및 삭제할 수 있도록 하는 과정에서 검사할 수 있는 데이터가 필요했습니다.  
   -> 서버에서 넘겨주는 유저를 식별할 수 있는 데이터를 조건문에 걸어서 검사할 수 있도록 했습니다.

5. 로그인 과정에서 Cookie에 token과 nickname key를 response받은 이후, get api method를 실행하는 페이지에 접속 시도 시,
   request headerd에 token을 담을 때, Cookie에 들어 있는 두 key(token & nickname)가 전부 담기는 문제가 발생했습니다.  
   -> browser document의 cookie data를 split method등으로 가공하여 request시 token key와 nickname key를 분리하도록 처리하여 해결했습니다.

6. cookie의 token을 검사하여 페이지단에서 발생하는 path trolling에 대한 guard를 useEffect를 사용하여 잡았습니다.

7. Auth 기능 동작시 프론트에서 유효성 검사를 하도록 합니다.
   Get method로 유저의 데이터를 서버에서 받아오지 않고 front에서 유효성 처리를 하기 위해 고민했습니다.  
   -> state hook을 활용하여 해결했습니다.
