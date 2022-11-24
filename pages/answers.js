import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Footer from "../components/Footer";
import MorningCard from "../components/MorningCard";
import EveningCard from "../components/EveningAnswerListItem";

export default function AnswersPage({ morningAnswers, eveningAnswers }) {
  return (
    <>
      <Main>
        <StyledLink href="/">Home</StyledLink>
        <Heading>Answers Page</Heading>
        <MorningCard
          // Hier definiere ich die Prop-Variable: questionText="..."
          // Diese übergebe ich als destructered object in die
          // Komponenten => MorningCard.js
          questionText="Worauf freust du dich im Moment?"
          morningAnswers={morningAnswers}
        />
        <EveningCard
          questionText="Was war das Beste des Tages?"
          eveningAnswers={eveningAnswers}
        />
      </Main>
      <Footer />
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
