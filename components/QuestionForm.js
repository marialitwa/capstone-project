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
          placeholder="Beginne zu schreiben..."
          rows="20"
          cols="35"
          maxLength="1000"
          required
        ></StyledTextarea>
        <StyledSubmitButton type="submit">Speichern</StyledSubmitButton>
      </Form>

      {showSnack && (
        <SnackBar
          text={
            "Das hat geklappt! Dein Eintrag ist erfolgreich gespeichert. Du wirst jetzt automatisch zu deinem Journal geleitet."
          }
          onClose={() => {
            router.push(`/answers/${currentDate}`);
          }}
        />
      )}
      {/* {!showSnack && <> <h3>Please enter product data</h3></>} */}
      {/* {!showSnack && <> </>} */}
    </div>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSubmitButton = styled.button`
  margin: 1rem;
  margin-top: 1.7rem;
  padding: 12px 18px;
  background-color: #434343;
  color: #fdfcfb;
  border: none;
  border-radius: 3px;
  letter-spacing: 0.05rem;
  font-size: 0.9rem;
`;

const StyledQuestion = styled.label`
  font-weight: 300;
  font-size: 1rem;
  margin-bottom: 0.8rem;
`;

const StyledTextarea = styled.textarea`
  outline: none;
  border: 1px solid #d1d1d1;
  border-radius: 6px;
  padding: 8px;
`;
