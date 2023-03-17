import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BoardPagination from "../redux/components/BoardPagination";
import BoardTable from "../redux/components/BoardTable";
import { __getBoard } from "../redux/modules/boradSlice";

function Board() {
  const dispatch = useDispatch();
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
    return <div> 로딩 중... </div>;
  }
  if (error) {
    return <div> {error.message}</div>;
  }
  return (
    <>
      <div>헤더부분</div>
      <div>
        <h2>게시판</h2>
        <button>작성하기</button>
        <div>
          <BoardTable board={postsData(board)} />
          <BoardPagination
            limit={limit}
            page={page}
            totalPosts={board.length}
            setPage={setPage}
          />
        </div>
      </div>
    </>
  );
}

export default Board;
