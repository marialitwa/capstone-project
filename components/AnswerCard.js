import React from "react";
import styled from "styled-components";

export default function AnswerCard({ questionText, answerText }) {
  return (
    <>
      <StyledQuestion>{questionText}</StyledQuestion>
      {answerText.map((morningAnswer) => (
        <StyledAnswer>{morningAnswer.text}</StyledAnswer>
      ))}
    </>
  );
}

const StyledQuestion = styled.p`
  display: flex;
  justify-content: center;
  font-size: 0.9rem;
  color: violet;
`;

const StyledAnswer = styled.p`
  display: flex;
  justify-content: center;
  padding: 5px 40px;
  font-size: 0.95rem;
  text-align: center;
  border: 1px solid violet;
`;
