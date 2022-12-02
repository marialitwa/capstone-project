import React from "react";
import styled from "styled-components";
import Link from "next/link";
import AnswerCard from "../components/AnswerCard";
import { TfiHome } from "react-icons/tfi";

// export default function FavoriteAnswers() {
//   const currentDate = new Date()
//     .toLocaleDateString("de-DE")
//     .replaceAll(".", "-");

export default function FavoriteAnswers({
  morningAnswers,
  eveningAnswers,
  toggleFavorite,
}) {
  return (
    <>
      {/* <StyledLink href={`/answers/${currentDate}`}>Journal</StyledLink> */}
      {/* <StyledLink href="/">Home</StyledLink> */}
      {/* <Link href="/">
        <NavIconToHomepage />
      </Link> */}

      <NavHeader>
        <Link href="/">
          <NavIconToHomepage />
        </Link>
        {/* <Link href="/answers">
          <NavIconToAnswersPage />
        </Link> */}
      </NavHeader>
      <Heading>Deine Highlights.</Heading>

      <div>
        {morningAnswers?.map((answerText) => {
          if (answerText.isFavorite === true) {
            return (
              <div>
                {/* HIER FUNKTIONIERT ES: */}
                <EntryDate>{answerText.createdDate}</EntryDate>

                {/* SO FUNKTIONIERT ES NICHT: */}
                {/* <p>{morningAnswers.createdDate}</p> */}

                <AnswerCard
                  // createdDate={morningAnswers.createdDate}
                  answerText={[answerText]}
                  toggleFavorite={toggleFavorite}
                />
              </div>
            );
          } else {
            return null;
          }
        })}
        {eveningAnswers?.map((answerText) => {
          if (answerText.isFavorite === true) {
            return (
              <div>
                {/* SO FUNKTIONIERT ES NICHT: */}
                {/* <p>
                  {answerText.createdDate.toLocaleDateString("de-DE", {
                    weekday: "long",
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                  })}
                </p> */}
                <AnswerCard
                  answerText={[answerText]}
                  toggleFavorite={toggleFavorite}
                />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
  font-weight: 200;
  text-decoration: underline;
  text-decoration-color: #764ba2;
  text-decoration-thickness: 0.8rem;
  margin-bottom: 2.5rem;
  margin-top: 3rem;
`;

// const StyledLink = styled(Link)`
//   display: flex;
//   margin: 10px;
//   color: black;
// `;

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
  _margin: 0.3rem 0.5rem;
  color: #434343;
  margin: 1rem;
  margin-top: 0.8rem;
`;

const EntryDate = styled.p`
  text-align: center;
  font-size: 0.8rem;
  font-weight: 300;
  margin-bottom: -1.5rem;
  color: #757474;
`;
