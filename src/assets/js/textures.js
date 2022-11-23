import check from "../textures/tables/check.jpg";
import check2 from "../textures/tables/check2.png";

import map1 from "../textures/tables/wood1/Wood051_2K_Color.jpg";
import normal1 from "../textures/tables/wood1/Wood051_2K_NormalDX.jpg";
import roughness1 from "../textures/tables/wood1/Wood051_2K_Roughness.jpg";
import preview1 from "../textures/tables/wood1/Wood051_PREVIEW.jpg";

import map2 from "../textures/tables/wood2/Wood048_2K_Color.jpg";
import normal2 from "../textures/tables/wood2/Wood048_2K_NormalDX.jpg";
import roughness2 from "../textures/tables/wood2/Wood048_2K_Roughness.jpg";
import preview2 from "../textures/tables/wood2/Wood048_PREVIEW.jpg";

import map3 from "../textures/tables/wood3/Wood006_2K_Color.jpg";
import normal3 from "../textures/tables/wood3/Wood006_2K_NormalDX.jpg";
import roughness3 from "../textures/tables/wood3/Wood006_2K_Roughness.jpg";
import preview3 from "../textures/tables/wood3/Wood006_PREVIEW.jpg";

import map4 from "../textures/legs/metal1/Metal028_2K_Color.jpg";
import normal4 from "../textures/legs/metal1/Metal028_2K_NormalDX.jpg";
import roughness4 from "../textures/legs/metal1/Metal028_2K_Roughness.jpg";
import metalness4 from "../textures/legs/metal1/Metal028_2K_Metalness.jpg";
import preview4 from "../textures/legs/metal1/Metal028_PREVIEW.jpg";

import { useTexture } from "@react-three/drei";
import { RepeatWrapping, sRGBEncoding } from "three";

const fixTexture = (texture, width, height) => {
  texture.flipY = false;
  texture.repeat.y = width;
  texture.repeat.x = height;
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.encoding = sRGBEncoding;
};

const Wood1 = (width, height) => {
  const [map, normalMap, roughnessMap] = useTexture([map1, normal1, roughness1]);
  fixTexture(map, width, height);
  fixTexture(normalMap, width, height);
  fixTexture(roughnessMap, width, height);

  const wood = {
    map,
    normalMap,
    roughnessMap,
  };

  return wood;
};

const Wood2 = (width, height) => {
  const [map, normalMap, roughnessMap] = useTexture([map2, normal2, roughness2]);
  fixTexture(map, width, height);
  fixTexture(normalMap, width, height);
  fixTexture(roughnessMap, width, height);

  const wood = {
    map,
    normalMap,
    roughnessMap,
  };

  return wood;
};

const Wood3 = (width, height) => {
  const [map, normalMap, roughnessMap] = useTexture([map3, normal3, roughness3]);
  fixTexture(map, width, height);
  fixTexture(normalMap, width, height);
  fixTexture(roughnessMap, width, height);

  const wood = {
    map,
    normalMap,
    roughnessMap,
  };

  return wood;
};

const Metal1 = (width, height) => {
  const [map, normalMap, roughnessMap, metalnessMap] = useTexture([map3, normal3, roughness3, metalness4]);
  fixTexture(map, width, height);
  fixTexture(normalMap, width, height);
  fixTexture(roughnessMap, width, height);
  fixTexture(metalnessMap, width, height);

  const metal = {
    map,
    normalMap,
    roughnessMap,
    metalnessMap,
  };

  return metal;
};

const previews = {
  wood1: preview1,
  wood2: preview2,
  wood3: preview3,
  metal1: preview4,
};

export const textures = {
  Wood1,
  Wood2,
  Wood3,
  previews,
  Metal1,
};
