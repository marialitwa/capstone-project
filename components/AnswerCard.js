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
                  height="50"
                  width="50"
                  viewBox="-15 0 70 70"
                  fill="var(--accent)"
                >
                  <path d="m20 32-.75-.708q-4.083-3.709-6.729-6.375-2.646-2.667-4.209-4.646-1.562-1.979-2.145-3.583-.584-1.605-.584-3.188 0-2.917 1.979-4.896 1.98-1.979 4.855-1.979 2.25 0 4.166 1.229Q18.5 9.083 20 11.5q1.542-2.417 3.438-3.646 1.895-1.229 4.145-1.229 2.875 0 4.855 1.979 1.979 1.979 1.979 4.896 0 1.583-.584 3.188-.583 1.604-2.145 3.583-1.563 1.979-4.209 4.646-2.646 2.666-6.729 6.375Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="50"
                  width="50"
                  viewBox="-15 0 70 70"
                  fill="var(--accent)"
                >
                  <path d="m20 32-.75-.708q-4.083-3.709-6.729-6.375-2.646-2.667-4.209-4.646-1.562-1.979-2.145-3.583-.584-1.605-.584-3.188 0-2.875 1.979-4.875 1.98-2 4.855-2 2.25 0 4.166 1.229Q18.5 9.083 20 11.5q1.542-2.417 3.438-3.646 1.895-1.229 4.145-1.229 2.875 0 4.855 1.979 1.979 1.979 1.979 4.896 0 1.583-.584 3.188-.583 1.604-2.125 3.583-1.541 1.979-4.208 4.646-2.667 2.666-6.75 6.375Zm0-1.292q4-3.666 6.625-6.27 2.625-2.605 4.146-4.542 1.521-1.938 2.104-3.438.583-1.5.583-2.958 0-2.5-1.708-4.208-1.708-1.709-4.167-1.709-2.125 0-3.812 1.188-1.688 1.187-3.313 3.812h-.916q-1.667-2.625-3.354-3.812-1.688-1.188-3.771-1.188-2.417 0-4.146 1.709Q6.542 11 6.542 13.542q0 1.458.604 2.937.604 1.479 2.104 3.417 1.5 1.937 4.104 4.542 2.604 2.604 6.646 6.27Zm0-11.583Z" />
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
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 78vw;
  padding: 10px 25px;
  margin-bottom: 0.8rem;
  position: relative;
`;

const StyledQuestion = styled.p`
  display: flex;
  justify-content: center;
  font-size: var(--body-fontsize-small);
  color: var(--text-secondary);
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
  margin-bottom: -0.9rem;
  background: none;
  filter: var(--primary-dropshadow);

  &:hover {
    _transform: scale(1.05);
    transition: all 1.05s;
    transform: rotateY(180deg);
  }
`;
