import React from "react";
import styled from "styled-components";
import Link from "next/link";
import AnswerCard from "../components/AnswerCard";
import { TfiHome } from "react-icons/tfi";

export default function FavoriteAnswers({
  morningAnswers,
  eveningAnswers,
  toggleFavorite,
}) {
  const stringToLocaleDate = (dateString) =>
    new Date(dateString).toLocaleDateString("de-DE", {
      weekday: "short",
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });

  return (
    <>
      <NavHeader>
        <Link href="/">
          <NavIconToHomepage />
        </Link>
      </NavHeader>
      <Heading>Deine Highlights.</Heading>

      {/* FAVORITE SELECTION MORNING ANSWERS */}
      <div>
        {morningAnswers?.map(
          (answerText) =>
            answerText.isFavorite && (
              <div>
                <StyledEntryDate>
                  {stringToLocaleDate(answerText.createdDate)}.
                </StyledEntryDate>
                <AnswerCard
                  answerText={[answerText]}
                  toggleFavorite={toggleFavorite}
                />
              </div>
            )
        )}
        {/* FAVORITE SELECTION EVENING ANSWERS */}
        {eveningAnswers?.map(
          (answerText) =>
            answerText.isFavorite && (
              <div>
                <StyledEntryDate>
                  {stringToLocaleDate(answerText.createdDate)}.
                </StyledEntryDate>
                <AnswerCard
                  answerText={[answerText]}
                  toggleFavorite={toggleFavorite}
                />
              </div>
            )
        )}
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

const StyledEntryDate = styled.p`
  text-align: center;
  font-size: 0.8rem;
  font-weight: 300;
  margin-bottom: -1.5rem;
  color: #757474;
`;
