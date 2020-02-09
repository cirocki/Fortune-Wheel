import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background: #fff;
`;
const StyledContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;
const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 2rem;
  @media (max-width: 919px) {
    flex-direction: column;
  }
  @media (max-width: 419px) {
    padding: 2rem 1rem;
  }
`;
const StyledTitle = styled.h1`
  background: #111;
  padding: 2rem 3rem;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 2px;
  @media (max-width: 919px) {
    margin-bottom: 2rem;
  }
  @media (max-width: 519px) {
    padding: 1rem 2rem;
    font-size: 1.25rem;
  }
  @media (max-width: 419px) {
    padding: 0.5rem 1rem;
    font-size: 1.125rem;
  }
`;
const StyledInfo = styled.p`
  max-width: 360px;
  color: #8f8f8f;
  text-align: right;
  font-size: 1.25rem;
  @media (max-width: 919px) {
    text-align: center;
  }
  @media (max-width: 419px) {
    font-size: 1rem;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledContent>
          <StyledTitle>#CREATE_YOUR_OWN_DESTINY</StyledTitle>
          <StyledInfo>
            It's a wheel of fortune, You can add your own items and random draw.
          </StyledInfo>
        </StyledContent>
      </StyledContainer>
    </StyledHeader>
  );
}
