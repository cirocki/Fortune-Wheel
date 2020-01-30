import React from "react";
import styled from "styled-components";
import AddForm from "./AddForm";
import ItemList from "./ItemList";

const SidebarWrapper = styled.aside`
  background: #f4f4f4;
  padding: 2rem;
`;

export default function Sidebar({
  handleSubmit,
  handleChangeComplete,
  handleDelete,
  items,
  color
}) {
  return (
    <SidebarWrapper>
      <AddForm
        handleSubmit={handleSubmit}
        handleChangeComplete={handleChangeComplete}
        color={color}
      />
      <ItemList items={items} handleDelete={handleDelete} />
    </SidebarWrapper>
  );
}

// 1. event
// times
// color
