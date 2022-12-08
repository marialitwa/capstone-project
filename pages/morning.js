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
  background-size: 600%;
  animation: gradient-bg 20s ease infinite;
  @keyframes gradient-bg {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
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
