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
  font-size: var(--body-fontsize-small);
  font-weight: 300;
  background-color: rgba(0, 0, 8, 0.66);
  _background-color: var(--accent);
  _background-color: rgba(250, 120, 100, 0.5);
  border-radius: 6px;
  color: #fae6e0;
  _color: #fbccc0;
  _color: #faece0;
  padding: 30px 50px;
  width: 70vw;
  height: 20vh;
  letter-spacing: 0.02rem;
  line-height: 1.1rem;
`;
