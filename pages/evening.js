import Link from "next/link";
import QuestionForm from "../components/QuestionForm";
import styled from "styled-components";
// import { TfiHome } from "react-icons/tfi";
import { BsArrowLeft } from "react-icons/bs";

export default function EveningPage({ onAddEveningAnswer }) {
  return (
    <>
      {/* <NavHeader>
        <Link href="/">
          <NavIconToHomepage />
        </Link>
      </NavHeader> */}
      <StyledLink href="/">
        <NavIconToHomepage />
      </StyledLink>
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
  font-weight: 200;
  margin: 0.9rem;
  margin-bottom: 45px;
  font-size: var(--heading-fontsize);
  color: var(--darkgrey);
`;

const StyledLink = styled(Link)`
  display: flex;
  margin: 10px;
  color: black;
`;
const NavIconToHomepage = styled(BsArrowLeft)`
  transform: scale(1.5);
  margin: 0.3rem 0.5rem;
  color: var(--darkgrey);
`;

// ----- NAV HEADER ------

// const NavHeader = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
// `;
