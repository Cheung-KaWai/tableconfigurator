import { ContactShadows, Environment, OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useContext } from "react";
import { SceneContainer } from "../layouts/SceneContainer";
import { Leg1 } from "../models/legs/Leg1";
import { Square1 } from "../models/Square1";
import { softShadows } from "@react-three/drei";
import { TableContext } from "../../context/TableContextProvider";

softShadows({
  frustum: 3.75,
  size: 0.005,
  near: 9.5,
  samples: 17,
  rings: 11,
});

export const Scene = () => {
  const context = useContext(TableContext);
  const position = context.length;

  return (
    <SceneContainer>
      <Canvas shadows={false} gl={{ physicallyCorrectLights: true, decay: 2 }}>
        <OrbitControls makeDefault />
        <Environment preset="city" />
        <Square1 />
        <Leg1 position={[position - 0.2, 0, 0]} />
        <Leg1 position={[-position + 0.2, 0, 0]} />
        <ContactShadows frames={Infinity} position={[0, 0, 0]} opacity={0.5} scale={10} blur={3} far={2} />
        <ContactShadows frames={Infinity} position={[0, 0, 0]} opacity={0.7} scale={10} blur={0.3} far={1} />
      </Canvas>
    </SceneContainer>
  );
};
