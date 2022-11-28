import Link from "next/link";
import QuestionForm from "../components/QuestionForm";
import styled from "styled-components";

export default function EveningPage({ onAddEveningAnswer }) {
  return (
    <>
      <StyledLink href="/">Home</StyledLink>
      <Heading>Guten Abend.</Heading>
      <QuestionForm
        onAddEntry={onAddEveningAnswer}
        questionText="Was war dein Highlight des Tages?"
      />
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
  margin: 1.5rem;
  margin-bottom: 40px;
`;

const StyledLink = styled(Link)`
  display: flex;
  margin: 10px;
  color: black;
`;
