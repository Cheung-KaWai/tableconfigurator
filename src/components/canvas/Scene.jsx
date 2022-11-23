import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { SceneContainer } from "../layouts/SceneContainer";
import { Table } from "./Table";
import { Legs } from "./Legs";

export const Scene = () => {
  return (
    <SceneContainer>
      <Canvas shadows={false} gl={{ physicallyCorrectLights: true, decay: 2 }}>
        <OrbitControls makeDefault />
        <Environment preset="city" />
        <Table />
        <Legs />
        <ContactShadows frames={Infinity} position={[0, 0, 0]} opacity={0.5} scale={10} blur={3} far={1.5} />
        <ContactShadows frames={Infinity} position={[0, 0, 0]} opacity={1} scale={2} blur={1} far={0.5} />
      </Canvas>
    </SceneContainer>
  );
};
