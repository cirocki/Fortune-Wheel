import React from "react";
import styled from "styled-components";
import { CirclePicker } from "react-color";

const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 2rem;
`;

const StyledForm = styled.form`
  padding: 4rem 1rem;
`;

const StyledBtn = styled.button`
  padding: 1rem 2rem;
  border: none;
  background: cyan;
  cursor: pointer;
`;

export default function AddForm({ handleSubmit, handleChangeComplete, color }) {
  return (
    <StyledFormWrapper>
      <h2>Add items to Fortune Circle</h2>
      <p>Write Your item, and how many times to add, pick your color</p>
      <StyledForm onSubmit={handleSubmit}>
        <input type="text" placeholder="Add item" />
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <StyledBtn type="submit">Add item</StyledBtn>
      </StyledForm>
      <CirclePicker onChangeComplete={handleChangeComplete} color={color} />
    </StyledFormWrapper>
  );
}
