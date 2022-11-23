import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import square2 from "../../../assets/models/tables/square2.glb";

export function Square2({ material, width, length }) {
  const { nodes } = useGLTF(square2);
  return (
    <group dispose={null}>
      <mesh geometry={nodes.Cube008.geometry} material={material} scale={[length, 1, width]} position={[0, 0.81, 0]} />
    </group>
  );
}

useGLTF.preload(square2);
