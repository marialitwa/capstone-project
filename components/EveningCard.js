import React from "react";
import EveningAnswerListItem from "./EveningAnswerListItem";
import styled from "styled-components";

export default function EveningCard({ questionText, eveningAnswers }) {
  return (
    <>
      <StyledQuestion>{questionText}</StyledQuestion>
      <EveningAnswerListItem eveningAnswers={eveningAnswers} />
      {/* <p key={morningAnswer.id} {morningAnswer.text} {morningAnswer.createdDate}></p> */}
    </>
  );
}

const StyledQuestion = styled.p`
  display: flex;
  justify-content: center;
  font-size: 0.9rem;
  color: violet;
`;
