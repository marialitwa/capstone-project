import styled from "styled-components";
import QuestionForm from "../components/QuestionForm";
import Link from "next/link";

export default function Home({ morningAnswers, onAddMorningAnswer }) {
  return (
    <Main>
      <Heading>Das Beste des Tages</Heading>
      <QuestionForm onAddEntry={onAddMorningAnswer} />
      <ul>
        {morningAnswers.map((morningAnswer) => (
          <AnswerListItems key={morningAnswer.id}>
            {morningAnswer.text}
          </AnswerListItems>
        ))}
      </ul>
      <Link href="/form-morning">Go to morning question</Link>
      <Link href="/form-evening">Go to evening question</Link>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  text-align: center;
  margin: 2rem;
`;

const AnswerListItems = styled.li`
  list-style: none;
  margin: 20px;
  margin-left: -20px;
  max-width: 250px;
`;
