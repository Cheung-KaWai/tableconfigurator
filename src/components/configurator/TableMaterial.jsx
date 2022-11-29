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
        <ImageTexture
          src={textures.previews.wood1}
          selected={context.tableTexture === "wood1"}
          onClick={() => handleTexture("wood1")}
        />
        <ImageTexture
          src={textures.previews.wood2}
          selected={context.tableTexture === "wood2"}
          onClick={() => handleTexture("wood2")}
        />
        <ImageTexture
          src={textures.previews.wood3}
          selected={context.tableTexture === "wood3"}
          onClick={() => handleTexture("wood3")}
        />
      </ImageContainers>
    </>
  );
};

const ImageTexture = styled.img`
  width: 7rem;
  height: 7rem;
  cursor: pointer;
  outline: ${(props) => (props.selected === true ? "3px" : "0px")} solid #212529;
  border-radius: 50%;
  transition: all 0.2s ease-out;
  &:hover {
    outline-width: 3px;
  }
`;

const ImageContainers = styled.div`
  display: flex;
  gap: 2rem;
`;
