import React from "react";
import styled from "styled-components";
import Link from "next/link";
import AnswerCard from "../components/AnswerCard";
// import { TfiHome } from "react-icons/tfi";
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
      </div>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
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
  color: var(--text-primary);
  margin: 1.2rem;
  margin-top: 1rem;
  transform: scale(1.5);
`;

// ----- HEADING + DATE ------
const Heading = styled.h1`
  text-align: center;
  font-weight: 200;
  margin: 3.1rem;
  margin-bottom: 2rem;
  font-size: var(--heading-fontsize);
  color: var(--text-primary);
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
  font-size: var(--body-fontsize-small);
  font-weight: 200;
  _margin-bottom: -0.7rem;
  color: var(--text-secondary);
`;

const Daytime = styled.p`
  _display: flex;
  _justify-content: center;
  font-size: var(--body-fontsize-small);
  color: var(--text-secondary);
  font-weight: 200;
  letter-spacing: 0.01rem;
  _margin-bottom: 10px;
`;

// const StyledQuestion = styled.p`
//   display: flex;
//   justify-content: center;
//   margin-bottom: -1rem;
//   font-size: 0.8rem;
//   color: #757474;
//   font-weight: 300;
// `;

// STYLED QUESTION AUS ANSWERCARD.JS
// const StyledQuestion = styled.p`
//   display: flex;
//   justify-content: center;
//   font-size: var(--body-fontsize-small);
//   color: var(--text-secondary);
//   font-weight: 200;
//   letter-spacing: 0.01rem;
//   margin-bottom: 10px;
// `;
