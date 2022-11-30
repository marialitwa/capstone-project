import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function FavoritesPage() {
  return (
    <>
      <StyledLink href="/">Home</StyledLink>
      <Heading>Deine Highlights.</Heading>
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
  font-weight: 200;
  text-decoration: underline;
  text-decoration-color: #764ba2;
  text-decoration-thickness: 0.8rem;
  margin: 1.5rem;
  margin-bottom: 2.5rem;
`;

const StyledLink = styled(Link)`
  display: flex;
  margin: 10px;
  color: black;
`;
