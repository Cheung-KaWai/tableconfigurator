import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import square1 from "../../assets/models/square1.glb";

export function Square1(props) {
  const { nodes, materials } = useGLTF(square1);
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.round.geometry} material={nodes.round.material} />
    </group>
  );
}

useGLTF.preload(square1);
