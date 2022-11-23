import Link from "next/link";
import QuestionForm from "../components/QuestionForm";
import styled from "styled-components";

export default function MorningPage({ morningAnswers, onAddMorningAnswer }) {
  return (
    <>
      <StyledLink href="/">Home</StyledLink>
      <Heading>Guten Morgen.</Heading>
      <QuestionForm
        onAddEntry={onAddMorningAnswer}
        questionText="Worauf freust du dich heute?"
      />
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

const Heading = styled.h1`
  text-align: center;
  margin: 2rem;
  margin-bottom: 55px;
`;

const AnswerListItem = styled.li`
  list-style: none;
  margin: 20px;
  max-width: 250px;
  font-size: 0.95rem;
`;

const StyledLink = styled(Link)`
  display: flex;
  margin: 10px;
  color: black;
`;

const StyledQuestion = styled.p`
  display: flex;
  justify-content: center;
  font-size: 0.95rem;
`;
