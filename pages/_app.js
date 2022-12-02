import GlobalStyles from "../components/GlobalStyles";
import { useLocalStorage } from "../helpers/hooks";

// den LocalStorgae Hook am besten nur mit Arrays oder Objects benutzen. Kann bei Strings Fehler werfen.
function MyApp({ Component, pageProps }) {
  const [morningAnswers, setMorningAnswers] = useLocalStorage(
    "morningAnswers",
    [
      {
        id: "93fddb4b-5cf8-40d0-b18a-3cbf96a8301b",
        text: "Heute Abend das WM-Fußballspiel Deutschland-Spanien zu schauen (auch wenn's beim letzten Spiel nicht so gut lief und die WM in Katar sowieso eine totale Katastrophe ist...)",
        createdDate: "2022-11-27T11:38:27.814Z",
        isFavorite: false,
      },

      {
        id: "7d8ad4b5-08c6-4214-b29a-09aec355904f",
        text: "Ich freue mich heute darauf meinen Code nach der Review weiter zu verbessern und im Austausch zu sein",
        createdDate: "2022-11-28T08:27:49.978Z",
        isFavorite: false,
      },

      {
        id: "8fbbf6d3-d547-4a76-b3a8-198cc046e523",
        text: "Ich freu mich darauf heute Abend wirklich sehr leckeres schwedisches Gebäck im Arket Café dank der ToGoodToGo App abzuholen. Das Gebäck würde man sonst nämlich wegwerfen und dafür ist es einfach viel zu lecker.",
        createdDate: "2022-11-29T09:11:25.632Z",
        isFavorite: false,
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
        isFavorite: false,
      },

      {
        id: "17ff2a87-379a-4b19-958c-15a24cb65ed2",
        text: "Habe gut und ausreichend geschlafen und konnte tagsüber ausgeruht arbeiten.",
        createdDate: "2022-11-27T17:40:40.423Z",
        isFavorite: false,
      },

      {
        id: "44219f41-a977-43c9-aa81-4dcee98ebe6a",
        text: "Das was ich die Tage Neues gelernt habe, konnte ich heute im Team weitergeben und habe zum Lösen kleinerer Probleme helfen können. Und genauso andersherum.",
        createdDate: "2022-11-29T16:22:44.670Z",
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
        // createdDate={morningAnswers.createdDate}
      />
    </>
  );
}

export default MyApp;
