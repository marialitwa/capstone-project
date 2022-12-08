import { useEffect, useState } from "react";
import styled from "styled-components";

export default function SnackBar({ text, onClose }) {
  const [showSnack, setShowSnack] = useState(true);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setShowSnack(false);
      onClose?.();
    }, 100000);

    return () => clearTimeout(timeoutID);
  }, []);

  return showSnack ? <StyledSnackbar>{text}</StyledSnackbar> : null;
}

const StyledSnackbar = styled.p`
  text-align: center;
  font-size: var(--body-fontsize-small);
  font-weight: 300;
  background-color: rgba(0, 0, 8, 0.66);
  border-radius: 6px;
  color: var(--snackbar-font-color);
  padding: 30px 50px;
  width: 70vw;
  height: 20vh;
  letter-spacing: 0.02rem;
  line-height: 1.1rem;
`;
