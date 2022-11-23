import React, { useContext } from "react";
import { useGLTF } from "@react-three/drei";
import square1 from "../../../assets/models/square1.glb";

export function Square1({ material, width, length }) {
  const { nodes } = useGLTF(square1);
  return (
    <group dispose={null}>
      <mesh geometry={nodes.Table1.geometry} material={material} scale={[length, 1, width]} position={[0, 1.63, 0]} />
    </group>
  );
}

useGLTF.preload(square1);
