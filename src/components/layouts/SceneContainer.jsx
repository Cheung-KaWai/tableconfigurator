import React from "react";
import styled from "styled-components";

export const SceneContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  width: 70vw;
  height: 100vh;
`;
