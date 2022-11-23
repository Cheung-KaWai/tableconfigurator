import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import outdoor from "../../../assets/models/tables/outdoor.glb";

export function Outdoor({ material, width, length }) {
  const { nodes, materials } = useGLTF(outdoor);
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={material}
        scale={[length, 1, width]}
        position={[0, 0.81, 0]}
      />
    </group>
  );
}

useGLTF.preload(outdoor);
