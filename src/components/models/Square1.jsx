import React, { useContext, useEffect, useRef, useState } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import square1 from "../../assets/models/square1.glb";
import { TableContext } from "../../context/TableContextProvider";
import { MeshStandardMaterial, RepeatWrapping, sRGBEncoding } from "three";
import { textures } from "../../assets/js/textures";

export function Square1(props) {
  const context = useContext(TableContext);
  const texture = useTexture(textures[context.tableTexture]);

  texture.repeat.y = context.width;
  texture.repeat.x = context.length;
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.encoding = sRGBEncoding;

  const material = new MeshStandardMaterial({
    map: texture,
  });

  useEffect(() => {}, [context.tableTexture]);

  const { nodes, materials } = useGLTF(square1);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.round.geometry}
        material={material}
        scale={[context.length, 1, context.width]}
      />
    </group>
  );
}

useGLTF.preload(square1);
