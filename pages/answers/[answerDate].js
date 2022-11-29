import React from "react";
import Link from "next/link";
import styled from "styled-components";
import AnswerCard from "../../components/AnswerCard";
import { useRouter } from "next/router";

export default function AnswersPage({ morningAnswers, eveningAnswers }) {
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
        <StyledLink href="/">Home</StyledLink>
        <Heading>Dein Journal.</Heading>
        <EntryDate>
          {answerPageDate.toLocaleDateString("de-DE", {
            weekday: "long",
            day: "numeric",
            month: "numeric",
            year: "numeric",
          })}
        </EntryDate>

        {/* Hier Ternary einbauen, wenn kein Eintrag gemacht wurde? Oder in der AnswerCard??*/}

        <AnswerCard
          questionText="Worauf freust du dich im Moment?"
          answerText={filteredMorningAnswers}
        />
        <AnswerCard
          questionText="Was war dein Highlight des Tages?"
          answerText={filteredEveningAnswers}
        />
      </Main>
      <Navigation>
        <StyledNavLink href={`/answers/${previousDate}`}>
          Vorheriger Tag
        </StyledNavLink>
        {today.toDateString() !== answerPageDate.toDateString() && (
          <StyledNavLink href={`/answers/${nextDate}`}>
            Nächster Tag
          </StyledNavLink>
        )}
      </Navigation>
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

const EntryDate = styled.p`
  text-align: center;
  font-size: 0.9rem;
  font-weight: 300;
  margin-bottom: 3rem;
`;

const StyledLink = styled(Link)`
  display: flex;
  margin: 10px;
  color: black;
`;

const Main = styled.main`
  min-height: calc(100vh - 4rem);
`;

const StyledNavLink = styled(Link)`
  color: #764ba2;
  margin: 1rem 1.2rem;
  border-bottom: 2px solid #764ba2;
  text-decoration: none;
  font-size: 0.9rem;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;
