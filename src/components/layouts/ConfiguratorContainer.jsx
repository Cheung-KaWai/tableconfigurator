import React from "react";
import styled from "styled-components";

export const ConfiguratorContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  width: 30vw;
  min-height: 100vh;
  padding: 3rem;
  border-left: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
`;
