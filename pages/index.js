import styled from "styled-components";
import Link from "next/link";

export default function Home() {
  return (
    <Main>
      <Heading>Das Beste des Tages</Heading>
      <StyledLink href="/form-morning">Frage am Morgen</StyledLink>
      <StyledLink href="/form-evening">Frage am Abend</StyledLink>
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
  margin: 2rem;
  margin-bottom: 50%;
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
