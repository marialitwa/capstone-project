import styled from "styled-components";

export default function QuestionForm({ onAddEntry }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const answer = form.elements.answer.value;

    onAddEntry(answer);

    form.reset();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <StyledQuestion htmlFor="answer">
        Worauf freust du dich heute?
      </StyledQuestion>
      <textarea
        id="answer"
        name="answer"
        placeholder="Beginne zu schreiben..."
        rows="15"
        cols="30"
        maxLength="500"
        required
      ></textarea>
      <StyledSubmitButton type="submit">Speichern</StyledSubmitButton>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledQuestion = styled.label`
  margin: 1rem;
`;

const StyledSubmitButton = styled.button`
  margin: 1rem;
  padding: 8px 12px;
  background-color: #434343;
  color: #fdfcfb;
  border: none;
  border-radius: 3px;
`;
