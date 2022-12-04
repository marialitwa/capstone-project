import Link from "next/link";
import QuestionForm from "../components/QuestionForm";
import styled from "styled-components";
import { TfiHome } from "react-icons/tfi";

export default function EveningPage({ onAddEveningAnswer }) {
  return (
    <>
      <NavHeader>
        <Link href="/">
          <NavIconToHomepage />
        </Link>
      </NavHeader>
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
  margin: 2rem;
  margin-top: 3rem;
`;

// ----- NAV HEADER ------

const NavHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const NavIconToHomepage = styled(TfiHome)`
  transform: scale(1.3);
  color: #434343;
  margin: 1rem;
  margin-top: 0.8rem;
`;
