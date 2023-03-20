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

  const navi = useNavigate();

  const sth = () => {
    if (token !== undefined) {
      setIsLogin(true);
      return console.log(isLogin);
    } else {
      setIsLogin(false);
      return console.log(isLogin);
    }
  };

  // const [token, setToken] = useRecoilState(tokenState); //recoil로 token state 가져옴

  const logout = () => {
    cookies.remove("token");
    sth();
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
                  <p type="button" onClick={logout}>
                    Logout
                  </p>
                ) : (
                  <p type="button" onClick={() => navi("/login")}>
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
