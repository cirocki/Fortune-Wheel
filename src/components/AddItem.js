import React, { useContext } from "react";
import { ItemContext } from "../contexts/ItemContext";
import styled from "styled-components";
import { CirclePicker } from "react-color";

const StyledBtn = styled.button`
  padding: 1rem 2rem;
  background: #111;
  color: #fff;
  border: none;
  padding: 1rem;
  border-radius: 5rem;
  cursor: pointer;
`;

const StyledAddDiv = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledForm = styled.form`
  padding: 2rem;
`;
const StyledInput = styled.input`
  background: #fff;
  padding: 1rem;
  border-radius: 5rem;
  border: 1px solid #ccc;
`;

export default function AddItem() {
  const { item, addItem, editItem, color, handleColorChange } = useContext(
    ItemContext
  );
  let myColors = [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#ffeb3b"
  ];
  return (
    <StyledAddDiv>
      <h2>Add Item</h2>
      <StyledForm action="submit" onSubmit={addItem}>
        <StyledInput
          type="text"
          name="item"
          placeholder="Your item name here"
        />
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <StyledBtn type="submit">Add item</StyledBtn>
      </StyledForm>
      <CirclePicker
        onChangeComplete={handleColorChange}
        color={color}
        circleSize={32}
        circleSpacing={16}
        width={300}
        colors={myColors}
      />
    </StyledAddDiv>
  );
}
