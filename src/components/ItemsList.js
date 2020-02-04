import React, { useContext } from "react";
import { ItemContext } from "../contexts/ItemContext";
import styled from "styled-components";

const StyledItemsWrapper = styled.div`
  padding: 2rem;
  margin-top: 2rem;
  background: #fff;
  border-radius: 1rem;
`;

const StyledItem = styled.div`
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
`;

export default function ItemsList() {
  const { item, editItem, removeItem, color, handleColorChange } = useContext(
    ItemContext
  );
  return (
    <StyledItemsWrapper>
      <h2>Added:</h2>
      {item.map(el => (
        <StyledItem key={el.id} style={{ background: el.background }}>
          <h1>{el.item}</h1>
          <p>{el.times}</p>
          <div>
            <button onClick={() => removeItem(el.id)}>remove</button>
          </div>
        </StyledItem>
      ))}
    </StyledItemsWrapper>
  );
}
