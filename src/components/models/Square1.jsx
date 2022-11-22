import React, { useContext, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import square1 from "../../assets/models/square1.glb";
import { TableContext } from "../../context/TableContextProvider";

export function Square1(props) {
  const context = useContext(TableContext);

  const { nodes, materials } = useGLTF(square1);

  {
    console.log("hello");
  }

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.round.geometry}
        material={nodes.round.material}
        scale={[context.length, 1, context.width]}
      />
    </group>
  );
}

useGLTF.preload(square1);
