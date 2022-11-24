import React from "react";
import styled from "styled-components";

export default function MorningAnswerListItem({ morningAnswers }) {
  return (
    <>
      {/* <StyledQuestion>{questionText}</StyledQuestion> */}
      {/* <p key={morningAnswer.id} {morningAnswer.text} {morningAnswer.createdDate}></p> */}

      <ul>
        {morningAnswers.map((morningAnswer) => (
          <AnswerListItem key={morningAnswer.id}>
            {morningAnswer.text}
          </AnswerListItem>
        ))}
      </ul>
    </>
  );
}

const AnswerListItem = styled.li`
  list-style: none;
  margin: 20px;
  max-width: 250px;
  font-size: 0.95rem;
`;
