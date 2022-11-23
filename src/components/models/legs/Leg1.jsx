import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import leg1 from "../../../assets/models/legs/leg1.glb";

export function Leg1({ position, material }) {
  const { nodes, materials } = useGLTF(leg1);
  return (
    <group position={position} dispose={null} rotation={[0, Math.PI / 2, 0]}>
      <mesh geometry={nodes.Cube002.geometry} material={material} position={[0, 1.59, 0]} />
      <mesh geometry={nodes.Cube.geometry} material={material} position={[0, 0.81, 0]} />
      <mesh geometry={nodes.Cube001.geometry} material={material} position={[0, 0.02, 0]} />
    </group>
  );
}

useGLTF.preload(leg1);
