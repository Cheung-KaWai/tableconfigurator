import React from "react";
import styled from "styled-components";

export const FlexHor = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
`;
