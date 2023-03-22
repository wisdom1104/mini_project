import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isLoginActions } from "../../modules/login";
import { cookies } from "../../../shared/cookie";

import {
  StyledHeader,
  GreetingContainer,
  GreetingNickname,
  Greeting,
  HeaderNav,
  HeaderLi,
  HeaderUl,
  HeaderLink,
} from "./styles";

const Header = () => {
  const navi = useNavigate();
  const dispatch = useDispatch();

  const isLogin = useSelector((state) => state.auth.isLogin);

  const logout = () => {
    dispatch(isLoginActions.logout());
    alert("로그아웃 되었습니다.");
    navi("/login");
    // window.location.reload();
    // 이거는 리로딩인데. 쿠키 정보 리렌더링 코드가 있으면 더 완성도 높을 듯..
  };

  return (
    <StyledHeader>
      <GreetingContainer>
        <GreetingNickname>{cookies.get("nickname")}</GreetingNickname>
        <Greeting>님 안녕하세요!</Greeting>
      </GreetingContainer>
      <HeaderNav>
        <HeaderUl>
          <HeaderLi>
            <HeaderLink to="/">Home &nbsp;|</HeaderLink>
          </HeaderLi>
          <HeaderLi>
            <HeaderLink to="/about">About &nbsp;|</HeaderLink>
          </HeaderLi>
          <HeaderLi>
            <HeaderLink to="/board">Board &nbsp;|</HeaderLink>
          </HeaderLi>
          <HeaderLi>
            {isLogin ? (
              <p type="button" style={{ cursor: "pointer" }} onClick={logout}>
                Logout
              </p>
            ) : (
              <p
                type="button"
                style={{ cursor: "pointer" }}
                onClick={() => navi("/login")}
              >
                LogIn
              </p>
            )}
          </HeaderLi>
        </HeaderUl>
      </HeaderNav>
    </StyledHeader>
  );
};

export default Header;
