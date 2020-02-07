import React, { useContext } from "react";
import { ItemContext } from "../contexts/ItemContext";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";

const StyledItemsWrapper = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  color: #fff;
  background: #fff;
  border-radius: 1rem;
`;

const StyledItemsHeading = styled.h2`
  color: #757575;
  font-weight: 400;
`;

const StyledItem = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  align-items: center;
  margin-top: 1rem;
  border-radius: 1rem;
`;

const StyledItemName = styled.p`
  padding: 0.5rem 2rem;
  text-transform: uppercase;
  text-align: left;
  letter-spacing: 2px;
  border-right: 2px solid rgba(0, 0, 0, 0.2);
`;

const StyledItemNumber = styled.p`
  font-size: 1.5rem;
  border-right: 2px solid rgba(0, 0, 0, 0.2);
`;
const StyledCloseIcon = styled.div`
  padding: 1rem;
  opacity: 0.4;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

export default function ItemsList() {
  const { item, removeItem } = useContext(ItemContext);
  return (
    <StyledItemsWrapper>
      <StyledItemsHeading>Item List</StyledItemsHeading>
      {item.map(el => (
        <StyledItem key={el.id} style={{ background: el.background }}>
          <StyledItemName>{el.item}</StyledItemName>
          <StyledItemNumber>{el.times}</StyledItemNumber>
          <StyledCloseIcon>
            <FontAwesomeIcon
              icon={faBackspace}
              size="3x"
              style={{ cursor: "pointer" }}
              onClick={() => removeItem(el.id)}
            />
          </StyledCloseIcon>
        </StyledItem>
      ))}
    </StyledItemsWrapper>
  );
}
