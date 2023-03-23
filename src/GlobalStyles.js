import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
    ${reset};
    :root{

    }
`;

export const StPage = styled.div`
  height: calc(100% - 170px);
  background-image: url(https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcZXn9R%2Fbtr5pa5degz%2FV2hd9LvzX1hLOKpmK9WNK0%2Fimg.png);
  padding-top: 170px;
`;

export const StLayout = styled.div`
  /* background-color: gray; */
  background-image: url(https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcZXn9R%2Fbtr5pa5degz%2FV2hd9LvzX1hLOKpmK9WNK0%2Fimg.png);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: censter;
  /* margin-top: 20px; */
  padding: 0px 20px;
  height: 100%;
  box-sizing: border-box;
`;

export const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: 140px;
  width: 75%;
  /* margin-top: 20px; */
`;

export const StHeaderTitle = styled.h2`
  color: RGB(75, 81, 131);
  font-size: 80px;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 5px;
`;

export const BtnBox = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
