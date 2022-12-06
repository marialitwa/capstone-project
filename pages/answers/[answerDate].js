import React from "react";
import Link from "next/link";
import styled from "styled-components";
import AnswerCard from "../../components/AnswerCard";
import { useRouter } from "next/router";

// ---- NAV ICONS -----
import { VscChevronLeft } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";
import { TfiHome } from "react-icons/tfi";
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
            month: "numeric",
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
  height: 100vh;
  margin-top: 3rem;
  padding-bottom: 4rem;
`;

const Heading = styled.h1`
  text-align: center;
  font-weight: 200;
  text-decoration: underline;
  text-decoration-color: #764ba2;
  text-decoration-thickness: 0.8rem;
  margin: 1.5rem;
  margin-bottom: 2.5rem;
`;

const EntryDate = styled.p`
  text-align: center;
  font-size: 0.9rem;
  font-weight: 300;
  margin-bottom: 3rem;
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
  color: var(--darkgrey);
  margin: 1.2rem;
  margin-top: 1rem;
`;

const NavIconToFavoritesPage = styled(IoIosHeartEmpty)`
  transform: scale(1.7);
  color: var(--darkgrey);
  margin: 1.2rem;
  margin-top: 1rem;
`;

// ----- NAV FOOTER ------
const NavFooter = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const NavIconPreviousDay = styled(VscChevronLeft)`
  transform: scale(3);
  color: var(--darkgrey);
`;

const NavIconNextDay = styled(VscChevronRight)`
  transform: scale(3);
  color: var(--darkgrey);
`;

const StyledNavLink = styled(Link)`
  color: #764ba2;
  margin: 1.2rem 1.5rem;
  text-decoration: none;
  font-size: 0.7rem;
  display: flex;
`;
