import { useEffect, useState } from "react";
import styled from "styled-components";

export default function SnackBar({ text, onClose }) {
  const [showSnack, setShowSnack] = useState(true);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setShowSnack(false);
      onClose?.();
    }, 3000);

    return () => clearTimeout(timeoutID);
  }, []);

  return showSnack ? <StyledSnackbar>{text}</StyledSnackbar> : null;
}

const StyledSnackbar = styled.p`
  text-align: center;
  font-size: 0.9rem;
  font-weight: 400;
  background-color: rgba(118, 75, 162, 0.5);
  border-radius: 5px;
  color: white;
  padding: 10px 20px;
`;
