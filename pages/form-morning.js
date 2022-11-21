import Link from "next/link";
import QuestionForm from "../components/QuestionForm";
import styled from "styled-components";

export default function MorningForm({ morningAnswers, onAddMorningAnswer }) {
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Form for the MORNING goes here</h1>
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
  margin-left: -20px;
  max-width: 250px;
`;
