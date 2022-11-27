import Link from "next/link";
import QuestionForm from "../components/QuestionForm";
import styled from "styled-components";

export default function MorningPage({ onAddMorningAnswer }) {
  return (
    <>
      <StyledLink href="/">Home</StyledLink>
      <StyledLink href="/">
        <img src="assets/icons/icons8-left-arrow-50.png" />
      </StyledLink>

      <Heading>Guten Morgen.</Heading>
      <QuestionForm
        onAddEntry={onAddMorningAnswer}
        questionText="Worauf freust du dich im Moment?"
      />
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
