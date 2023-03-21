import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import DetailCommentForm from "../redux/components/detailComponents/DetailCommentForm";
import DetailCommentList from "../redux/components/detailComponents/DetailCommentList";
import DetailContent from "../redux/components/detailComponents/DetailContent";
import { __getDetail } from "../redux/modules/detailSlice";

function Detail() {
  const dispatch = useDispatch();
  const { isLoading, error, detail } = useSelector((state) => state.detail);
  const { id } = useParams();
  // console.log(id);
  // const location = useLocation();
  // const postId = location.pathname.split("detail/")[1];

  useEffect(() => {
    dispatch(__getDetail(id));
  }, [dispatch]);

  if (isLoading) {
    return <div> 로딩 중... </div>;
  }
  if (error) {
    return <div> {error.message}</div>;
  }
  // console.log(detail.commentList);
  return (
    <div>
      <DetailContent detail={detail} postId={id} />
      <DetailCommentForm detail={detail} postId={id} />
      <DetailCommentList detail={detail} postId={id} />

      {/* <div>
        {detail?.commentList?.length > 0 ? (
          detail.commentList.map((comment) => (
            <div key={comment.id}>{comment?.content}</div>
          ))
        ) : (
          <div>댓글이 없습니다.</div>
        )}
      </div> */}

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
            {detail.commentList.map((comment) => (
              <div>{comment.nickname}</div>
            ))}
          </div>
        );
      })} */}
      {/* <div>댓글</div>
      {detail.commentList.map((comment) => (
        <div>{comment.content}</div>
      ))} */}
      {/* {detail.commentList.map((comment) => (
        <div>어ㅏㅣ어ㅣ안어ㅣㅇ: {comment.nickname}</div>
      ))} */}
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
