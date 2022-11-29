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
        <ImageTexture
          src={textures.previews.metal1}
          selected={context.legTexture === "metal1"}
          onClick={() => handleTexture("metal1")}
        />
        <ImageTexture
          src={textures.previews.metal2}
          selected={context.legTexture === "metal2"}
          onClick={() => handleTexture("metal2")}
        />
        <ImageTexture
          src={textures.previews.metal3}
          selected={context.legTexture === "metal3"}
          onClick={() => handleTexture("metal3")}
        />
      </ImageContainers>
    </>
  );
};

const ImageTexture = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
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
