import React from "react";
import styled from "styled-components";

const EHInput = ({ type, placeholder, value, onChange, name }) => {
  return (
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

const StyledInput = styled.input`
  border: none;
  border-bottom: 1.5px solid #333333;
  height: 30px;
  width: 350px;
  outline: none;
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 5px;

  &:focus-within {
    /* box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 16px -8px; */
    border-bottom: 1.5px solid #c9c9c9;
  }
`;

export default EHInput;
