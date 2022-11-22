import React from "react";
import styled from "styled-components";

export const Subheading = ({ children }) => {
  return <SubTitle>{children}</SubTitle>;
};

const SubTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;
