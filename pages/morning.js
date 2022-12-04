import Link from "next/link";
import QuestionForm from "../components/QuestionForm";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";

export default function MorningPage({ onAddMorningAnswer }) {
  return (
    <>
      <StyledLink href="/">
        <NavIconToHomepage />
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
  font-weight: 200;
  margin: 1.5rem;
  margin-bottom: 40px;
`;

const StyledLink = styled(Link)`
  display: flex;
  margin: 10px;
  color: black;
`;

const NavIconToHomepage = styled(BsArrowLeft)`
  transform: scale(1.5);
  margin: 0.3rem 0.5rem;
`;
