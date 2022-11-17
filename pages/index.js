import styled from "styled-components";
import QuestionCard from "../components/QuestionCard";
import Title from "../components/Title";

export default function Home() {
  return (
    <>
      <Main>
        <Title />
        <QuestionCard />
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
