import React from "react";
import Link from "next/link";
import styled from "styled-components";
import AnswerCard from "../../components/AnswerCard";
import { useRouter } from "next/router";

// ---- NAV ICONS -----
import { VscChevronLeft } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";
import { BsArrowLeft } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";

export default function AnswersPage({
  morningAnswers,
  eveningAnswers,
  toggleFavorite,
}) {
  const router = useRouter();
  const { answerDate } = router.query;

  if (!answerDate) return;
  const [day, month, year] = answerDate.split("-");

  const answerPageDate = new Date(year, Number(month) - 1, day);

  const filteredMorningAnswers = morningAnswers.filter((morningAnswer) => {
    const createdDate = new Date(morningAnswer.createdDate);
    return createdDate.toDateString() === answerPageDate.toDateString();
  });

  const filteredEveningAnswers = eveningAnswers.filter((eveningAnswer) => {
    const createdDate = new Date(eveningAnswer.createdDate);
    return createdDate.toDateString() === answerPageDate.toDateString();
  });

  const previousDate = new Date(year, Number(month) - 1, Number(day) - 1)
    .toLocaleDateString("de-DE")
    .replaceAll(".", "-");

  const nextDate = new Date(year, Number(month) - 1, Number(day) + 1)
    .toLocaleDateString("de-DE")
    .replaceAll(".", "-");

  const today = new Date();

  return (
    <>
      <Main>
        <NavHeader>
          <Link href="/">
            <NavIconToHomepage />
          </Link>
          <Link href="/favorites">
            <NavIconToFavoritesPage />
          </Link>
        </NavHeader>
        <Heading>Dein Journal.</Heading>
        <EntryDate>
          {answerPageDate.toLocaleDateString("de-DE", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </EntryDate>
        <AnswerCard
          questionText="Worauf freust du dich im Moment?"
          answerText={filteredMorningAnswers}
          toggleFavorite={toggleFavorite}
        />
        <AnswerCard
          questionText="Was war dein Highlight des Tages?"
          answerText={filteredEveningAnswers}
          toggleFavorite={toggleFavorite}
        />
      </Main>

      <NavFooter>
        <StyledNavLink href={`/answers/${previousDate}`}>
          <NavIconPreviousDay />
        </StyledNavLink>

        {today.toDateString() !== answerPageDate.toDateString() && (
          <StyledNavLink href={`/answers/${nextDate}`}>
            <NavIconNextDay />
          </StyledNavLink>
        )}
      </NavFooter>
    </>
  );
}

const Main = styled.main`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  background: var(--background-colors);
  background-size: 600%;
  animation: gradient-bg 20s ease infinite;
  @keyframes gradient-bg {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
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

const NavIconToFavoritesPage = styled(IoIosHeartEmpty)`
  transform: scale(1.6);
  color: var(--text-primary-color);
  margin: 1rem 1.3rem;
`;

// ----- HEADING + DATE ------
const Heading = styled.h1`
  text-align: center;
  margin: 3.1rem;
  margin-bottom: 1rem;
  color: var(--text-primary-color);
  font-size: var(--heading-fontsize);
  font-weight: var(--body-fontweight);
`;

const EntryDate = styled.p`
  text-align: center;
  margin-bottom: 2rem;
  color: var(--text-primary-color);
  font-size: var(--date-fontsize);
  font-weight: var(--date-fontweight);
`;

// ----- NAV FOOTER ------
const NavFooter = styled.nav`
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const NavIconPreviousDay = styled(VscChevronLeft)`
  transform: scale(2.9);
  color: var(--text-primary-color);
`;

const NavIconNextDay = styled(VscChevronRight)`
  transform: scale(2.9);
  color: var(--text-primary-color);
`;

const StyledNavLink = styled(Link)`
  color: var(--text-primary-color);
  margin: 1.4rem 1.2rem;
  text-decoration: none;
  font-size: 0.7rem;
  display: flex;
`;
