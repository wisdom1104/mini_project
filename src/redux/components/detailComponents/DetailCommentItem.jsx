import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __deleteComment, __editComment } from "../../modules/commentSlice";
import { __getDetail } from "../../modules/detailSlice";
import Button from "../Buttons";

function DetailCommentItem({ comment, postId }) {
  const [editContent, setEditContent] = useState(comment?.content || "");
  const [edit, setEdit] = useState(false);
  // const { error, isCommentEdit } = useSelector((state) => state.detail);

  const dispatch = useDispatch();
  //삭제
  const onDeleteCommentHandler = async () => {
    const payload = {
      postId,
      commentId: comment.id,
    };
    await dispatch(__deleteComment(payload));
    await dispatch(__getDetail(postId));
  };
  //수정
  const onEditCommentHandler = async () => {
    const payload = {
      postId,
      commentId: comment.id,
      content: editContent,
    };
    await dispatch(__editComment(payload));
    setEdit(!edit);
  };
  return (
    <>
      <div>
        {!edit ? (
          <div>
            <div>--------------------</div>
            <div>{comment?.id}</div>
            <div>{comment?.nickname}</div>
            <div>{comment?.content}</div>
            <div>{comment?.createdAt}</div>
            <Button
              text={"삭제하기"}
              borderColor={"#e75388"}
              onClick={(e) => {
                onDeleteCommentHandler(comment.id);
              }}
            />
            <Button
              borderColor={"#5385e7"}
              text={"수정하기"}
              // onClick={() => {
              //   setEdit(!edit);
              // }}
              onClick={onEditCommentHandler}
            />
          </div>
        ) : (
          <div>
            <input
              maxLength={100}
              style={{ marginBottom: "50px" }}
              type="text"
              value={editContent}
              onChange={(e) => {
                setEditContent(e.target.value);
              }}
            />
            <Button
              style={{}}
              text={"수정완료"}
              borderColor={"#5385e7"}
              onClick={onEditCommentHandler}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default DetailCommentItem;
