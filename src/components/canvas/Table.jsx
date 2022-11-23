import React, { useContext } from "react";
import { MeshStandardMaterial } from "three";
import { textures } from "../../assets/js/textures";
import { TableContext } from "../../context/TableContextProvider";
import { Square1 } from "../models/Square1";

export const Table = () => {
  const context = useContext(TableContext);
  const currentTexture = context.tableTexture;
  const currentTable = context.currentTable;

  const width = context.width;
  const length = context.length;

  const params = textures[currentTexture];
  const material = new MeshStandardMaterial(params(width, length));

  switch (currentTable) {
    case "square1":
      return <Square1 material={material} length={length} width={width} />;
  }
};
