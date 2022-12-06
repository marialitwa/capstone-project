import React from "react";
import styled from "styled-components";

export default function AnswerCard({
  questionText,
  answerText,
  toggleFavorite,
}) {
  return (
    <StyledCard>
      <StyledQuestion>{questionText}</StyledQuestion>
      {answerText.length === 0 ? (
        <StyledPlaceholder>Kein Eintrag</StyledPlaceholder>
      ) : (
        answerText.map((morningAnswer) => (
          <>
            <StyledAnswer>{morningAnswer.text}</StyledAnswer>
            <FavIcon
              aria-label="bookmark button"
              type="button"
              onClick={() => {
                toggleFavorite(morningAnswer.id);
              }}
            >
              {morningAnswer.isFavorite ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="25px"
                  viewBox="0 0 24 24"
                  width="25px"
                  // fill="#764ba2"
                  fill="#ff3870"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="25px"
                  viewBox="0 0 24 24"
                  width="25px"
                  // fill="#764ba2"
                  fill="#ff3870"
                  // fill="hotpink"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
                </svg>
              )}
            </FavIcon>
          </>
        ))
      )}
    </StyledCard>
  );
}

const StyledCard = styled.article`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: 78vw;
  padding: 10px 25px;
  margin-bottom: 0.8rem;
`;

const StyledQuestion = styled.p`
  display: flex;
  justify-content: center;
  margin-bottom: -10px;
  font-size: var(--body-fontsize-small);
  color: var(--grey);
  font-weight: 200;
  letter-spacing: 0.01rem;
  margin-bottom: 10px;
`;

const StyledAnswer = styled.p`
  _display: flex;
  _justify-content: center;
  _padding: 10px 12px;
  margin-bottom: 10px;
  font-size: var(--body-fontsize);
  text-align: center;
  font-weight: 300;
  line-height: 140%;
  _max-width: 100vw;
`;

const StyledPlaceholder = styled.p`
  display: flex;
  justify-content: center;
  font-size: var(--body-fontsize-small);
  text-align: center;
  font-weight: 300;
  line-height: 140%;
  font-style: italic;
`;

const FavIcon = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  margin: auto;
  margin-bottom: 0.5rem;
  background: none;
`;
