import Link from "next/link";
import styled from "styled-components";
import { useLocalStorage } from "../helpers/hooks";
import { BsToggle2Off } from "react-icons/bs";
import { BsToggle2On } from "react-icons/bs";

export default function Home() {
  let defaultDark;
  if (typeof window !== "undefined") {
    defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const date = new Date().toLocaleString("de-DE", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const currentDate = new Date()
    .toLocaleDateString("de-DE")
    .replaceAll(".", "-");

  return (
    <div data-theme={theme}>
      <Main>
        <Heading>Das Beste des Tages.</Heading>
        <CurrentDate>{date}</CurrentDate>
        <StyledLink href="/morning">Gedanken am Morgen</StyledLink>
        <StyledLink href="/evening">Gedanken am Abend</StyledLink>
        <StyledLink href={`/answers/${currentDate}`}>Dein Journal</StyledLink>
        <StyledLink href="/favorites">Deine Highlights</StyledLink>
        <button onClick={switchTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </button>
      </Main>
    </div>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: var(--background-animation);
  background-size: 500%;
  animation: gradient-bg-evening 5s ease infinite;
  _color: var(--lightgrey);
  @keyframes gradient-bg-evening {
    0% {
      background-position: 0% 50%;
    }
    25% {
      background-position: 50% 100%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Heading = styled.h1`
  text-align: center;
  margin: 50px 30px 15px;
  font-size: var(--heading-fontsize);
  color: var(--text-primary);
`;

const CurrentDate = styled.p`
  margin-bottom: 50px;
  font-size: var(--date-fontsize);
  font-weight: var(--date-fontweight);
  color: var(--text-primary);
`;

const StyledLink = styled(Link)`
  margin: 0.5rem;
  padding: 2rem;
  color: var(--text-primary);
  border: none;
  text-decoration: none;
  width: 240px;
  height: 90px;
  text-align: center;
  _font-family: Quicksand;
  font-weight: 300;
  font-size: 1rem;

  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.1);
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
