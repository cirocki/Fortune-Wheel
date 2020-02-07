import React from "react";
import styled from "styled-components";
import AddItem from "./AddItem";
import ItemsList from "./ItemsList";

const StyledSidebar = styled.div`
  padding-right: 2rem;
`;

export default function Sidebar() {
  return (
    <StyledSidebar>
      <AddItem />
      <ItemsList />
    </StyledSidebar>
  );
}
