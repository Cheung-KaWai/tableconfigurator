import React, { useContext, useState } from "react";
import { useGLTF } from "@react-three/drei";
import square1 from "../../../assets/models/tables/square1.glb";
import { animated } from "@react-spring/three";

export function Square1({ material, width, length, position }) {
  const { nodes } = useGLTF(square1);
  // [length, 1, width]
  return (
    <animated.mesh
      geometry={nodes.Cube007.geometry}
      material={material}
      scale={[length, 1, width]}
      position={position}
    />
  );
}

useGLTF.preload(square1);
