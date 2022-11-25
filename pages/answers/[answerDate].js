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

  //Monate fangen bei 0 an, deswegen month -1
  const answerPageDate = new Date(year, Number(month) - 1, day);

  const filteredMorningAnswers = morningAnswers.filter((morningAnswer) => {
    const createdDate = new Date(morningAnswer.createdDate);
    return createdDate.toDateString() === answerPageDate.toDateString();
  });

  const filteredEveningAnswers = eveningAnswers.filter((eveningAnswer) => {
    const createdDate = new Date(eveningAnswer.createdDate);
    return createdDate.toDateString() === answerPageDate.toDateString();
  });

  // function filterAnswers(date)
  // const sortedList =>
  // .sort nach Datum descending = desc
  // createdDate.filter() Filtern die zu dem Datum gehören
  // MorningCard und EveningCard die Answers nach Datum filtern
  // morningAnswers.filter() // eveningAnsers(filter)

  // Footer event prev/next übergeben wird ausgelöst
  // in die sortierte List gehen, s.o. und je ein Datum zurück und vor
  // filtern nach neuem Datum
  // gebe dem Filter das neue Datum mit

  return (
    <>
      <Main>
        <StyledLink href="/">Home</StyledLink>
        <Heading>Answers Page</Heading>
        <AnswerCard
          questionText="Worauf freust du dich im Moment?"
          answerText={filteredMorningAnswers}
        />
        <AnswerCard
          questionText="Was war das Beste des Tages?"
          answerText={filteredEveningAnswers}
        />
      </Main>
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
  margin: 2rem;
  margin-bottom: 55px;
`;

const StyledLink = styled(Link)`
  display: flex;
  margin: 10px;
  color: black;
`;

const Main = styled.main`
  min-height: calc(100vh - 4rem);
`;
