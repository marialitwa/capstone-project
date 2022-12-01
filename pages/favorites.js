import React from "react";
import styled from "styled-components";
import Link from "next/link";
import AnswerCard from "../components/AnswerCard";

// export default function FavoriteAnswers() {
//   const currentDate = new Date()
//     .toLocaleDateString("de-DE")
//     .replaceAll(".", "-");

// spots = answerText setSpot=setAnswerText

export default function FavoriteAnswers({
  morningAnswers,
  eveningAnswers,
  toggleFavorite,
}) {
  const currentDate = new Date()
    .toLocaleDateString("de-DE")
    .replaceAll(".", "-");

  return (
    <>
      {/* <StyledLink href={`/answers/${currentDate}`}>Journal</StyledLink> */}

      <StyledLink href="/">Home</StyledLink>
      <Heading>Deine Highlights.</Heading>

      <div>
        {morningAnswers?.map((answerText) => {
          if (answerText.isFavorite === true) {
            return (
              <AnswerCard
                answerText={[answerText]}
                toggleFavorite={toggleFavorite}
              />
            );
          } else {
            return null;
          }
        })}
        {eveningAnswers?.map((answerText) => {
          if (answerText.isFavorite === true) {
            return (
              <AnswerCard
                answerText={[answerText]}
                toggleFavorite={toggleFavorite}
              />
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
  margin: 1.5rem;
  margin-bottom: 2.5rem;
`;

const StyledLink = styled(Link)`
  display: flex;
  margin: 10px;
  color: black;
`;
