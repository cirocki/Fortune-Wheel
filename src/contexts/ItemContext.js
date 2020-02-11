import React, { createContext, useState, useEffect } from "react";
import uuid from "react-uuid";

export const ItemContext = createContext();

const ItemContextProvider = ({ children }) => {
  // COLOR STATE
  const [color, setColor] = useState("#f44336");
  const handleColorChange = color => {
    setColor(color.hex);
  };

  // ITEM STATE
  const [item, setItem] = useState(
    JSON.parse(localStorage.getItem("ItemsInLocalStorage")) || []
  );

  const addItem = e => {
    e.preventDefault();

    let newItem = {
      id: uuid(),
      item: e.target[0].value,
      times: parseInt(e.target[1].value),
      background: color
    };
    setItem(prev => [...prev, newItem]);
    e.target.reset();
  };

  const removeItem = key => {
    let filteredItems = item.filter(el => el.id !== key);
    setItem(filteredItems);
  };

  // UPDATE LOCAL STORAGE WHEN ITEM CHANGED
  useEffect(() => {
    localStorage.setItem("ItemsInLocalStorage", JSON.stringify(item));
  }, [item]);

  // transfer combined context to provider
  const contextValue = {
    color,
    handleColorChange,
    item,
    addItem,
    removeItem
  };

  return (
    <ItemContext.Provider value={contextValue}>{children}</ItemContext.Provider>
  );
};

export default ItemContextProvider;
