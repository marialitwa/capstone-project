import styled from "styled-components";

export default function SubmitButton() {
  return (
    <>
      <StyledSubmitButton type="submit">Speichern</StyledSubmitButton>
    </>
  );
}

const StyledSubmitButton = styled.button`
  margin: 1rem;
  padding: 8px 12px;
  background-color: #434343;
  color: #fdfcfb;
  border: none;
  border-radius: 3px;
`;
