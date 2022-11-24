import React from "react";
import styled from "styled-components";

export default function EveningAnswerListItem({ questionText }) {
  return (
    <>
      <StyledQuestion>{questionText}</StyledQuestion>
    </>
  );
}

const StyledQuestion = styled.p`
  display: flex;
  justify-content: center;
  font-size: 0.9rem;
  color: violet;
`;
