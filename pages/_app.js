import GlobalStyles from "../components/GlobalStyles";
import { useLocalStorage } from "../helpers/hooks";

function MyApp({ Component, pageProps }) {
  const [morningAnswers, setMorningAnswers] = useLocalStorage(
    "morningAnswers",

    []
  );

  function addMorningAnswer(answer) {
    setMorningAnswers((previousMorningAnswers) => [
      ...previousMorningAnswers,
      {
        id: crypto.randomUUID(),
        text: answer,
      },
    ]);
  }

  return (
    <>
      <GlobalStyles />
      <Component
        {...pageProps}
        morningAnswers={morningAnswers}
        onAddMorningAnswer={addMorningAnswer}
      />
    </>
  );
}

export default MyApp;
