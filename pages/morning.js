import Link from "next/link";
import QuestionForm from "../components/QuestionForm";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";

export default function MorningPage({ onAddMorningAnswer }) {
  return (
    <Main>
      <StyledLink href="/">
        <NavIconToHomepage />
      </StyledLink>
      <Heading>Guten Morgen.</Heading>
      <QuestionForm
        onAddEntry={onAddMorningAnswer}
        questionText="Worauf freust du dich im Moment?"
      />
    </Main>
  );
}

const Main = styled.main`
  min-height: 100vh;
  background: var(--background-colors);
  background-size: var(--background-size);
  animation: var(--gradient-animation);
`;

const Heading = styled.h1`
  text-align: center;
  font-weight: 200;
  margin: 0.9rem;
  margin-bottom: 45px;
  font-size: var(--heading-fontsize);
  font-weight: var(--body-fontweight);
  color: var(--text-primary-color);
`;

const StyledLink = styled(Link)`
  display: flex;
  padding: 10px;
`;

const NavIconToHomepage = styled(BsArrowLeft)`
  transform: scale(1.5);
  margin: 0.3rem 0.5rem;
  color: var(--text-primary-color);
`;
