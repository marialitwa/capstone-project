import Link from "next/link";
import QuestionForm from "../components/QuestionForm";
import styled from "styled-components";

export default function EveningForm({
  eveningAnswers,
  onAddEveningAnswer,
  //   eveningQuestion,
}) {
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Form for the EVENING goes here</h1>
      {/* <p>{eveningQuestion}</p> */}
      <QuestionForm
        onAddEntry={onAddEveningAnswer}
        // eveningQuestion={eveningQuestion}
      />

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
  margin-left: -20px;
  max-width: 250px;
`;
