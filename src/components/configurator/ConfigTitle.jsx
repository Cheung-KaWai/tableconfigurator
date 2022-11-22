import React from "react";
import styled from "styled-components";

export const ConfigTitle = ({ children }) => {
  return <Title>{children}</Title>;
};

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 5rem;
`;
