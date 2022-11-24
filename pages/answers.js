import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function AnswersPage() {
  return (
    <>
      <StyledLink href="/">Home</StyledLink>
      <Heading>Show Answers Page</Heading>
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
  margin: 2rem;
  margin-bottom: 55px;
`;

const StyledLink = styled(Link)`
  display: flex;
  margin: 10px;
  color: black;
`;
