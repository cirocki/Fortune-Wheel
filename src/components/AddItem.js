import React, { useContext } from "react";
import { ItemContext } from "../contexts/ItemContext";
import styled from "styled-components";
import { CirclePicker } from "react-color";

const StyledAddCard = styled.div`
  max-width: 460px;
  background: #fff;
`;
const StyledCardTop = styled.div`
  padding: 1.5rem;
  background: #f4f4f4;
`;
const StyledCardMid = styled.div`
  padding: 2rem;
`;
const StyledHeading = styled.h2`
  font-weight: 400;
  color: #8f8f8f;
`;
const StyledInfo = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 0.875rem;
  line-height: 1.8;
  color: #8f8f8f;
`;
const StyledForm = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledInputsWrapper = styled.div`
  display: flex;
  margin: 1rem 0 2rem 0;
`;

const StyledInput = styled.input`
  min-width: 165px;
  background: #fff;
  padding: 1rem 1.25rem;
  border: 1px solid #ccc;
  color: #8f8f8f;
`;

const StyledSelect = styled.select`
  padding: 1rem;
  border: 1px solid #ccc;
  border-left: none;
`;

const StyledBtn = styled.button`
  margin-top: 3rem;
  padding: 1rem 4rem;
  background: #111;
  color: #fff;
  font-family: "Kanit", sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: none;
  border-radius: 5rem;
  cursor: pointer;
  &:hover {
    color: #c7f63d;
  }
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
    <StyledAddCard>
      <StyledCardTop>
        <StyledHeading>New Item</StyledHeading>
      </StyledCardTop>
      <StyledCardMid>
        <StyledInfo>
          Write your <b>item name</b> below, set the <b>quantity</b> (default is
          1, but a larger number is a proportionally greater chance of being
          drawn) and your <b>item color</b>.
        </StyledInfo>
        <StyledForm action="submit" onSubmit={addItem}>
          <StyledInputsWrapper>
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
          </StyledInputsWrapper>
          <CirclePicker
            onChangeComplete={handleColorChange}
            color={color}
            circleSize={32}
            circleSpacing={16}
            width={288}
            colors={myColors}
          />
          <StyledBtn type="submit">Add item</StyledBtn>
        </StyledForm>
      </StyledCardMid>
    </StyledAddCard>
  );
}
