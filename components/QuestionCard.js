import { useState } from "react";
import styled from "styled-components";
// import SubmitButton from "./SubmitButton";

export default function QuestionCard() {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setAnswer(event.target.elements.morningquestion.value);
  };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     alert(`The answer you entered was: ${answer}`);
  //   };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="morning-question">Worauf freust du dich heute?</label>
        <textarea
          id="morning-question"
          name="morningquestion"
          placeholder="Beginne zu schreiben..."
          rows="15"
          cols="30"
          maxlength="500"
        ></textarea>
        <button type="submit">Speichern</button>
      </Form>
      <p>{answer}</p>
    </div>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 50vw;
`;
