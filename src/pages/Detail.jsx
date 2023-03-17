import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getDetail } from "../redux/modules/detailSlice";

function Detail() {
  const dispatch = useDispatch();
  // const { isLoading, error, detail } = useSelector((state) => state.detail);
  const {
    isLoading,
    error,
    detail,
    detail: { commentList },
  } = useSelector((state) => state.detail);
  useEffect(() => {
    dispatch(__getDetail());
    console.log("detail,", detail);
    console.log(commentList);
  }, []);

  if (isLoading) {
    return <div> 로딩 중... </div>;
  }
  if (error) {
    return <div> {error.message}</div>;
  }
  return (
    <div>
      {detail.map((item) => {
        return (
          <div key={item.postId}>
            <div>{item.postId}</div>
            <div>{item.content}</div>
            <div>{item.title}</div>
            <div>{item.nickname}</div>
            <div>{item.createdAt}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Detail;
