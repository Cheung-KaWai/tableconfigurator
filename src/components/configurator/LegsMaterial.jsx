import React, { useContext } from "react";
import styled from "styled-components";
import { textures } from "../../assets/js/textures";
import { TableContext } from "../../context/TableContextProvider";
import { ConfigTitle } from "./ConfigTitle";

export const LegsMaterial = () => {
  const context = useContext(TableContext);

  const handleTexture = (metal) => {
    context.setLegTexture(metal);
  };

  return (
    <>
      <ConfigTitle>4. Legs material</ConfigTitle>
      <ImageContainers>
        <ImageTexture src={textures.previews.metal1} onClick={() => handleTexture("Metal1")} />
        <ImageTexture src={textures.previews.metal2} onClick={() => handleTexture("Metal2")} />
        <ImageTexture src={textures.previews.metal3} onClick={() => handleTexture("Metal3")} />
      </ImageContainers>
    </>
  );
};

const ImageTexture = styled.img`
  width: 7rem;
  height: 7rem;
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
