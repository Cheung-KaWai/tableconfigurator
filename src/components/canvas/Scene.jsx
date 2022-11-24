import { Environment, OrbitControls, PerspectiveCamera, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { SceneContainer } from "../layouts/SceneContainer";
import { Table } from "./Table";
import { Legs } from "./Legs";
import { Sizes } from "./Sizes";
import { Shadows } from "./Shadows";

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
        <Shadows />
      </Canvas>
    </SceneContainer>
  );
};
