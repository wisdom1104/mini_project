import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cookies } from "../../shared/cookie";
import {
  StyledHeader,
  HeaderNav,
  HeaderLi,
  HeaderUl,
  HeaderLink,
} from "./styles";

const Header = () => {
  const navi = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const token = decodeURI(document.cookie).replace("token=", "");
  console.log(token);
  console.log(isLogin);

  const isLoginHandler = () => {
    if (token !== undefined) {
      setIsLogin(true);
      console.log(isLogin);
      return;
    } else {
      setIsLogin(false);
      console.log(isLogin);
      return;
    }
  };

  const logout = () => {
    console.log(isLogin);
    cookies.remove("token");
    console.log(isLogin);
    isLoginHandler();
    alert("로그아웃 되었습니다.");
    navi("/login");
  };

  return (
    <StyledHeader>
      <div>
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
      </div>
    </StyledHeader>
  );
};

export default Header;
