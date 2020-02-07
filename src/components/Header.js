import React from "react";
import styled from "styled-components";
import SpinButton from "./SpinButton";

const StyledHeader = styled.header`
  background: #c7f63d;
`;
const StyledContent = styled.div`
  padding: 2rem;
`;
const StyledTitle = styled.h1`
  padding: 2rem;
  color: #111;
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: 2px;
`;

export default function Header() {
  return (
    <StyledHeader>
      <StyledContent>
        <StyledTitle>/ CREATE YOUR OWN DESTINY /</StyledTitle>
        <SpinButton />
      </StyledContent>
    </StyledHeader>
  );
}
