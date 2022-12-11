import GlobalStyles from "../components/GlobalStyles";
import { useLocalStorage } from "../helpers/hooks";

function MyApp({ Component, pageProps }) {
  const [morningAnswers, setMorningAnswers] = useLocalStorage(
    "morningAnswers",
    [
      {
        id: "93fddb4b-5cf8-40d0-b18a-3cbf96a8301b",
        text: "Nach der Endspurtwoche konnte ich heute schön ausschlafen und freu mich drauf heute Abend Alicia nach längerer Zeit wiederzusehen.",
        createdDate: "2022-12-10T11:38:27.814Z",
        isFavorite: false,
      },
    ]
  );

  const [eveningAnswers, setEveningAnswers] = useLocalStorage(
    "eveningAnswers",

    [
      {
        id: "ca2e297a-b2e9-4073-84ad-ce142580fcfe",
        text: "War heute Abend nach 3 Monaten Pause wieder im wunderschönsten Yogastudio bei mir ums Eck, es geht mir richtig richtig gut jetzt danach. Freu mich sehr darauf wieder Zeit für Sport, Yoga und Tanzen zu haben!",
        createdDate: "2022-12-09T21:17:26.873Z",
        isFavorite: false,
      },

      {
        id: "17ff2a87-379a-4b19-958c-15a24cb65ed2",
        text: "War echt schön Alicia wiederzusehen, hatten uns viel zu erzählen...",
        createdDate: "2022-12-10T21:40:40.423Z",
        isFavorite: false,
      },
    ]
  );

  function addMorningAnswer(answer) {
    setMorningAnswers((previousMorningAnswers) => [
      ...previousMorningAnswers,
      {
        id: crypto.randomUUID(),
        text: answer,
        createdDate: new Date(),
        isFavorite: false,
      },
    ]);
  }

  function addEveningAnswer(answer) {
    setEveningAnswers((previousEveningAnswers) => [
      ...previousEveningAnswers,
      {
        id: crypto.randomUUID(),
        text: answer,
        createdDate: new Date(),
        isFavorite: false,
      },
    ]);
  }

  function toggleFavorite(id) {
    const newMorningAnswerArray = morningAnswers.map((answer) => {
      if (answer.id === id) {
        return {
          ...answer,
          isFavorite: !answer.isFavorite,
        };
      } else {
        return answer;
      }
    });
    const newEveningAnswerArray = eveningAnswers.map((answer) => {
      if (answer.id === id) {
        return {
          ...answer,
          isFavorite: !answer.isFavorite,
        };
      } else {
        return answer;
      }
    });

    setEveningAnswers(newEveningAnswerArray);
    setMorningAnswers(newMorningAnswerArray);
  }

  return (
    <>
      <GlobalStyles />
      <Component
        {...pageProps}
        morningAnswers={morningAnswers}
        onAddMorningAnswer={addMorningAnswer}
        eveningAnswers={eveningAnswers}
        onAddEveningAnswer={addEveningAnswer}
        toggleFavorite={toggleFavorite}
      />
    </>
  );
}

export default MyApp;
