import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StHeaderTitle, StLayout, StPage, SubHeader } from "../GlobalStyles";
import Button from "../redux/components/Buttons";
import { __addWrite } from "../redux/modules/writeSlice";
import { cookies } from "../shared/cookie";

function Write() {
  const navigate = useNavigate();
  // ========= LEH "Add Guard" ===========
  useEffect(() => {
    const token = cookies.get("token");
    if (!token) {
      navigate("/login");
    }
  });
  // ========= LEH "Add Guard" ===========

  const dispatch = useDispatch();
  const [classNumber, setClassNumber] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { isSuccess } = useSelector((state) => state.write);

  //추가
  useEffect(() => {
    if (!isSuccess) {
      setClassNumber("");
      setSpecialty("");
      setTitle("");
      setContent("");
      navigate(`/board`);
      alert("업로드 성공!");
    }
  }, [isSuccess]);

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

  const handleChangeClass = (e) => {
    setClassNumber(e.target.value);
  };

  const handleChangeSpecialty = (e) => {
    setSpecialty(e.target.value);
  };

  return (
    <>
      <StPage>
        <StLayout>
          <StForm
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <SubHeader>
              <StHeaderTitle>Write&nbsp;&nbsp;&nbsp;</StHeaderTitle>
            </SubHeader>

            <ClassSpecialty>
              {/* <StClass
                type="text"
                value={classNumber}
                placeholder="기수를 적어주세요"
                onChange={(e) => {
                  setClassNumber(e.target.value);
                }}
              /> */}
              <StSelect
                name="classNumber"
                value={classNumber}
                onChange={handleChangeClass}
              >
                <option sdisabled elected>
                  --------------- 기수를 선택해주세요 ---------------
                </option>

                <option value={"6기"}>6기</option>
                <option value={"8기"}>8기</option>
                <option value={"7기"}>7기</option>
                <option value={"9기"}>9기</option>
                <option value={"10기"}>10기</option>
                <option value={"11기"}>11기</option>
                <option value={"12기"}>12기</option>
                <option value={"13기"}>13기</option>
                <option value={"14기"}>14기</option>
                <option value={"15기"}>15기</option>
              </StSelect>
              {/* <StSpecialty
                type="text"
                value={specialty}
                placeholder="주특기를 적어주세요"
                onChange={(e) => {
                  setSpecialty(e.target.value);
                }}
              /> */}
              <StSelect
                name="specialty"
                value={specialty}
                onChange={handleChangeSpecialty}
              >
                <option selected>
                  --------------- 주특기를 선택해주세요 ---------------
                </option>
                <option value={"React"}>React</option>
                <option value={"Spring"}>Spring</option>
                <option value={"NodeJs"}>NodeJs</option>
              </StSelect>
            </ClassSpecialty>
            <StTitle
              type="text"
              value={title}
              placeholder="제목을 적어주세요"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <StContent
              type="text"
              value={content}
              placeholder="내용을 적어주세요"
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
            <Button text={"업로드하기"} onClick={submitHandler} />
          </StForm>
        </StLayout>
      </StPage>
    </>
  );
}

export default Write;

const StForm = styled.form`
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 90%;
  margin: 10px auto;
  padding: 20px 20px;
  max-width: 1000px;
  min-height: 714px;
`;

const ClassSpecialty = styled.div`
  display: flex;
  gap: 30px;
`;

// const StClass = styled.input`
//   border-radius: 20px;
//   border: 1px solid black;
//   width: 300px;
//   height: 40px;
//   padding: 0px 20px;
//   background-color: RGB(225, 231, 255);
//   border: none;
//   &:focus {
//     background-color: RGB(205, 211, 255);
//     outline: none;
//   }
// `;
// const StSpecialty = styled.input`
//   border-radius: 20px;
//   border: 1px solid black;
//   width: 300px;
//   height: 40px;
//   padding: 0px 20px;
//   background-color: RGB(225, 231, 255);
//   border: none;
//   &:focus {
//     background-color: RGB(205, 211, 255);
//     outline: none;
//   }
// `;

const StSelect = styled.select`
  -webkit-appearance: none; /* for chrome */
  -moz-appearance: none; /*for firefox*/
  appearance: none;
  text-align-last: center;
  border-radius: 20px;
  border: 1px solid black;
  width: 340px;
  height: 40px;
  padding: 0px 20px;
  background-color: RGB(225, 231, 255);
  border: none;
  &:focus {
    background-color: RGB(205, 211, 255);
    outline: none;
  }
`;

const StTitle = styled.input`
  border-radius: 20px;
  border: 1px solid black;
  width: 670px;
  height: 40px;
  padding: 0px 20px;
  background-color: RGB(225, 231, 255);
  border: none;
  &:focus {
    background-color: RGB(205, 211, 255);
    outline: none;
  }
`;

const StContent = styled.textarea`
  border-radius: 20px;
  resize: none;
  width: 670px;
  height: 380px;
  padding: 20px;
  background-color: RGB(225, 231, 255);
  border: none;
  &:focus {
    background-color: RGB(205, 211, 255);
    outline: none;
  }
`;
