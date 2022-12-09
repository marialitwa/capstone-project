import React from "react";
import styled from "styled-components";
import Link from "next/link";
import AnswerCard from "../components/AnswerCard";
import { BsArrowLeft } from "react-icons/bs";

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
      year: "2-digit",
    });

  return (
    <Main>
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
                <Wrapper>
                  <Daytime>Morgens</Daytime>
                  <EntryDate>
                    {stringToLocaleDate(answerText.createdDate)}
                  </EntryDate>
                </Wrapper>
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
                <Wrapper>
                  <Daytime>Abends</Daytime>
                  <EntryDate>
                    {stringToLocaleDate(answerText.createdDate)}
                  </EntryDate>
                </Wrapper>
                <AnswerCard
                  answerText={[answerText]}
                  toggleFavorite={toggleFavorite}
                />
              </div>
            )
        )}

        {morningAnswers.find((answerText) => answerText.isFavorite) ===
          undefined &&
        eveningAnswers.find((answerText) => answerText.isFavorite) ===
          undefined ? (
          <PlaceholderText>
            Du hast noch keine Highlights ausgewählt.
          </PlaceholderText>
        ) : (
          ""
        )}
      </div>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: var(--background-colors);
  background-size: var(--background-size);
  animation: var(--gradient-animation);
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

const NavIconToHomepage = styled(BsArrowLeft)`
  color: var(--text-primary-color);
  margin: 1.2rem;
  margin-top: 1rem;
  transform: scale(1.5);
`;

// ----- HEADING + DATE ------
const Heading = styled.h1`
  text-align: center;
  margin: 3.1rem;
  margin-bottom: 2rem;
  font-size: var(--heading-fontsize);
  font-weight: var(--body-fontweight);
  color: var(--text-primary-color);
`;

const Wrapper = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.4rem;
  position: absolute;
  left: 115px;
  z-index: 1;
  margin: 5px;
`;

const EntryDate = styled.p`
  _text-align: center;
  _margin-bottom: -0.7rem;
  font-size: var(--body-fontsize-small);
  font-weight: var(--body-fontweight);
  color: var(--text-secondary-color);
`;

const Daytime = styled.p`
  _display: flex;
  _justify-content: center;
  _margin-bottom: 10px;
  font-size: var(--body-fontsize-small);
  color: var(--text-secondary-color);
  font-weight: var(--body-fontweight);
  letter-spacing: 0.01rem;
`;

const PlaceholderText = styled.p`
  margin-top: 2rem;
  font-size: var(--body-fontsize);
  color: var(--text-primary-color);
  font-weight: var(--body-fontweight);
`;
