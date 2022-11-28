import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import outdoor from "../../../assets/models/tables/outdoor.glb";
import { animated } from "@react-spring/three";

export function Outdoor({ material, width, length, position }) {
  const { nodes, materials } = useGLTF(outdoor);
  return (
    <animated.mesh
      geometry={nodes.Cube014.geometry}
      material={material}
      scale={[length, 1, width]}
      position={position}
    />
  );
}

useGLTF.preload(outdoor);
