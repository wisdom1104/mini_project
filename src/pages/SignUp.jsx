import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __signUp } from "../redux/modules/login";

const SignUp = () => {
  const dispatch = useDispatch();
  const navi = useNavigate();
  // const [usernameMsg, setUsernameMsg] = useState("");

  const [user, setUser] = useState({
    username: "",
    password: "",
    nickname: "",
    email: "",
    admin: false,
    admintoken: "",
  });

  const changeInputHandler = (e) => {
    const { value, name } = e.target;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  //=====================================================
  //=================== 유효성 검사 1 ======================
  //=====================================================

  //RegExp 추가

  // ================ 아이디 유효성 검사 ====================

  const [usernameMsg, setUsernameMsg] = useState("");
  const validUsername = (e) => {
    const username = e.target.value;
    const isValidUsername = /^(?=.*[0-9])(?=.*[a-z]).{5,12}$/.test(username);
    if (isValidUsername) {
      setUsernameMsg("올바른 형식입니다.");
    } else {
      setUsernameMsg(
        "아이디는 5~12글자, 알파벳 소문자와 숫자를 최소 한 자 이상 포함해야 합니다."
      );
    }
  };

  // ================ 비밀번호 유효성 검사 ===================
  //레겍스 체크
  const [passwordMsg, setPasswordMsg] = useState("");
  const validPassword = (e) => {
    const password = e.target.value;
    const isValidPassword =
      /^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{5,15}$/.test(
        password
      );
    if (isValidPassword) {
      setPasswordMsg("올바른 형식입니다.");
    } else {
      setPasswordMsg(
        "비밀번호는 5~15글자, 알파벳, 숫자, 특수문자를 최소 하나씩 입력해야 합니다."
      );
    }
  };

  // ================= 비밀번호 일치 검사 ====================
  // user.password가 checkPw에 맞춰서 따라가면 왜 if문이 반응을 안 하지?..
  // -> useCallback ( , [user.password])도 안 됨
  const [confirmPwMsg, setConfirmPwMsg] = useState("");
  const onChangeConfirmPw = (e) => {
    e.preventDefault();
    const checkPw = e.target.value;

    if (user.password.length >= 1 && user.password !== checkPw) {
      setConfirmPwMsg("비밀번호와 비밀번호 확인의 값이 일치하지 않습니다.");
    }
    if (user.password.length >= 1 && user.password === checkPw) {
      setConfirmPwMsg("비밀번호가 일치합니다.");
    }
  };

  //================== 닉네임 유효성 검사 ===================
  const [nicknameMsg, setNicknameMsg] = useState("");
  const validNickname = (e) => {
    const nickname = e.target.value;
    const isValidNickname = /^[가-힣a-zA-Z0-9]{2,15}$/.test(nickname);
    if (isValidNickname) {
      setNicknameMsg("올바른 형식입니다.");
    } else {
      setNicknameMsg(
        "닉네임은 2~15글자, 한글, 알파벳, 숫자를 입력하셔야합니다"
      );
    }
  };
  //================== 이메일 유효성 검사 ===================
  //레겍스 체크
  const [emailMsg, setEmailMsg] = useState("");
  const validEmail = (e) => {
    const email = e.target.value;
    const isValidEmail =
      /^[a-zA-Z0-9+-\\_.]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$/.test(email);
    if (isValidEmail) {
      setEmailMsg("올바른 형식입니다.");
    } else {
      setEmailMsg("이메일 형식에 맞지 않습니다.");
    }
  };

  //=====================================================
  //=================== 유효성 검사 2 ======================
  //=====================================================

  // ================= thunk ver. =======================
  const submitButtonHandler = async (e) => {
    e.preventDefault();

    // =============== 인풋 공백 검사 ======================
    if (
      user.username === "" ||
      user.password === "" ||
      user.passwordCheck === "" ||
      user.nickname === "" ||
      user.email === ""
    ) {
      alert("빈 칸을 작성해 주세요.");
      return;
    }

    // if (user.username.length <= 5) {
    //   setUsernameMsg("아이디는 다섯 글자 이상이어야 합니다");
    //   console.log(usernameMsg);
    // } else {
    //   setUsernameMsg("");
    // }

    // ===================================================
    // =============== 서버 2차 유효성 검사 ==================

    const result = await dispatch(__signUp(user));
    if (result.type === "signUp/fulfilled") {
      navi("/login");
    }
  };
  // ================= thunk ver. ========================

  // ================== non thunk ver. ===================
  // const submitButtonHandler = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await apis.post("/api/signup", user);
  //     alert(`${user.nickname} 님 회원가입에 성공하였습니다.`);
  //     navi("/login");
  //   } catch (error) {
  //     console.log(error);
  //     const errorMsg = error.response.data.msg;
  //     alert(`${errorMsg}`);
  //   }
  // };
  // ================== non thunk ver. ===================

  return (
    <Container onSubmit={submitButtonHandler}>
      <h1>회원가입</h1>
      <div>
        <div>
          <div>아이디</div>
          <input
            type="text"
            value={user.username}
            name="username"
            onChange={(e) => {
              validUsername(e);
              changeInputHandler(e);
            }}
            placeholder="아이디를 입력해 주세요."
          />
          <p style={{ fontSize: "10px" }}>{usernameMsg}</p>
        </div>
        <div>
          <div>비밀번호</div>
          <input
            type="password"
            value={user.password}
            name="password"
            onChange={(e) => {
              validPassword(e);
              changeInputHandler(e);
            }}
            placeholder="비밀번호를 입력해 주세요."
          />
          <p style={{ fontSize: "10px" }}>{passwordMsg}</p>
        </div>
        <div>
          <div>비밀번호 확인</div>
          <input
            type="password"
            value={user.passwordCheck}
            name="passwordCheck"
            onChange={onChangeConfirmPw}
            placeholder="비밀번호를 다시 입력해 주세요."
          />
          <p style={{ fontSize: "10px" }}>{confirmPwMsg}</p>
        </div>
        <div>
          <div>닉네임</div>
          <input
            type="text"
            value={user.nickname}
            name="nickname"
            onChange={(e) => {
              changeInputHandler(e);
              validNickname(e);
            }}
            placeholder="닉네임을 입력해 주세요."
          />
          <p style={{ fontSize: "10px" }}>{nicknameMsg}</p>
        </div>
        <div>
          <div>이메일</div>
          <input
            type="text"
            value={user.email}
            name="email"
            onChange={(e) => {
              changeInputHandler(e);
              validEmail(e);
            }}
            placeholder="이메일을 입력해 주세요."
          />
          <p style={{ fontSize: "10px" }}>{emailMsg}</p>
        </div>
      </div>
      <button>완료</button>
    </Container>
  );
};

const Container = styled.form`
  gap: 20px;
  height: 95vh;
  min-width: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export default SignUp;

//=========================================================
//=========================================================
//=========================================================
//=========================================================

// const submitButtonHandler = async (e) => {
//   e.preventDefault();
//   try {
//     // await apis.post("/api/signup", user);
//     dispatch(__signUp(user));
//     alert(`${user.nickname} 님 회원가입에 성공하였습니다.`);
//     navi("/login");
//   } catch (e) {
//     alert("유효성 알림하기");
//   }
// };

//---------------------------------------------------------

//최최신 트라이// 최종//
// const submitButtonHandler = async (e) => {
//   e.preventDefault();
//   try {
//     // dispatch(__signUp(user));
//     await apis.post("/api/signup", user);
//     alert(`${user.nickname} 님 회원가입에 성공하였습니다.`);
//     navi("/login");
//   } catch (error) {
//     console.log(error);
//     const errorMsg = error.response.data.msg;
//     console.log(error.response.data.msg);
//     alert(`${errorMsg}`);
//   }
// };

//최최신 트라이//

//최신 트라이 (성공. 근데 회원가입 성공했을 때도 페치를 보냄)

// const submitButtonHandler = async (e) => {
//   e.preventDefault();
//   try {
//     await apis.post("/api/signup", user);
//     // dispatch(__signUp(user));
//     alert(`${user.nickname} 님 회원가입에 성공하였습니다.`);
//     navi("/login");
//     const response = await fetch("http://3.39.255.221/api/signup");
//     if (!response.ok) {
//       const error = new Error("HTTP Error");
//       throw error;
//     }
//   } catch (error) {
//     const errorMsg = error.response.data.msg;
//     console.log(error.response.data.msg);
//     alert(`${errorMsg}`);
//   }
// };

// 트라이
// const submitButtonHandler = async (e) => {
//   e.preventDefault();
//   try {
//     await apis.post("/api/signup", user);
//     alert(`${user.nickname} 님 회원가입에 성공하였습니다.`);
//     navi("/login");
//   } catch (error) {
//     apis
// .get("/api/signup")
//get methods가 닫혀 있으니 안 되겟죠?
// .then((response) => {
//         if (!response.data.success) {
//           console.log(response.status);
//           alert(`${response.data.msg}`);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     alert("유효성 알림하기");
//   }
// };
//--------------------------

// const submitButtonHandler = async (e) => {
//   e.preventDefault();
//   apis
//     .post("/api/signup", user)
//     .then(() => {
//       alert(`${user.nickname} 님 회원가입에 성공하였습니다.`);
//       navi("/login");
//     })
//     .catch((error) => {
// fetch("/api/signup")
//         //http에 접근해서 브라우저 데이터 받아오는 fetch();
// .then((response) => {
// if (!response.ok) {
//             console.log(response.statusCode);
//             return response.json();
//             //response 객체를 json() 메서드로 반환하면
//             //data에 json 데이터가 JS 객체로 변환되어 저장됨
//           }
//         })

//         .then((data) => {
//           console.log(data);
//           //근데 왜 undefined?
//           alert(`${data.msg}`);
//         });

//       // .then((response) => response.json())
//       // .then((data) => {
//       //   console.log(data);
//       // });

//       alert("유효성 알림하기");
//     });
// };

//fetch랑 axios 둘 다 http request랑 response에 접근ㅎ

// const submitButtonHandler = async (e) => {
//   e.preventDefault();
//   try {
//     await apis.post("/api/signup", user);
//     // dispatch(__signUp(user));
//     alert(`${user.nickname} 님 회원가입에 성공하였습니다.`);
//     navi("/login");
//   } catch (e) {
//     fetch("/api/signup").then((response) => {
//       if (!response.ok) {
//         console.log(response.statusCode);
//         alert(`${response.msg}`);
//       }
//     });
//     alert("유효성 알림하기");
//   }
// };

// const submitButtonHandler = async (e) => {
//   e.preventDefault();
//   try {
//     await apis.post("/api/signup", user);
//     // dispatch(__signUp(user));
//     alert(`${user.nickname} 님 회원가입에 성공하였습니다.`);
//     navi("/login");
//   } catch (e) {
//     alert("유효성 알림하기");
//   }
// };

//   return (
//     <Container onSubmit={submitButtonHandler}>
//       <h1>회원가입</h1>
//       <div>
//         <div>
//           <div>아이디</div>
//           <input
//             type="text"
//             value={user.username}
//             name="username"
//             onChange={changeInputHandler}
//             placeholder="아이디를 입력해 주세요."
//           />
//         </div>
//         <div>
//           <div>비밀번호</div>
//           <input
//             type="password"
//             value={user.password}
//             name="password"
//             onChange={changeInputHandler}
//             placeholder="비밀번호를 입력해 주세요."
//           />
//         </div>
//         {/* <div>
//           <div>비밀번호 확인</div>
//           <input
//             type="password"
//             value={user.passwordCheck}
//             name="passwordCheck"
//             onChange={changeInputHandler}
//             placeholder="비밀번호를 다시 입력해 주세요."
//           />
//         </div> */}
//         <div>
//           <div>닉네임</div>
//           <input
//             type="text"
//             value={user.nickname}
//             name="nickname"
//             onChange={changeInputHandler}
//             placeholder="닉네임을 입력해 주세요."
//           />
//         </div>
//         <div>
//           <div>이메일</div>
//           <input
//             type="text"
//             value={user.email}
//             name="email"
//             onChange={changeInputHandler}
//             placeholder="이메일을 입력해 주세요."
//           />
//         </div>
//       </div>
//       <button>완료</button>
//     </Container>
//   );
// };

// const Container = styled.form`
//   gap: 20px;
//   height: 95vh;
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   justify-content: center;
// `;

// export default SignUp;

///----------------------------------------------------------------//
///---------------------------- ver 1.0 ---------------------------//
///----------------------------------------------------------------//

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import { __signUp } from "../redux/modules/login";
// import { apis } from "../shared/axios";
// // import api from "./testApi";

// const SignUp = () => {
//   const dispatch = useDispatch(); // 청크용
//   const navi = useNavigate();
//   const [user, setUser] = useState({
//     // id: "",
//     // passwordCheck: "",

//     username: "",
//     password: "",
//     nickname: "",
//     email: "",
//     admin: false,
//     admintoken: "",
//   });

//   const changeInputHandler = (e) => {
//     const { value, name } = e.target;
//     setUser((prev) => {
//       return { ...prev, [name]: value };
//     });
//   };

//   // const [usernames, setUsernames] = useState([]);
//   // const [nicknames, setNicknames] = useState([]);
//   // const [emails, setEmails] = useState([]);

//   // // 중복 여부 검사 준비
//   // const fetchUsers = async () => {
//   //   try {
// const { data } = await api.get("/signup");
//   //     // const { data } = await axios.get("http://localhost:4000/signup");
// const { data } = await apis.get("/api/signup");
// //-> get을 하면 보안 문제가 있자나
// console.log(data);
// setUsernames(data.map((user) => user.username));
// setNicknames(data.map((user) => user.nickname));
// setEmails(data.map((user) => user.email));
//   //   } catch (e) {
//   //     console.error(e);
//   //   }
//   // };

//   // useEffect(() => {
//   //   fetchUsers();
//   // }, []);

//   const submitButtonHandler = async (e) => {
//     e.preventDefault();

//   // 유효성 검증
//   if (usernames.includes(String(user.username))) {
//     alert("이미 사용 중인 아이디입니다.");
//     return;
//   }
// 비밀번호 일치 여부 확인
// if (user.password !== user.passwordCheck) {
//   alert("비밀번호를 다시 확인해 주세요.");
//   return;
// }
//    // if (nicknames.includes(String(user.nickname))) {
//    //   alert("이미 사용 중인 닉네임입니다.");
//     //   return;
//     // }
//     // if (emails.includes(String(user.email))) {
//     //   alert("이미 사용 중인 이메일입니다.");
//     //   return;
//     // }

//     // if (
//     //   !user.username ||
//     //   !user.password ||
//     //   // !user.passwordCheck ||
//     //   !user.nickname ||
//     //   !user.email
//     // ) {
//     //   alert("모든 항목을 작성해 주세요.");
//     //   return;
//     // }

//     // console.log(user);

//     //---------------- 청크로 처리 -------------------//
//     dispatch(__signUp(user));
//     navi("/login");
//     //---------------- 청크로 처리 -------------------//

//     //---------------- 청크 수정 이전 ----------------//
//     // try {
//     //   // await axios.post("http://localhost:4000/signup", user);
//     //   // await axios.post("http://3.39.255.221/api/signup", user);

//     //   await apis.post("/api/signup", user);

//     //   alert(`${user.nickname} 님 회원가입에 성공하였습니다.`);
//     //   navi("/login");
//     // } catch (e) {
//     //   // console.log(e);
//     // }
//     //여기 이 포스트 부분만 청크로 갈 텐데?
//     //---------------- 청크 수정 이전 ----------------//

//     //*fatch then? catch..
//     //& try catch error!! 확인하기

//     // throwError(new Error("error"))

//     //전역으로 데이터를 안 쓴다면 청크는 굳이 쓸 필요가 없다
//     //청크는 이를테면 중간 허브
//     // 서버로 무언가를 쓰면 청크가 중간에 서버와 상호작용
//     // 중간 검수 + 상태 업데이트를 할 때 순서를 정리

//     //여쭤볼 것
//     //리스폰스 에러 메시지(유효성 검증)를 유효성 유형에 따라 alert창 띄우도록
//     //백 단에서 되는지?
//     //프론트 단에서 할 수는 있는데 하려면
//     //get methods를 써야 함 (불필요한 요청 아닐까유?)
//   };

//   return (
//     <Container onSubmit={submitButtonHandler}>
//       <h1>회원가입</h1>
//       <div>
//         <div>
//           <div>아이디</div>
//           <input
//             type="text"
//             value={user.username}
//             name="username"
//             onChange={changeInputHandler}
//             placeholder="아이디를 입력해 주세요."
//           />
//         </div>
//         <div>
//           <div>비밀번호</div>
//           <input
//             type="password"
//             value={user.password}
//             name="password"
//             onChange={changeInputHandler}
//             placeholder="비밀번호를 입력해 주세요."
//           />
//         </div>
//         {/* <div>
//           <div>비밀번호 확인</div>
//           <input
//             type="password"
//             value={user.passwordCheck}
//             name="passwordCheck"
//             onChange={changeInputHandler}
//             placeholder="비밀번호를 다시 입력해 주세요."
//           />
//         </div> */}
//         <div>
//           <div>닉네임</div>
//           <input
//             type="text"
//             value={user.nickname}
//             name="nickname"
//             onChange={changeInputHandler}
//             placeholder="닉네임을 입력해 주세요."
//           />
//         </div>
//         <div>
//           <div>이메일</div>
//           <input
//             type="text"
//             value={user.email}
//             name="email"
//             onChange={changeInputHandler}
//             placeholder="이메일을 입력해 주세요."
//           />
//         </div>
//       </div>
//       <button>완료</button>
//     </Container>
//   );
// };

// const Container = styled.form`
//   gap: 20px;
//   height: 95vh;
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   justify-content: center;
// `;

// export default SignUp;
