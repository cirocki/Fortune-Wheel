import React from "react";
import styled from "styled-components";
import { randomRotate } from "../helpers/randomRotate";

const StyledBtn = styled.button`
  font-family: "Kanit", sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 1rem 3rem;
  background: #111;
  color: #fff;
  border: none;
  border-radius: 5rem;
  cursor: pointer;

  &:hover {
    color: #c7f63d;
  }
`;
export default function SpinButton() {
  return (
    <div>
      <StyledBtn onClick={() => randomRotate(".recharts-pie")}>
        Spin the wheel
      </StyledBtn>
    </div>
  );
}
