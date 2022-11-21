import Link from "next/link";
import QuestionForm from "../components/QuestionForm";
import styled from "styled-components";

export default function MorningForm({ morningAnswers, onAddMorningAnswer }) {
  return (
    <>
      <StyledLink href="/">Home</StyledLink>
      <h1>Morning Form goes here</h1>
      <QuestionForm onAddEntry={onAddMorningAnswer} />
      <ul>
        {morningAnswers.map((morningAnswer) => (
          <AnswerListItems key={morningAnswer.id}>
            {morningAnswer.text}
          </AnswerListItems>
        ))}
      </ul>
    </>
  );
}

const AnswerListItems = styled.li`
  list-style: none;
  margin: 20px;
  max-width: 250px;
`;

const StyledLink = styled.a`
  display: flex;
  margin: 10px;
  color: black;
`;
