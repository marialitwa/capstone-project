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

      <StyledLink href="/morning">Gedanken am Morgen</StyledLink>
      <StyledLink href="/evening">Gedanken am Abend</StyledLink>

      <StyledLink href={`/answers/${currentDate}`}>Dein Journal</StyledLink>
      <StyledLink href="/favorites">Deine Highlights</StyledLink>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Heading = styled.h1`
  text-align: center;
  margin: 50px 30px 15px;
  font-size: var(--heading-fontsize);
`;

const CurrentDate = styled.p`
  margin-bottom: 50px;
  font-size: var(--date-fontsize);
  font-weight: var(--date-fontweight);
`;

const StyledLink = styled(Link)`
  margin: 0.5rem;
  padding: 2rem;
  color: var(--darkgrey);
  border: none;
  text-decoration: none;
  width: 240px;
  height: 90px;
  text-align: center;
  font-family: Quicksand;
  font-weight: 300;
  font-size: 1rem;

  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  &:hover {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

// const StyledLink = styled(Link)`
//   margin: 0.5rem;
//   padding: 1.2rem;
//   background-color: #434343;
//   color: #fdfcfb;
//   border: none;
//   text-decoration: none;
//   width: 200px;
//   height: 60px;
//   text-align: center;
//   border-radius: 5px;
// `;
