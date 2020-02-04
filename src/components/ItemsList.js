import React, { useContext } from "react";
import { ItemContext } from "../contexts/ItemContext";

export default function ItemsList() {
  const { item, editItem, removeItem, color, handleColorChange } = useContext(
    ItemContext
  );
  return (
    <div>
      <h1>Added:</h1>
      {item.map(el => (
        <div key={el.id} style={{ background: el.background }}>
          <h1>{el.item}</h1>
          <p>{el.times}</p>
          <p>{el.background}</p>
          <button onClick={() => removeItem(el.id)}>remove</button>
        </div>
      ))}
    </div>
  );
}
