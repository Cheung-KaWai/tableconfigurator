import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import square2 from "../../../assets/models/tables/square2.glb";
import { animated } from "@react-spring/three";

export function Square2({ material, width, length, position }) {
  const { nodes } = useGLTF(square2);
  return (
    <group dispose={null}>
      <animated.mesh
        geometry={nodes.Cube008.geometry}
        material={material}
        scale={[length, 1, width]}
        position={position}
      />
    </group>
  );
}

useGLTF.preload(square2);
