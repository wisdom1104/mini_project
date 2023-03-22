import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isLoginActions, __login } from "../redux/modules/login";
import styled from "styled-components";
import EHInput from "../redux/components/EHInput";
import Flex from "../redux/components/elem/Flex";
import Space from "../redux/components/elem/Space";
import StButton from "../redux/components/Buttons";

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
      <div>
        <StyledImg src="img/login.jpg" />
      </div>
      <Flex
        css={{
          flexDirection: "column",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <Space>
          <Space css={{ marginBottom: "5px" }}>아이디</Space>
          <EHInput
            type="text"
            value={user.username}
            name="username"
            onChange={changeInputHandler}
            placeholder="아이디를 입력해 주세요."
          />
        </Space>

        <Space>
          <Space css={{ marginTop: "10px", marginBottom: "5px" }}>
            비밀번호
          </Space>
          <EHInput
            type="password"
            value={user.password}
            name="password"
            onChange={changeInputHandler}
            placeholder="비밀번호를 입력해 주세요."
          />
        </Space>
      </Flex>
      <StButton text={"로그인"} />
      <LoginContainer>
        <StyledLink to="/signup">회원가입 하러 가기</StyledLink>
      </LoginContainer>
    </Container>
  );
};
const LoginContainer = styled.div`
  font-size: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  color: inherit;
`;

const Container = styled.form`
  gap: 20px;
  height: 100vh;
  min-width: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const StyledImg = styled.img`
  border-radius: 50%;
  border: 1px solid rgb(0, 0, 0);
`;

export default LogIn;
