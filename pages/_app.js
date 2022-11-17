import GlobalStyles from "../components/GlobalStyles";
import { useLocalStorage } from "../helpers/hooks";

function MyApp({ Component, pageProps }) {
  const [answer, setAnswer] = useLocalStorage("morningAnswer", {});

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} answer={answer} setAnswer={setAnswer} />
    </>
  );
}

export default MyApp;
