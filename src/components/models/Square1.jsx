import React, { useContext, useEffect, useRef, useState } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import square1 from "../../assets/models/square1.glb";
import { TableContext } from "../../context/TableContextProvider";
import { MeshStandardMaterial, RepeatWrapping, sRGBEncoding } from "three";
import { textures } from "../../assets/js/textures";

const fixTexture = (texture, width, height) => {
  texture.flipY = false;
  texture.repeat.y = width;
  texture.repeat.x = height;
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.encoding = sRGBEncoding;
  return texture;
};

export function Square1(props) {
  const context = useContext(TableContext);
  const currentTexture = context.tableTexture;

  const width = context.width;
  const height = context.length;

  const wood = textures[currentTexture];
  const map = useTexture(wood?.map);
  const normal = useTexture(wood?.normal);
  const roughness = useTexture(wood?.roughness);
  fixTexture(map, width, height);
  fixTexture(normal, width, height);
  fixTexture(roughness, width, height);

  const material = new MeshStandardMaterial({
    map: map,
    normalMap: normal,
    roughnessMap: roughness,
    roughness: 1,
    metalness: 0,
    envMapIntensity: 0.9,
  });

  const { nodes, materials } = useGLTF(square1);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={material}
        scale={[context.length, 1, context.width]}
      />
    </group>
  );
}

useGLTF.preload(square1);
