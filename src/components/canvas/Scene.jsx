import { Environment, OrbitControls, PerspectiveCamera, useProgress, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useContext, useRef } from "react";
import { SceneContainer } from "../layouts/SceneContainer";
import { Table } from "./Table";
import { Legs } from "./Legs";
import { Sizes } from "./Sizes";
import { Shadows } from "./Shadows";
import { TableContext } from "../../context/TableContextProvider";
import { LoaderProgress } from "../configurator/LoaderProgress";
import { LoadingScreen } from "./LoadingScreen";

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();

  return (
    <Html center wrapperClass="test">
      {progress.toFixed(2)} % loaded
    </Html>
  );
}

export const Scene = () => {
  const context = useContext(TableContext);

  return (
    <SceneContainer>
      <Canvas shadows={false} gl={{ physicallyCorrectLights: true, decay: 2 }}>
        <Suspense fallback={null}>
          <OrbitControls makeDefault />
          <PerspectiveCamera position={[0.75, 2.75, 2]} makeDefault />
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
