import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../redux/components/Buttons";
import { __addWrite } from "../redux/modules/writeSlice";

function Write() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [classNumber, setClassNumber] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { error, isSuccess } = useSelector((state) => state.write);

  //추가
  useEffect(() => {
    if (isSuccess) {
      setClassNumber("");
      setSpecialty("");
      setTitle("");
      setContent("");
      navigate(`/board`);
      alert("업로드 성공!");
    }
  }, [error, isSuccess]);

  const submitHandler = async () => {
    if (title.length < 3 || title.length > 25) {
      alert("제목은 3자 이상, 25자 이하여야 합니다!");
      return;
    }

    if (content.length < 10 || content.length > 2000) {
      alert("내용은 10자 이상, 2000자 이하여야 합니다!");
      return;
    }
    dispatch(__addWrite({ classNumber, specialty, title, content }));
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
