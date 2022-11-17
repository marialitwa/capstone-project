import { useState } from "react";
import styled from "styled-components";
import SubmitButton from "./SubmitButton";

export default function QuestionCard() {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formElements = event.target.elements;

    // Use setAnswer below here instead of alert like in example of 'React Forms':
    // https://www.w3schools.com/react/showreact.asp?filename=demo2_react_forms_submit
    setAnswer(formElements.morningQuestion.value);

    // formElements.morningQuestion.focus();
    event.target.reset();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <StyledQuestion htmlFor="morning-question">
          Worauf freust du dich heute?
        </StyledQuestion>
        <textarea
          id="morning-question"
          name="morningQuestion"
          placeholder="Beginne zu schreiben..."
          rows="15"
          cols="30"
          maxLength="500"
        ></textarea>
        <SubmitButton />
      </Form>
      <p>{answer}</p>
    </div>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledQuestion = styled.label`
  margin: 1rem;
`;
