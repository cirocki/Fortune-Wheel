import React from "react";

export default function ItemList({ items, handleDelete }) {
  return (
    <div>
      <h1>Added:</h1>
      {items.map((el, index) => (
        <div key={index} style={{ background: el.background }}>
          <h1>{el.item}</h1>
          <p>{el.times}</p>
          <p>{el.background}</p>
          <button key={index} onClick={handleDelete}>
            remove
          </button>
        </div>
      ))}
    </div>
  );
}
