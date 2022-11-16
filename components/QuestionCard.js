import styled from "styled-components";

export default function QuestionCard() {
  return (
    <div>
      <Form>
        <label for="morning-question">Worauf freust du dich heute?</label>
        <textarea
          id="morning-question"
          name="morning-question"
          placeholder="Beginne zu schreiben..."
          rows="15"
          cols="30"
          maxlength="500"
        ></textarea>
        <button type="submit">Speichern</button>
      </Form>
    </div>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 50vw;
`;
