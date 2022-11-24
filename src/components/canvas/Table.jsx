import React, { useContext } from "react";
import { MeshStandardMaterial } from "three";
import { textures } from "../../assets/js/textures";
import { TableContext } from "../../context/TableContextProvider";
import { useSpring, config } from "@react-spring/three";
import { Outdoor } from "../models/tables/Outdoor";
import { Square1 } from "../models/tables/Square1";
import { Square2 } from "../models/tables/Square2";
import { Square3 } from "../models/tables/Square3";

export const Table = () => {
  const context = useContext(TableContext);
  const currentTexture = context.tableTexture;
  const currentTable = context.currentTable;
  const currentEdge = context.currentEdge;

  const width = context.width;
  const length = context.length;

  const params = textures[currentTexture];
  const material = new MeshStandardMaterial(params(width, length));

  const { position } = useSpring({ position: context.seperate ? [0, 1.2, 0] : [0, 0.81, 0], config: config.gentle });

  switch (currentTable) {
    case "square": {
      if (currentEdge === "edge1") {
        return <Square1 material={material} length={length} width={width} position={position} />;
      }
      if (currentEdge === "edge2") {
        return <Square2 material={material} length={length} width={width} position={position} />;
      }
      if (currentEdge === "edge3") {
        return <Square3 material={material} length={length} width={width} position={position} />;
      }
    }
    case "outdoor": {
      return <Outdoor material={material} length={length} width={width} position={position} />;
    }
  }
};
