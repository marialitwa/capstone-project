import styled from "styled-components";

export default function Home() {
  const week = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
  ];

  const month = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ];
  const current = new Date();

  const date = `${week[current.getDay()]}, ${current.getDate()}. ${
    month[current.getMonth()]
  }`;

  return (
    <Main>
      <Heading>Das Beste des Tages.</Heading>
      <CurrentDate>{date}</CurrentDate>
      <StyledLink href="/morning">Frage am Morgen</StyledLink>
      <StyledLink href="/evening">Frage am Abend</StyledLink>
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

const StyledLink = styled.a`
  margin: 1rem;
  padding: 1.2rem;
  background-color: #434343;
  color: #fdfcfb;
  border: none;
  border-radius: 3px;
  text-decoration: none;
  width: 200px;
  text-align: center;
`;
