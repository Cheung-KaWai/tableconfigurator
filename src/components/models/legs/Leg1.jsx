import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import leg1 from "../../../assets/models/legs/leg1.glb";
import { animated } from "@react-spring/three";

export function Leg1({ position, material }) {
  const { nodes, materials } = useGLTF(leg1);
  return (
    <group position={position} dispose={null} rotation={[0, Math.PI / 2, 0]}>
      <animated.mesh geometry={nodes.Cube006.geometry} material={material} position={[0, 0.79, 0]} />
      <animated.mesh geometry={nodes.Cube004.geometry} material={material} position={[0, 0.4, 0]} />
      <animated.mesh geometry={nodes.Cube005.geometry} material={material} position={[0, 0.01, 0]} />
    </group>
  );
}

useGLTF.preload(leg1);
