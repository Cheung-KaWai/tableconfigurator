import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useContext, useRef } from "react";
import { SceneContainer } from "../layouts/SceneContainer";
import { Table } from "./Table";
import { Legs } from "./Legs";
import { Sizes } from "./Sizes";
import { Shadows } from "./Shadows";
import { TableContext } from "../../context/TableContextProvider";
import { LoadingScreen } from "./LoadingScreen";
import { Controls } from "./Controls";

export const Scene = () => {
  const context = useContext(TableContext);

  return (
    <SceneContainer>
      <Canvas
        shadows={false}
        gl={{ physicallyCorrectLights: true, decay: 2 }}
        onMouseDown={() => {
          context.setDisableLerp(true);
        }}
        onWheelCapture={() => {
          context.setDisableLerp(true);
        }}
      >
        <Suspense fallback={null}>
          <Controls />
          <Environment preset="city" />
          <group ref={context.testRef}>
            <Table />
            <Legs />
          </group>
          <Sizes />
          <Shadows />
        </Suspense>
      </Canvas>
      <LoadingScreen />
    </SceneContainer>
  );
};
