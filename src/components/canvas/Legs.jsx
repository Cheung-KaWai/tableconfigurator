import React, { useContext } from "react";
import { MeshStandardMaterial } from "three";
import { textures } from "../../assets/js/textures";
import { TableContext } from "../../context/TableContextProvider";
import { Leg1 } from "../models/legs/Leg1";
import { Leg2 } from "../models/legs/Leg2";
import { useSpring } from "@react-spring/three";

export const Legs = () => {
  const context = useContext(TableContext);
  const width = context.width;
  const length = context.length;

  const currentLeg = context.currentLeg;
  const currentLegTexture = context.legTexture;

  const metal1 = new MeshStandardMaterial(textures["Metal1"](width, length));
  const metal2 = new MeshStandardMaterial(textures["Metal2"](width, length));
  const metal3 = new MeshStandardMaterial(textures["Metal3"](width, length));

  const loadedTextures = {
    metal1,
    metal2,
    metal3,
  };

  const material = loadedTextures[currentLegTexture];

  switch (currentLeg) {
    case "leg1":
      return (
        <>
          <Leg1 position={[length / 2 - 0.1, 0, 0]} material={material} />
          <Leg1 position={[-length / 2 + 0.1, 0, 0]} material={material} />
        </>
      );
    case "leg2":
      return (
        <>
          <Leg2 position={[length / 2 - 0.1, 0, 0]} material={material} />
          <Leg2 position={[-length / 2 + 0.1, 0, 0]} material={material} />
        </>
      );
  }
};
