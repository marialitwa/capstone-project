import Link from "next/link";
import QuestionForm from "../components/QuestionForm";
import styled from "styled-components";

export default function EveningForm({ eveningAnswers, onAddEveningAnswer }) {
  return (
    <>
      <StyledLink href="/">Home</StyledLink>
      <h1>Evening Form goes here</h1>
      <QuestionForm onAddEntry={onAddEveningAnswer} />

      <ul>
        {eveningAnswers.map((eveningAnswer) => (
          <AnswerListItems key={eveningAnswer.id}>
            {eveningAnswer.text}
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
