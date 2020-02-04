import React, { useContext } from "react";
import { ItemContext } from "../contexts/ItemContext";
import styled from "styled-components";
import { CirclePicker } from "react-color";

const StyledBtn = styled.button`
  padding: 1rem 2rem;
  border: none;
  background: cyan;
  cursor: pointer;
`;

export default function AddItem() {
  const { item, addItem, editItem, color, handleColorChange } = useContext(
    ItemContext
  );
  return (
    <div>
      <h2>Add Item</h2>
      <form action="submit" onSubmit={addItem}>
        <input type="text" name="item" placeholder="Your item name here" />
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <StyledBtn type="submit">Add item</StyledBtn>
      </form>
      <CirclePicker onChangeComplete={handleColorChange} color={color} />
    </div>
  );
}
