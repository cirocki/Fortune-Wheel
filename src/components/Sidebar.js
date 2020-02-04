import React from "react";
import styled from "styled-components";
import AddItem from "./AddItem";
import ItemsList from "./ItemsList";

const StyledSidebar = styled.div`
  padding: 2rem 1rem;
  background: #fff;
`;

export default function Sidebar() {
  return (
    <StyledSidebar>
      <AddItem />
      <ItemsList />
    </StyledSidebar>
  );
}
