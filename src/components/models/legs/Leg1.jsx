import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import leg1 from "../../../assets/models/legs/leg1.glb";

export function Leg1(props) {
  const { nodes, materials } = useGLTF(leg1);
  return (
    <group {...props} dispose={null} rotation={[0, Math.PI / 2, 0]}>
      <mesh geometry={nodes.Cube002.geometry} material={nodes.Cube002.material} position={[0, 1.59, 0]} />
      <mesh geometry={nodes.Cube.geometry} material={nodes.Cube.material} position={[0, 0.81, 0]} />
      <mesh geometry={nodes.Cube001.geometry} material={nodes.Cube001.material} position={[0, 0.02, 0]} />
    </group>
  );
}

useGLTF.preload(leg1);
