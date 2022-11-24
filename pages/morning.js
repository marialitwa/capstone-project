import Link from "next/link";
import QuestionForm from "../components/QuestionForm";
import styled from "styled-components";
// import MorningAnswerListItem from "../components/MorningAnswerListItem";

export default function MorningPage({ morningAnswers, onAddMorningAnswer }) {
  return (
    <>
      <StyledLink href="/">Home</StyledLink>
      <Heading>Guten Morgen.</Heading>
      <QuestionForm
        onAddEntry={onAddMorningAnswer}
        questionText="Worauf freust du dich im Moment?"
      />
      {/* <MorningAnswerListItem /> */}
      {/* <ul>
        {morningAnswers.map((morningAnswer) => (
          <AnswerListItem key={morningAnswer.id}>
            {morningAnswer.text}
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

const StyledLink = styled(Link)`
  display: flex;
  margin: 10px;
  color: black;
`;
