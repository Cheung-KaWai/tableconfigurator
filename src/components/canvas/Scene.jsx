import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { SceneContainer } from "../layouts/SceneContainer";
import { Square1 } from "../models/Square1";

export const Scene = () => {
  return (
    <SceneContainer>
      <Canvas shadows>
        <OrbitControls makeDefault />
        {/* <color attach="background" args={["#70777F"]} /> */}
        <Stage adjustCamera={3}>
          <Square1 />
        </Stage>
      </Canvas>
    </SceneContainer>
  );
};
