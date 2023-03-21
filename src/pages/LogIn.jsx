import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __login } from "../redux/modules/login";
// import { useSetRecoilState } from "recoil"; //recoil

const LogIn = () => {
  const dispatch = useDispatch();
  // const setToken = useSetRecoilState(tokenState); //recoil
  const [isLogin, setIsLogin] = useState(false);

  const navi = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const changeInputHandler = (e) => {
    const { value, name } = e.target;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // =================== thunk ver ====================
  const submitButtonHandler = async (e) => {
    e.preventDefault();
    const response = await dispatch(__login(user));
    // setToken(response.headers.authorization); // recoil -> atom 업데이트
    if (response.type === "logIn/fulfilled") {
      //수정 중==========================================
      setIsLogin(true); //이 state를 전역으로. 이게 안 들어가네?..
      console.log(isLogin);
      navi("/");
      //수정 중==========================================
    }
  };
  // =================== thunk ver ====================

  // ============== non-thunk ver ====================
  // const submitButtonHandler = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const result = await apis.post("/api/login", user);
  //     cookies.set("token", result.headers.authorization, { path: "/" });
  //     navi("/");
  //   } catch (e) {
  //     const errorMsg = e.response.data.msg;
  //     alert(`${errorMsg}`);
  //   }
  // };
  // ============== non-thunk ver ====================

  return (
    <form onSubmit={submitButtonHandler}>
      <h1>로그인</h1>
      <div>
        <div>
          <div>아이디</div>
          <input
            type="text"
            value={user.username}
            name="username"
            onChange={changeInputHandler}
            placeholder="아이디를 입력해 주세요."
          />
        </div>

        <div>
          <div>패스워드</div>
          <input
            type="password"
            value={user.password}
            name="password"
            onChange={changeInputHandler}
            placeholder="비밀번호를 입력해 주세요."
          />
        </div>
      </div>
      <button>로그인</button>
      <button onClick={() => navi("/signup")}>회원가입 하러 가기</button>
    </form>
  );
};

export default LogIn;
