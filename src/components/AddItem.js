import React, { useContext } from "react";
import { ItemContext } from "../contexts/ItemContext";
import styled from "styled-components";
import { CirclePicker } from "react-color";

const StyledAddDiv = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const StyledHeading = styled.h2`
  font-weight: 400;
  padding-bottom: 1rem;
  color: #757575;
`;
const StyledInfo = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 0.875rem;
  line-height: 1.8;
  color: #757575;
`;
const StyledForm = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledInput = styled.input`
  background: #fff;
  padding: 1rem;
  border-radius: 5rem;
  border: 1px solid #ccc;
  margin: 2rem;
`;

const StyledSelect = styled.select`
  padding: 0.5rem;
  margin-bottom: 2rem;
  width: 120px;
`;

const StyledBtn = styled.button`
  font-family: "Kanit", sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 2rem;
  padding: 1rem 3rem;
  background: #111;
  color: #fff;
  border: none;
  border-radius: 5rem;
  cursor: pointer;
`;

export default function AddItem() {
  const { addItem, color, handleColorChange } = useContext(ItemContext);
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
      <StyledHeading>New Item</StyledHeading>
      <StyledInfo>
        It's a wheel of fortune, You can add your own items and random draw.
        Just write your <b>item name</b> below, set the <b>quantity</b> (default
        is 1, but a larger number is a proportionally greater chance of being
        drawn) and your <b>item color</b>.
      </StyledInfo>
      <StyledForm action="submit" onSubmit={addItem}>
        <StyledInput
          type="text"
          name="item"
          placeholder="Your item name here"
        />
        <StyledSelect>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </StyledSelect>
        <CirclePicker
          onChangeComplete={handleColorChange}
          color={color}
          circleSize={32}
          circleSpacing={16}
          width={300}
          colors={myColors}
        />
        <StyledBtn type="submit">Add item</StyledBtn>
      </StyledForm>
    </StyledAddDiv>
  );
}
