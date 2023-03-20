import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../redux/components/Buttons";
import { __getBoard } from "../redux/modules/boradSlice";
// import { __getBoard } from "../redux/modules/boradSlice";
import { __addWrite } from "../redux/modules/writeSlice";

function Write() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [classNumber, setClassNumber] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitHandler = async () => {
    dispatch(__addWrite({ classNumber, specialty, title, content }));
    dispatch(__getBoard());
    setClassNumber("");
    setSpecialty("");
    setTitle("");
    setContent("");
    // alert("업로드 성공!");
    // await navigate(`/board`);

    // title
    // content
    // classNumber
    // specialty
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
          value={classNumber}
          placeholder="기수를 적어주세요"
          onChange={(e) => {
            setClassNumber(e.target.value);
          }}
        />
        <input
          type="text"
          value={specialty}
          placeholder="주특기를 적어주세요"
          onChange={(e) => {
            setSpecialty(e.target.value);
          }}
        />
        <input
          type="text"
          value={title}
          placeholder="제목을 적어주세요"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          type="text"
          value={content}
          placeholder="내용을 적어주세요"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <Button
          text={"업로드하기"}
          borderColor={"#5385e7"}
          onClick={submitHandler}
        />
      </form>
    </>
  );
}

export default Write;
