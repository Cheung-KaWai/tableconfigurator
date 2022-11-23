import React, { useContext } from "react";
import styled from "styled-components";
import { TableContext } from "../../context/TableContextProvider";
import { ConfigTitle } from "./ConfigTitle";
import { textures } from "../../assets/js/textures";

export const TableMaterial = () => {
  const context = useContext(TableContext);

  const handleTexture = (wood) => {
    context.setTableTexture(wood);
  };

  return (
    <>
      <ConfigTitle>2. table material</ConfigTitle>
      <ImageContainers>
        <ImageTexture src={textures.previews.wood1} onClick={() => handleTexture("Wood1")} />
        <ImageTexture src={textures.previews.wood2} onClick={() => handleTexture("Wood2")} />
        <ImageTexture src={textures.previews.wood3} onClick={() => handleTexture("Wood3")} />
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
