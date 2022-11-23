import { ContactShadows, Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { SceneContainer } from "../layouts/SceneContainer";
import { Table } from "./Table";
import { Legs } from "./Legs";
import { Sizes } from "./Sizes";

export const Scene = () => {
  return (
    <SceneContainer>
      <Canvas shadows={false} gl={{ physicallyCorrectLights: true, decay: 2 }}>
        <OrbitControls makeDefault />
        <PerspectiveCamera position={[0.75, 2.75, 2]} makeDefault />
        <Environment preset="city" />
        <Table />
        <Legs />
        <Sizes />
        <ContactShadows frames={Infinity} position={[0, 0, 0]} opacity={0.5} scale={10} blur={3} far={1.5} />
        <ContactShadows frames={Infinity} position={[0, 0, 0]} opacity={1} scale={2} blur={1} far={0.2} />
      </Canvas>
    </SceneContainer>
  );
};
