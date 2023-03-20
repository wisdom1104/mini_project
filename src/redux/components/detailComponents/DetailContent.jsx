import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __getBoard } from "../../modules/boradSlice";
import {
  __deleteDetail,
  __editDetail,
  __getDetail,
} from "../../modules/detailSlice";
import Button from "../Buttons";

function DetailContent({ detail, postId }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);

  //삭제
  const onDeleteDetailHandler = async (postId) => {
    dispatch(__deleteDetail(postId));

    await dispatch(__getBoard);
    await navigate(`/board`);
    await alert("삭제완료!");
    // console.log(postId);
  };

  //수정
  const [editTitle, setEditTitle] = useState(detail?.title || "");
  const [editContent, setEditContent] = useState(detail?.content || "");
  const [editClassNumber, setEditClassNumber] = useState(
    detail?.classNumber || ""
  );
  const [editSpecialty, setEditSpecialty] = useState(detail?.specialty || "");

  //수정
  const onEditDetailHandler = async () => {
    const payload = {
      postId,
      title: editTitle,
      content: editContent,
      classNumber: editClassNumber,
      specialty: editSpecialty,
    };
    // console.log(postId);
    dispatch(__editDetail(payload));
    await dispatch(__getDetail(postId));
    await setEdit(!edit);
    // console.log(editTitle);
    // console.log(editSpecialty);
  };
  // console.log(detail);

  if (!detail) {
    return <div>로딩 중...</div>;
  }

  return (
    <>
      <div>DetailContent</div>
      <div>ID:{detail.id}</div>
      <div>닉네임:{detail.nickname}</div>
      <div>작성시간:{detail.createdAt}</div>
      {!edit ? (
        <div>
          <div>제목: {detail.title}</div>
          <div>내용: {detail.content}</div>
          <div>기수: {detail.classNumber}</div>
          <div>주특기: {detail.specialty}</div>
          <Button
            borderColor={"#5385e7"}
            text={"수정하기"}
            onClick={() => {
              setEdit(!edit);
            }}
          />
          <Button
            text={"삭제하기"}
            borderColor={"#e75388"}
            onClick={(e) => {
              onDeleteDetailHandler(detail.id);
            }}
          />
        </div>
      ) : (
        <div>
          <label>제목:</label>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => {
              setEditTitle(e.target.value);
            }}
          />
          <label>내용:</label>

          <input
            type="text"
            value={editContent}
            onChange={(e) => {
              setEditContent(e.target.value);
            }}
          />
          <label>기수:</label>

          <input
            type="text"
            value={editClassNumber}
            onChange={(e) => {
              setEditClassNumber(e.target.value);
            }}
          />
          <label>주특기:</label>

          <input
            type="text"
            value={editSpecialty}
            onChange={(e) => {
              setEditSpecialty(e.target.value);
            }}
          />
          <Button
            style={{}}
            text={"수정완료"}
            borderColor={"#5385e7"}
            onClick={onEditDetailHandler}
          />
        </div>
      )}
    </>
  );
}

export default DetailContent;
