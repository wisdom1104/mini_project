import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useRoutes } from "react-router-dom";
import DetailCommentForm from "../redux/components/detailComponents/DetailCommentForm";
import DetailCommentList from "../redux/components/detailComponents/DetailCommentList";
import DetailContent from "../redux/components/detailComponents/DetailContent";
import { __getDetail } from "../redux/modules/detailSlice";

function Detail() {
  const dispatch = useDispatch();
  const { isLoading, error, detail } = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(__getDetail(postId));
  }, [dispatch]);
  // console.log(window.location.pathname);

  const location = useLocation();
  const postId = location.pathname.split("detail/")[1];

  // let params = new URL(document.location).searchParams;
  // let name = params.get("name");

  if (isLoading) {
    return <div> 로딩 중... </div>;
  }
  if (error) {
    return <div> {error.message}</div>;
  }
  return (
    <div>
      <DetailContent detail={detail} postId={postId} />
      {/* <div>아이디: {detail.id}</div>
      <div>제목: {detail.title}</div> */}
      {/* <DetailCommentForm />
      <DetailCommentList detail={detail} /> */}
      {/* {detail.map((item) => {
        return (
          <div key={item.id}>
            <div>{item.id}</div>
            <div>
              {item.classNumber}-{item.specialty}
            </div>
            <div>{item.title}</div>
            <div>{item.nickname}</div>
            <div>{item.createdAt}</div>
            {item.commentList.map((comment) => (
              <div>{comment.nickname}</div>
            ))}
          </div>
        );
      })} */}
    </div>
  );
}

export default Detail;
