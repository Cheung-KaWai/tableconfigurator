import { Environment, OrbitControls, PerspectiveCamera, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useContext, useRef } from "react";
import { SceneContainer } from "../layouts/SceneContainer";
import { Table } from "./Table";
import { Legs } from "./Legs";
import { Sizes } from "./Sizes";
import { Shadows } from "./Shadows";
import { TableContext } from "../../context/TableContextProvider";

export const Scene = () => {
  const context = useContext(TableContext);

  return (
    <SceneContainer>
      <Canvas shadows={false} gl={{ physicallyCorrectLights: true, decay: 2 }}>
        <OrbitControls makeDefault />
        <PerspectiveCamera position={[0.75, 2.75, 2]} makeDefault />
        <Environment preset="city" />
        <group ref={context.testRef}>
          <Table />
          <Legs />
        </group>
        <Sizes />
        <Shadows />
      </Canvas>
    </SceneContainer>
  );
};
