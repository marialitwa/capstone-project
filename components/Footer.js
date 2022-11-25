import React from "react";
import styled from "styled-components";

export default function Footer() {
  // const date = new Date().toLocaleString("de-DE", {
  //   weekday: "short",
  //   day: "numeric",
  //   month: "numeric",
  //   year: "numeric",
  // });

  return (
    <StyledFooter>
      {/* {
        id: crypto.randomUUID(),
        text: answer,
        createdDate: new Date(),
      } */}

      <p>Footer with date and Navigation</p>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  border: 2px solid lightpink;
`;
