import { useEffect, useState } from "react";
import styled from "styled-components";

export default function SnackBar({ text, onClose }) {
  const [showSnack, setShowSnack] = useState(true);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setShowSnack(false);
      onClose?.();
    }, 2000);

    return () => clearTimeout(timeoutID);
  }, []);

  return showSnack ? <StyledSnackbar>{text}</StyledSnackbar> : null;
}

const StyledSnackbar = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 0.9rem;
  font-weight: 300;
  background-color: gray;
  color: white;
  padding: 10px 20px;
`;
