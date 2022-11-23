import React from "react";
import styled from "styled-components";
import { textures } from "../../assets/js/textures";
import { ConfigTitle } from "./ConfigTitle";

export const LegsMaterial = () => {
  return (
    <>
      <ConfigTitle>4. Legs material</ConfigTitle>
      <ImageContainers>
        <ImageTexture src={textures.previews.metal1} />
      </ImageContainers>
    </>
  );
};

const ImageTexture = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-out;
  &:hover {
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
  }
`;

const ImageContainers = styled.div`
  display: flex;
  gap: 1rem;
`;
