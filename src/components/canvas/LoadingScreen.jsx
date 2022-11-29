import React, { useContext, useEffect, useState } from "react";
import { MutatingDots } from "react-loader-spinner";
import styled from "styled-components";
import { TableContext } from "../../context/TableContextProvider";

export const LoadingScreen = () => {
  const context = useContext(TableContext);
  const [text, setText] = useState("Loading...");

  return (
    <LoadingScreenContainer show={context.loadingScreen}>
      <LoadingText>{text}</LoadingText>
    </LoadingScreenContainer>
  );
};

const LoadingScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  background-color: black;
  opacity: ${(props) => (props.show ? 1 : 0)};
  color: #fff;
  z-index: ${(props) => (props.show ? 20 : -20)};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-out;
`;

const LoadingText = styled.p``;
