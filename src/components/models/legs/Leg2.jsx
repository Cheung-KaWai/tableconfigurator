import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import leg2 from "../../../assets/models/legs/leg2.glb";
import { animated } from "@react-spring/three";

export function Leg2({ position, material }) {
  const { nodes, materials } = useGLTF(leg2);
  return (
    <group position={position} dispose={null}>
      <animated.mesh
        geometry={nodes.Cube001.geometry}
        material={material}
        position={[0, 0.34, 0]}
        rotation={[-Math.PI, Math.PI / 2, Math.PI / 2]}
      />
      <animated.mesh
        geometry={nodes.Cube011.geometry}
        material={material}
        position={[0, 0.379, -0.0015]}
        rotation={[Math.PI, Math.PI / 2, 1.57]}
      />
      <animated.mesh
        geometry={nodes.Cube002.geometry}
        material={material}
        position={[0, 0.79, 0]}
        rotation={[Math.PI, Math.PI / 2, Math.PI]}
      />
      <animated.mesh
        geometry={nodes.Cube012.geometry}
        material={material}
        position={[0, 0.005, 0]}
        rotation={[Math.PI, Math.PI / 2, Math.PI]}
      />
    </group>
  );
}

useGLTF.preload(leg2);
