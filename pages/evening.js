import Link from "next/link";
import QuestionForm from "../components/QuestionForm";
import styled from "styled-components";

export default function EveningForm({ eveningAnswers, onAddEveningAnswer }) {
  return (
    <>
      <StyledLink href="/">Home</StyledLink>
      <Heading>Guten Abend.</Heading>
      <StyledQuestion>Was war heute das Beste des Tages?</StyledQuestion>
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

const Heading = styled.h1`
  text-align: center;
  margin: 2rem;
  margin-bottom: 55px;
`;

const AnswerListItems = styled.li`
  list-style: none;
  margin: 20px;
  max-width: 250px;
  font-size: 0.95rem;
`;

const StyledLink = styled.a`
  display: flex;
  margin: 10px;
  color: black;
`;

const StyledQuestion = styled.p`
  display: flex;
  justify-content: center;
  margin: 0.7rem;
  font-size: 0.95rem;
`;
