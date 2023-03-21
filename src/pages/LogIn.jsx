import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isLoginActions, __login } from "../redux/modules/login";
import styled from "styled-components";
import EHInput from "../redux/components/EHInput";

const LogIn = () => {
  const dispatch = useDispatch();

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
    if (response.type === "logIn/fulfilled") {
      dispatch(isLoginActions.login());
      alert("로그인 되었습니다.");
      navi("/");
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
    <Container onSubmit={submitButtonHandler}>
      <h1>로그인</h1>
      <div>
        <div>
          <div>아이디</div>
          <EHInput
            type="text"
            value={user.username}
            name="username"
            onChange={changeInputHandler}
            placeholder="아이디를 입력해 주세요."
          />
        </div>

        <div>
          <div>패스워드</div>
          <EHInput
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

export default LogIn;
