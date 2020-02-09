import React from "react";
import styled from "styled-components";
import { randomRotate } from "../helpers/randomRotate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

const StyledBtn = styled.button`
  font-family: "Kanit", sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 2rem;
  background: #111;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 4rem;
  cursor: pointer;

  &:hover {
    color: #c7f63d;
  }
`;
export default function SpinButton() {
  return (
    <div>
      <StyledBtn onClick={() => randomRotate(".recharts-pie")}>
        <FontAwesomeIcon
          icon={faRedo}
          size="3x"
          style={{ cursor: "pointer" }}
        />
      </StyledBtn>
    </div>
  );
}
