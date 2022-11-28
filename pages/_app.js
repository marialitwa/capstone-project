import GlobalStyles from "../components/GlobalStyles";
import { useLocalStorage } from "../helpers/hooks";

function MyApp({ Component, pageProps }) {
  const [morningAnswers, setMorningAnswers] = useLocalStorage(
    "morningAnswers",
    [
      {
        id: "93fddb4b-5cf8-40d0-b18a-3cbf96a8301b",
        text: "Heute Abend das WM-Fußballspiel Deutschland-Spanien zu schauen (auch wenn's beim letzten Spiel nicht so gut lief und die WM in Katar sowieso eine totale Katastrophe ist...)",
        createdDate: "2022-11-27T11:38:27.814Z",
      },

      {
        id: "7d8ad4b5-08c6-4214-b29a-09aec355904f",
        text: "Ich freue mich heute darauf meinen Code nach der Review weiter zu verbessern und im Austausch zu sein",
        createdDate: "2022-11-28T08:27:49.978Z",
      },
      {
        id: "b2ae7fb9-5e7d-4eea-a89e-7a9dd8114c44",
        text: "Meine user story heute fertig zu bekommen.",
        createdDate: "2022-11-28T10:55:03.347Z",
      },
    ]
  );

  const [eveningAnswers, setEveningAnswers] = useLocalStorage(
    "eveningAnswers",

    [
      {
        id: "ca2e297a-b2e9-4073-84ad-ce142580fcfe",
        text: "Austausch mit meinen Team-KollegInnen darüber, wie wir uns in der aktuellen Situation fühlen. Ein auf und ab...",
        createdDate: "2022-11-25T16:17:26.873Z",
      },

      {
        id: "17ff2a87-379a-4b19-958c-15a24cb65ed2",
        text: "Habe gut und ausreichend geschlafen und konnte tagsüber ausgeruht arbeiten.",
        createdDate: "2022-11-27T17:40:40.423Z",
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
        eveningAnswers={eveningAnswers}
        onAddEveningAnswer={addEveningAnswer}
      />
    </>
  );
}

export default MyApp;
