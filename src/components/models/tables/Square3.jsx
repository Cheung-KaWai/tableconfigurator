import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import square2 from "../../../assets/models/tables/square3.glb";
import { animated } from "@react-spring/three";

export function Square3({ material, width, length, position }) {
  const { nodes } = useGLTF(square2);
  return (
    <group dispose={null}>
      <animated.mesh
        geometry={nodes.Cube003.geometry}
        material={material}
        scale={[length, 1, width]}
        position={position}
      />
    </group>
  );
}

useGLTF.preload(square2);
