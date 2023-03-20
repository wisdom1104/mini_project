import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { __addComment } from "../../modules/commentSlice";
import { __getDetail } from "../../modules/detailSlice";
// import { useNavigate } from "react-router-dom";

import Button from "../Buttons";

function DetailCommentForm({ detail, postId }) {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const [content, setContent] = useState("");

  const submitHandler = async () => {
    const payload = {
      postId,
      content,
    };
    dispatch(__addComment(payload));
    // console.log(content);
    setContent("");
    alert("댓글 작성 완료!");
    await dispatch(__getDetail(postId));
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          value={content}
          placeholder="내용을 적어주세요"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <Button
          type="submit"
          text={"업로드하기"}
          borderColor={"#5385e7"}
          onClick={submitHandler}
        />
      </form>
    </>
  );
}

export default DetailCommentForm;
