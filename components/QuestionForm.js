import styled from "styled-components";
import SnackBar from "./SnackBar";
import { useState } from "react";
import { useRouter } from "next/router";

export default function QuestionForm({ onAddEntry, questionText }) {
  const router = useRouter();

  const [showSnack, setShowSnack] = useState(false);

  const currentDate = new Date()
    .toLocaleDateString("de-DE")
    .replaceAll(".", "-");

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;

    const answer = form.elements.answer.value.trim();

    if (answer === "")
      return alert("Bitte schreibe deine Antwort in das Textfeld");

    onAddEntry(answer);
    form.reset();
    setShowSnack(true);
  }

  return (
    <Main>
      <Form onSubmit={handleSubmit}>
        <StyledQuestion forHtml="answer">{questionText}</StyledQuestion>
        <StyledTextarea
          id="answer"
          name="answer"
          placeholder="Nimm dir Zeit zu reflektieren und schreibe hier deine Gedanken auf ..."
          rows="16"
          cols="34"
          maxLength="1000"
          required
        ></StyledTextarea>
        <StyledSubmitButton type="submit">Speichern</StyledSubmitButton>
      </Form>
      <WrapperSnackbar>
        {showSnack && (
          <SnackBar
            text={
              "Das hat geklappt! Dein Eintrag ist gespeichert. Du wirst jetzt zu deinem Journal weitergeleitet."
            }
            onClose={() => {
              router.push(`/answers/${currentDate}`);
            }}
          />
        )}
      </WrapperSnackbar>
    </Main>
  );
}

const Main = styled.div`
  position: relative;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledQuestion = styled.label`
  font-weight: var(--body-fontweight);
  font-size: var(--body-fontsize);
  margin-bottom: 12px;
`;

const StyledTextarea = styled.textarea`
  outline: none;
  padding: 15px;
  background: rgba(255, 255, 255, 0.2);
  _background: none;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  font-family: Quicksand;
  font-weight: var(--body-fontweight);
  font-size: var(--body-fontsize);
  &::placeholder {
    color: var(--grey);
    font-size: var(--body-fontsize-small);
    letter-spacing: 0.01rem;
    _text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
  }
`;

// Gradient BG Colors: #faece0, #fae6e0, #f5e0ce, #fbccc0
// const StyledSubmitButton = styled.button`
//   margin-bottom: 0.5rem;
//   margin-top: 1.2rem;
//   padding: 15px 40px;
//   background-color: var(--darkgrey);
//   _background-color: #434343;
//   font-weight: 100;
//   font-family: Quicksand;
//   color: #faece0;
//   _color: #fbccc0;
//   _color: #fdfcfb;
//   _color: var(--darkgrey);
//   border: none;
//   border-radius: 6px;
//   letter-spacing: 0.05rem;
//   font-size: 0.9rem;
//   text-transform: lowercase;
//   box-shadow: 3px 3px 1px #ff3870;
//   &:hover {
//     cursor: pointer;
//     background-color: #ff3870;
//     box-shadow: 3px 3px 1px #4f4f4f;
//   }
// `;

//button color palette
// $green: #a2ccb6
// $light-peach: #ffecd9
// $peach: #ee786e
// lighter peach: #ed928a
// $sand: #fceeb5
// sand darker: #f3e5ad;
// $white: #fff
// light-yellow: #fff3c1

const StyledSubmitButton = styled.button`
  _height: 2rem;
  width: 10rem;
  margin-bottom: 0.5rem;
  margin-top: 1.2rem;
  _margin-top: 4rem;
  padding: 15px 40px;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  text-transform: lowercase;
  color: #fff;
  outline: none;
  border: none;
  border-radius: 110px;
  _border-radius: 5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-appearance: none;
  background: -webkit-gradient(to right, #ed928a 0%, #f3e5ad 50%, #ed928a 100%);
  background: linear-gradient(to right, #ed928a 0%, #f3e5ad 50%, #ed928a 100%);
  background-size: 500%;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    animation-name: gradient;
    -webkit-animation-name: gradient;
    animation-duration: 2s;
    -webkit-animation-duration: s;
    animation-iteration-count: 1;
    -webkit-animation-iteration-count: 1;
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100%;
    }
  }
`;

const WrapperSnackbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: absolute;
  left: 57px;
  top: 120px;
  _top: 440px;
`;
