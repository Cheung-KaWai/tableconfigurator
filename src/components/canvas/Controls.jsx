import React, { useContext } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { TableContext } from "../../context/TableContextProvider";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import { useSpring, animated, config } from "@react-spring/three";

export const Controls = () => {
  const context = useContext(TableContext);

  useFrame((state) => {
    if (!context.disableLerp) {
      const endPosition = new Vector3(...context.camPosition);
      state.camera.position.lerp(endPosition, 0.05);
      state.camera.updateProjectionMatrix();
    }
  });

  return (
    <>
      <OrbitControls makeDefault ref={context.orbitRef} target={[0, 0, 0]} enablePan={false} />
      {/* <AnimatedCamera position={position} makeDefault ref={context.cameraRef} /> */}
      <PerspectiveCamera ref={context.cameraRef} makeDefault position={[0, 5, 0]} />
    </>
  );
};
