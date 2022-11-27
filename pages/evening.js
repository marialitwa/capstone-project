import Link from "next/link";
import QuestionForm from "../components/QuestionForm";
import styled from "styled-components";

export default function EveningPage({ eveningAnswers, onAddEveningAnswer }) {
  return (
    <>
      <StyledLink href="/">Home</StyledLink>
      <Heading>Guten Abend.</Heading>
      <QuestionForm
        onAddEntry={onAddEveningAnswer}
        questionText="Was war dein Highlight des Tages?"
      />
      {/* <ul>
        {eveningAnswers.map((eveningAnswer) => (
          <AnswerListItem key={eveningAnswer.id}>
            {eveningAnswer.text}
          </AnswerListItem>
        ))}
      </ul> */}
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
  margin: 2rem;
  margin-bottom: 55px;
`;

// const AnswerListItem = styled.li`
//   list-style: none;
//   margin: 20px;
//   max-width: 250px;
//   font-size: 0.95rem;
// `;

const StyledLink = styled(Link)`
  display: flex;
  margin: 10px;
  color: black;
`;
