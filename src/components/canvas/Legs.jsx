import React, { useContext } from "react";
import { MeshStandardMaterial } from "three";
import { textures } from "../../assets/js/textures";
import { TableContext } from "../../context/TableContextProvider";
import { Leg1 } from "../models/legs/Leg1";

export const Legs = () => {
  const context = useContext(TableContext);
  const width = context.width;
  const length = context.length;

  const currentLeg = context.currentLeg;
  const currentLegTexture = context.legTexture;

  const params = textures[currentLegTexture];
  const material = new MeshStandardMaterial(params(width, length));

  switch (currentLeg) {
    case "leg1":
      return (
        <>
          <Leg1 position={[length / 2 - 0.1, 0, 0]} material={material} />
          <Leg1 position={[-length / 2 + 0.1, 0, 0]} material={material} />
        </>
      );
  }
};
