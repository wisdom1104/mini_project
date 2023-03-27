import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { cookies } from "../shared/cookie";

function About() {
  // ========= LEH "Add Guard" ===========
  const navi = useNavigate();

  useEffect(() => {
    const token = cookies.get("token");
    if (!token) {
      navi("/login");
    }
  });
  // ========= LEH "Add Guard" ===========

  return (
    <EhStPage>
      <StLayouts
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <StLayout>
          <EhCont1
            style={{
              left: "0px",
              display: "flex",
              alignItems: "left",
              justifyContent: "flex-start",
            }}
          >
            <CopyWrapper>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "row",
                }}
              >
                <StyledP
                  style={{
                    fontWeight: "bold",
                    color: "rgb(76, 76, 198)",
                    WebkitTextStroke: "1px rgb(24, 24, 24)",
                    textStroke: "1px rgb(24, 24, 24)",
                  }}
                >
                  투게더
                </StyledP>
                <StyledP style={{ marginLeft: "0px" }}>(to-gather)는</StyledP>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "row",
                  textAlign: "right",
                }}
              >
                <StyledP
                  style={{
                    fontWeight: "bold",
                    color: "rgb(190, 93, 88)",

                    WebkitTextStroke: "1px rgb(24, 24, 24)",
                    textStroke: "1px rgb(24, 24, 24)",
                  }}
                >
                  항해99 게더타운
                </StyledP>
                <StyledP style={{ marginLeft: "0px" }}>에서</StyledP>
              </div>

              <StyledP>
                <p
                  style={{
                    fontSize: "100px",
                    color: "white",
                    textDecoration: "none",
                    textShadow:
                      "0px 0px 2px black, 0px 0px 2px black, 0px 0px 2px black, 0px 0px 2px black",
                  }}
                >
                  일어나는 모든
                </p>
              </StyledP>

              <StyledP style={{ textAlign: "left" }}>
                비공식 소식을 공유하는
              </StyledP>
              <StyledP style={{ textAlign: "right" }}>커뮤니티입니다</StyledP>
            </CopyWrapper>
          </EhCont1>
        </StLayout>

        <EhCont1>
          <CopyWrapper>
            <StyledP
              style={{
                color: "rgb(90, 90, 90)",
                fontSize: "30px",
                textAlign: "left",
                paddingTop: "400px",
              }}
            >
              제작: 2조
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: "150px",
                }}
              >
                <p
                  style={{
                    color: "rgb(220, 220, 220)",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <p style={{ paddingBottom: "10px" }}>FE</p>
                  <p>박지혜</p>
                  <p>이은형</p>
                </p>
                <p
                  style={{ color: "rgb(220, 220, 220)", paddingBottom: "10px" }}
                >
                  <p style={{ paddingBottom: "10px" }}>BE</p>
                  <p>김건율</p>
                  <p>이승빈</p>
                  <p>장동희</p>
                </p>
              </div>
            </StyledP>
          </CopyWrapper>
        </EhCont1>
      </StLayouts>
    </EhStPage>
  );
}

const CopyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const EhCont1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 100px;
`;

const StyledP = styled.p`
  margin-left: 50px;
  font-size: 50px;
  color: white;
  text-decoration: none;
  text-shadow: 0px 0px 2px black, 0px 0px 2px black, 0px 0px 2px black,
    0px 0px 2px black;
`;

const StLayout = styled.div`
  /* background-color: gray; */
  /* background-image: url(https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcZXn9R%2Fbtr5pa5degz%2FV2hd9LvzX1hLOKpmK9WNK0%2Fimg.png); */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  /* height: 100%;s */
  box-sizing: border-box;
`;
const StLayouts = styled.div`
  /* background-color: gray; */
  background-image: url(https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcZXn9R%2Fbtr5pa5degz%2FV2hd9LvzX1hLOKpmK9WNK0%2Fimg.png);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: censter;
  height: 100%;
  box-sizing: border-box;
`;

const EhStPage = styled.div`
  height: calc(100vh - 170px);
  background-image: url(https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcZXn9R%2Fbtr5pa5degz%2FV2hd9LvzX1hLOKpmK9WNK0%2Fimg.png);
  padding-top: 170px;
`;

export default About;
