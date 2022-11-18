import styled from "styled-components";
import QuestionForm from "../components/QuestionForm";

export default function Home({ morningAnswers, onAddMorningAnswer }) {
  return (
    <Main>
      <Heading>Das Beste des Tages</Heading>
      <QuestionForm onAddEntry={onAddMorningAnswer} />
      <ul>
        {morningAnswers.map((morningAnswer) => (
          <li key={morningAnswer.id}>{morningAnswer.text}</li>
        ))}
      </ul>
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
