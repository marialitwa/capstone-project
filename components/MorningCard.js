import React from "react";
import MorningAnswerListItem from "./MorningAnswerListItem";
import styled from "styled-components";

export default function MorningCard({ questionText, morningAnswers }) {
  return (
    <>
      <StyledQuestion>{questionText}</StyledQuestion>
      <MorningAnswerListItem morningAnswers={morningAnswers} />
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
