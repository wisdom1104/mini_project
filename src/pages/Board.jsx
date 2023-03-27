import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StHeaderTitle, StLayout, StPage, SubHeader } from "../GlobalStyles";
import BoardPagination from "../redux/components/boardComponents/BoardPagination";
import BoardTable from "../redux/components/boardComponents/BoardTable";
import Button from "../redux/components/Buttons";
import { __getBoard } from "../redux/modules/boradSlice";
import { cookies } from "../shared/cookie";

function Board() {
  // ========= LEH "Add Guard" ===========
  const navi = useNavigate();

  useEffect(() => {
    const token = cookies.get("token");
    if (!token) {
      navi("/login");
    }
  });
  // ========= LEH "Add Guard" ===========

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, board } = useSelector((state) => state.board);

  const [page, setPage] = useState(1); //페이지
  const limit = 10; // posts가 보일 최대한의 갯수
  const offset = (page - 1) * limit; // 시작점과 끝점을 구하는 offset

  const postsData = (posts) => {
    if (posts) {
      let result = posts.slice(offset, offset + limit);
      return result;
    }
  };

  useEffect(() => {
    dispatch(__getBoard());
    // console.log("board,", board);
  }, []);

  if (isLoading) {
    return <div></div>;
  }
  if (error) {
    return <div> {error.message}</div>;
  }
  return (
    <>
      <StPage>
        <StLayout>
          <RelativeBox>
            <SubHeader>
              <StHeaderTitle>Board&nbsp;&nbsp;&nbsp;</StHeaderTitle>
              <Button
                text={"작성하기"}
                // borderColor={}
                onClick={() => {
                  navigate(`/write`);
                }}
              />
            </SubHeader>

            <StBoard>
              <BoardTable board={postsData(board)} />

              <BoardPagination
                limit={limit}
                page={page}
                totalPosts={board.length}
                setPage={setPage}
              />
            </StBoard>
          </RelativeBox>
        </StLayout>
      </StPage>
    </>
  );
}

export default Board;

const RelativeBox = styled.div`
  position: relative;
  background-color: white;
  /* background-image: url(https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbKRId6%2Fbtr5AYQnJrG%2FZFPHllLCuk6u79gN7R5cuk%2Fimg.png); */
  width: 90%;
  margin: 10px auto;
  border-radius: 20px;
  padding: 20px 20px;
  max-width: 1000px;
  min-height: 714px;
  /* min-width: 500px; */
`;
const StBoard = styled.div``;
