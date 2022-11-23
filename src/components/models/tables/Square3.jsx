import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import square2 from "../../../assets/models/tables/square3.glb";

export function Square3({ material, width, length }) {
  const { nodes } = useGLTF(square2);
  return (
    <group dispose={null}>
      <mesh geometry={nodes.Cube003.geometry} material={material} scale={[length, 1, width]} position={[0, 0.81, 0]} />
    </group>
  );
}

useGLTF.preload(square2);
