import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import {
  __deleteDetail,
  __editDetail,
  __getDetail,
} from "../../modules/detailSlice";
import Button from "../Buttons";

function DetailContent({ detail, postId }) {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  // const { id } = useParams();

  // // console.log("detail", detail);
  // // console.log("id", id);

  // const detail = detail.find((el) => {
  //   return el.id === Number(id);
  // });
  // console.log(detail);
  // console.log(detail.title);

  //삭제
  const onDeleteDetailHandler = async (postId) => {
    await dispatch(__deleteDetail(postId));
    await dispatch(__getDetail(postId));
    console.log(postId);
  };

  //수정
  const [editTitle, setEditTitle] = useState(detail.title);
  const [editContent, setEditContent] = useState(detail.content);
  const [editClassNumber, setEditClassNumber] = useState(detail.classNumber);
  const [editSpecialty, setEditSpecialty] = useState(detail.specialty);

  //수정
  const onEditDetailHandler = async () => {
    const payload = {
      id: detail.id,
      title: editTitle,
      content: editContent,
      classNumber: editClassNumber,
      specialty: editSpecialty,
    };
    console.log(payload);
    await dispatch(__editDetail(payload, postId));
    await dispatch(__getDetail(postId));
    setEdit(!edit);
    // console.log(editTitle);
    // console.log(editSpecialty);
  };

  // const location = useLocation();
  // const postId = location.pathname.split("detail/")[1];
  // console.log(location);
  console.log(postId);

  return (
    <>
      <div>DetailContent</div>
      <div>{detail.id}</div>
      <div>{detail.nickname}</div>
      <div>{detail.createdAt}</div>
      {!edit ? (
        <div>
          <div>{detail.title}</div>
          <div>{detail.content}</div>
          <div>{detail.classNumber}</div>
          <div>{detail.specialty}</div>
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
          <input
            type="text"
            value={editTitle}
            onChange={(e) => {
              setEditTitle(e.target.value);
            }}
          />
          <input
            type="text"
            value={editContent}
            onChange={(e) => {
              setEditContent(e.target.value);
            }}
          />
          <input
            type="text"
            value={editClassNumber}
            onChange={(e) => {
              setEditClassNumber(e.target.value);
            }}
          />
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
