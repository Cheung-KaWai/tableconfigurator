import { Html, useProgress } from "@react-three/drei";
import React from "react";
import styled from "styled-components";

export const LoaderProgress = () => {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return <Html center>{progress.toFixed(2)} % loaded</Html>;
};

const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

const OverlayText = styled.p`
  color: #fff;
`;
