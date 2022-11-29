import React from "react";
import { ContactShadows } from "@react-three/drei";

export const Shadows = () => {
  return (
    <>
      <ContactShadows frames={Infinity} position={[0, 0, 0]} opacity={1} scale={10} blur={3} far={1.5} />
      <ContactShadows frames={Infinity} position={[0, 0, 0]} opacity={1} scale={3} blur={1} far={0.25} />
    </>
  );
};
