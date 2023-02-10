import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AnswerCard from "./AnswerCard";

it("renderAnswerCard", () => {
  const toggleFavorite = jest.fn();
  const filteredMorningAnswers = [
    {
      id: "93fddb4b-5cf8-40d0-b18a-3cbf96a8301b",
      text: "Nach der Endspurtwoche konnte ich heute schön ausschlafen und freu mich drauf heute Abend Alicia nach längerer Zeit wiederzusehen.",
      createdDate: "2022-12-10T11:38:27.814Z",
      isFavorite: false,
    },
  ];

  render(
    <AnswerCard
      questionText="Worauf freust du dich im Moment?"
      answerText={filteredMorningAnswers}
      toggleFavorite={toggleFavorite}
    />
  );

  const questionText = screen.getByText("Worauf freust du dich im Moment?");
  const answerText = screen.getByText(/answerText:/i);
  const createdDate = screen.getByText(/createdDate:/i);
  const isFavorite = screen.getByText(/isFavorite:/i);

  expect(questionText).toHaveValue("Worauf freust du dich im Moment?");
  expect(answerText).toHaveValue(
    "Nach der Endspurtwoche konnte ich heute schön ausschlafen und freu mich drauf heute Abend Alicia nach längerer Zeit wiederzusehen."
  );
  expect(createdDate).toHaveValue("2022-12-10T11:38:27.814Z");
  expect(isFavorite).toHaveValue(false);

  //   screen.debug();
});

// describe("AnswerCard", () => {

//     it("renders questionText, answerText, createdDate and id text of an entry", () => {
//         const event = {
//             questionText: "text"
//             answerText={filteredMorningAnswers}
// toggleFavorite={toggleFavorite}
//         }
//     })
// })
