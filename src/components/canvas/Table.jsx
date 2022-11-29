import React, { useContext, useEffect } from "react";
import { MeshStandardMaterial } from "three";
import { textures, testTextures } from "../../assets/js/textures";
import { TableContext } from "../../context/TableContextProvider";
import { useSpring, config } from "@react-spring/three";
import { Outdoor } from "../models/tables/Outdoor";
import { Square1 } from "../models/tables/Square1";
import { Square2 } from "../models/tables/Square2";
import { Square3 } from "../models/tables/Square3";
import { useTexture } from "@react-three/drei";

export const Table = () => {
  const context = useContext(TableContext);
  const currentTexture = context.tableTexture;
  const currentTable = context.currentTable;
  const currentEdge = context.currentEdge;

  const width = context.width;
  const length = context.length;

  const wood1 = new MeshStandardMaterial(textures["Wood1"](width, length));
  const wood2 = new MeshStandardMaterial(textures["Wood2"](width, length));
  const wood3 = new MeshStandardMaterial(textures["Wood3"](width, length));

  const loadedTextures = {
    wood1,
    wood2,
    wood3,
  };

  const material = loadedTextures[currentTexture];

  useEffect(() => {
    context.setLoadingScreen(false);
  }, []);

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
