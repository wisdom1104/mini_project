import React from "react";
import DetailCommentItem from "./DetailCommentItem";

function DetailCommentList({ detail, postId }) {
  // console.log(detail.comentList);

  return (
    <>
      <div>
        <div>댓글</div>
        <div>
          {detail?.commentList?.length > 0 ? (
            detail.commentList.map((comment) => (
              <div key={comment.id}>
                <DetailCommentItem comment={comment} postId={postId} />
              </div>
            ))
          ) : (
            <div>댓글이 없습니다.</div>
          )}
        </div>
      </div>
    </>
  );
}

export default DetailCommentList;
