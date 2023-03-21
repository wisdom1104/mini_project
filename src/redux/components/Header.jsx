import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RecoilRoot, useRecoilState } from "recoil";
import { cookies } from "../../shared/cookie";
// import { tokenState } from "../modules/login";
// import Cookies from "universal-cookie";
import {
  StyledHeader,
  HeaderNav,
  HeaderLi,
  HeaderUl,
  HeaderLink,
} from "./styles";

//token, setToken은 지역
//isLogin만 boolean으로 global..

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  //cookie의 토큰 값을 불러오기
  const token = decodeURI(document.cookie).replace("token=", "");
  // console.log(token);
  // console.log(isLogin);
  // console.log(document);

  const navi = useNavigate();

  const isLoginHandler = () => {
    if (token !== undefined) {
      setIsLogin(true);
      return;
    } else {
      setIsLogin(false);
      return;
    }
  };

  const logout = () => {
    cookies.remove("token");
    isLoginHandler();
    alert("로그아웃 되었습니다.");
    navi("/login");
  };

  return (
    <RecoilRoot>
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
                {/* <p type="button" style={{ cursor: "pointer" }} onClick={logout}>
                  Logout
                </p> */}
                {token ? (
                  <p
                    type="button"
                    style={{ cursor: "pointer" }}
                    onClick={logout}
                  >
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
    </RecoilRoot>
  );
};

export default Header;
