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
  margin-bottom: -10px;
  font-size: 0.8rem;
  color: #757474;
  font-weight: 300;
`;

const StyledAnswer = styled.p`
  display: flex;
  justify-content: center;
  padding: 5px 40px;
  margin-bottom: 60px;
  font-size: 1rem;
  text-align: center;
  font-weight: 300;
  line-height: 140%;
  max-width: 100vw;
`;
