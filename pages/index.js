import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  const date = new Date().toLocaleString("de-DE", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const currentDate = new Date()
    .toLocaleDateString("de-DE")
    .replaceAll(".", "-");

  return (
    <Main>
      <Heading>Das Beste des Tages.</Heading>
      <CurrentDate>{date}</CurrentDate>
      <StyledLink href="/morning">Frage am Morgen</StyledLink>
      <StyledLink href="/evening">Frage am Abend</StyledLink>
      <StyledLink href={`/answers/${currentDate}`}>Deine Antworten</StyledLink>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  text-align: center;
  margin: 61px 30px 50px;
`;

const CurrentDate = styled.p`
  margin-bottom: 120px;
`;

const StyledLink = styled(Link)`
  margin: 0.5rem;
  padding: 1.2rem;
  background-color: #434343;
  color: #fdfcfb;
  border: none;
  text-decoration: none;
  width: 200px;
  height: 60px;
  text-align: center;
  border-radius: 3px;
`;
