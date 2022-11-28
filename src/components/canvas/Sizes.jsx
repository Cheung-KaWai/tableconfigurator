import { Center, Text3D } from "@react-three/drei";
import React, { Suspense, useContext } from "react";
import font from "../../assets/fonts/Inter_Bold.json";
import { TableContext } from "../../context/TableContextProvider";

export const Sizes = () => {
  const context = useContext(TableContext);
  const length = context.length;
  const width = context.width;

  return (
    <>
      {context.showSize && (
        <Suspense fallback={null}>
          <Center position={[0, 0.85, -width / 2 - 0.05]} rotation={[0, 0, 0]}>
            <Text3D scale={0.05} font={font}>
              {length * 100 + "cm"}
              <meshStandardMaterial color="#fff" envMapIntensity={0.5} />
            </Text3D>
          </Center>
          <Center position={[-length / 2 - 0.05, 0.85, 0]} rotation={[0, Math.PI / 2, 0]}>
            <Text3D scale={0.05} font={font}>
              {width * 100 + "cm"}
              <meshStandardMaterial color="#fff" envMapIntensity={0.3} />
            </Text3D>
          </Center>
          <Center position={[length / 2 + 0.05, 0.4, 0]} rotation={[0, 0, -Math.PI / 2]}>
            <Text3D scale={0.05} font={font}>
              {80 + "cm"}
              <meshStandardMaterial color="#fff" envMapIntensity={0.3} />
            </Text3D>
          </Center>
        </Suspense>
      )}
    </>
  );
};
