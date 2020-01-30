import React, { useState, useReducer } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";

const StyledAppWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const initialItems = [
  {
    item: "Pierwszy item",
    times: 1,
    background: "#ccc"
  }
];

function App() {
  const [items, setItems] = useState(initialItems);

  const [color, setColor] = useState("#f44336");

  const handleChangeComplete = (color, event) => {
    setColor(color.hex);
    console.log(color);
  };

  const handleSubmit = e => {
    e.preventDefault();

    let newItem = {
      item: e.target[0].value,
      times: e.target[1].value,
      background: color
    };

    setItems(prev => [...prev, newItem]);
    console.log(items);
  };

  const handleDelete = e => {
    console.log(e.target.key);
  };

  return (
    <div className="App">
      <StyledAppWrapper>
        <Sidebar
          handleSubmit={handleSubmit}
          handleChangeComplete={handleChangeComplete}
          items={items}
          color={color}
          handleDelete={handleDelete}
        />
        <main>
          <h1>Fortune wheel</h1>
        </main>
      </StyledAppWrapper>
    </div>
  );
}

export default App;
