import styled from "styled-components";
import Link from "next/link";

export default function Home() {
  return (
    <Main>
      <Heading>Das Beste des Tages</Heading>
      <Link href="/form-morning">Go to morning question</Link>
      <Link href="/form-evening">Go to evening question</Link>
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
`;
