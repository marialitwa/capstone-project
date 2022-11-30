import React from "react";
import styled from "styled-components";
import Link from "next/link";
import AnswerCard from "../components/AnswerCard";

// export default function FavoriteAnswers() {
//   const currentDate = new Date()
//     .toLocaleDateString("de-DE")
//     .replaceAll(".", "-");

// spots = answerText setSpot=setAnswerText

export default function FavoriteAnswers({ answerText, setAnswerText }) {
  const currentDate = new Date()
    .toLocaleDateString("de-DE")
    .replaceAll(".", "-");

  function toggleFavorite(id) {
    const newAnswerArray = answerText.map((answerText) => {
      if (answerText.id === id) {
        return {
          ...answerText,
          isFavorite: !answerText.isFavorite,
        };
      } else {
        return answerText;
      }
    });

    setAnswerText(newAnswerArray);
  }

  return (
    <>
      <StyledLink href={`/answers/${currentDate}`}>Journal</StyledLink>
      <Heading>Deine Highlights.</Heading>

      {/* HIER KOMMT DIE FAV-SORTIERTE ANSWERSLIST REIN */}
      <div>
        {answerText?.map((answerText) => {
          if (answerText.isFavorite === true) {
            return (
              <AnswerCard
                answerText={answerText}
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
