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
    <div>
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

      {showSnack && (
        <SnackBar
          text={
            "Das hat geklappt! Dein Eintrag ist gespeichert. Du wirst jetzt automatisch zu deinem Journal geleitet."
          }
          onClose={() => {
            router.push(`/answers/${currentDate}`);
          }}
        />
      )}
    </div>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledQuestion = styled.label`
  font-weight: 200;
  font-size: 0.95rem;
  margin-bottom: 12px;
  letter-spacing: 0.02rem;
`;

const StyledTextarea = styled.textarea`
  outline: none;
  padding: 15px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  _background: none;
  _border: 1px solid #7f7f87;
  _border-radius: 6px;
  font-family: Quicksand;
  font-weight: 200;
  font-size: 0.95rem;
  &::placeholder {
    _color: var(--darkgrey);
    color: var(--grey);
    font-size: 0.8rem;
    letter-spacing: 0.01rem;
    _text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
  }
`;

// Gradient BG Colors: #faece0, #fae6e0, #f5e0ce, #fbccc0
const StyledSubmitButton = styled.button`
  margin: 1rem;
  margin-top: 1.5rem;
  padding: 15px 40px;
  _background-color: #434343;
  background-color: var(--darkgrey);
  color: #fbccc0;
  font-weight: 100;
  font-family: Quicksand;
  _color: #fdfcfb;
  _color: var(--darkgrey);
  border: none;
  border-radius: 4px;
  letter-spacing: 0.05rem;
  font-size: 0.9rem;
  text-transform: lowercase;
  box-shadow: 3px 3px 1px hotpink;
  &:hover {
    cursor: pointer;
    background-color: hotpink;
    box-shadow: 3px 3px 1px #4f4f4f;
  }
`;
