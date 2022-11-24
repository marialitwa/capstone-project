import React from "react";
import styled from "styled-components";

export default function Footer({ date }) {
  console.log(date);
  return (
    <StyledFooter>
      <p>{`Footer with ${date} and Navigation`}</p>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  border: 2px solid lightpink;
`;
