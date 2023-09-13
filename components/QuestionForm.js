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
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledQuestion = styled.label`
  margin-bottom: 12px;
  font-size: var(--body-fontsize);
  font-weight: var(--body-fontweight);
  color: var(--text-primary-color);
`;

const StyledTextarea = styled.textarea`
  outline: none;
  
  // NEUER CODE NACH BOOTCAMP
  resize: none;
  // NEUER CODE NACH BOOTCAMP
  padding: 15px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  font-family: Quicksand;
  font-size: var(--body-fontsize);
  font-weight: var(--body-fontweight);
  color: var(--text-primary-color);

  &::placeholder {
    color: var(--text-secondary-color);
    font-size: var(--body-fontsize-small);
    letter-spacing: 0.01rem;
  }
`;

const StyledSubmitButton = styled.button`
  width: 10rem;
  margin-bottom: 0.5rem;
  margin-top: 2rem;
  padding: 15px 40px;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: #fff;
  text-transform: lowercase;
  outline: none;
  border: none;
  border-radius: 5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background: var(--calltoaction-colors-webkit);
  background: var(--calltoaction-colors);
  background-size: 300%;

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
`;
