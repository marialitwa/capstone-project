import styled from "styled-components";

export default function QuestionForm({ onAddEntry, questionText }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;

    const answer = form.elements.answer.value.trim();

    if (answer === "")
      return alert("Bitte schreibe deine Antwort in das Textfeld");

    onAddEntry(answer);
    // router.push / answers setVariante
    form.reset();
  }

  return (
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
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSubmitButton = styled.button`
  margin: 2rem;
  padding: 12px 18px;
  background-color: #434343;
  color: #fdfcfb;
  border: none;
  border-radius: 3px;
  _font-weight: 300px;
  letter-spacing: 0.05rem;
  font-size: 0.9rem;
  _text-transform: uppercase;
`;

const StyledQuestion = styled.label`
  font-weight: 300;
  font-size: 1rem;
  margin-bottom: 0.8rem;
`;

const StyledTextarea = styled.textarea`
  outline: none;
  border: 1px solid #d1d1d1;
`;
