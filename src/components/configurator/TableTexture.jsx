import React, { useContext } from "react";
import styled from "styled-components";
import { TableContext } from "../../context/TableContextProvider";
import { ConfigTitle } from "./ConfigTitle";
import { textures } from "../../assets/js/textures";

export const TableTexture = () => {
  const context = useContext(TableContext);

  const handleTexture = (wood) => {
    context.setTableTexture(wood);
  };

  return (
    <>
      <ConfigTitle>2. table material</ConfigTitle>
      <ImageContainers>
        <ImageTexture src={textures.wood1.preview} onClick={() => handleTexture("wood1")} />
        <ImageTexture src={textures.wood2.preview} onClick={() => handleTexture("wood2")} />
        <ImageTexture src={textures.wood3.preview} onClick={() => handleTexture("wood3")} />
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
