import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getModel } from "../lib/firebase";
import { Canvas } from "@react-three/fiber";
import { Table } from "../components/canvas/Table";
import { Legs } from "../components/canvas/Legs";
import { TableContext } from "../context/TableContextProvider";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";

export const ArView = () => {
  const { id } = useParams();
  const [glb, setGlb] = useState(null);
  const [loadingDone, setLoadingDone] = useState(false);
  const [error, setError] = useState(null);
  const context = useContext(TableContext);
  const exporter = new GLTFExporter();
  // ?width=0.9&length=2&tableTexture=wood1&currentTable=square&currentLeg=leg1&legTexture=metal3&edge=edge1

  // async function saveArrayBuffer(buffer) {
  //   const data = new Blob([buffer], { type: "application/octet-stream" });
  //   const id = await addData(data);
  //   context.setUrl(id);
  //   context.setComplete(true);
  //   context.setShowLoadingAnimation(false);
  // }

  function save(blob, filename) {
    const link = document.createElement("a");
    link.style.display = "none";
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();

    // URL.revokeObjectURL( url ); breaks Firefox...
  }

  function saveArrayBuffer(buffer) {
    const blob = new Blob([buffer], { type: "application/octet-stream" });
    const url = URL.createObjectURL(blob);
    setGlb(url);
  }

  useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    const width = params.get("width");
    const length = params.get("length");
    const tableTexture = params.get("tableTexture");
    const currentTable = params.get("currentTable");
    const currentLeg = params.get("currentLeg");
    const legTexture = params.get("legTexture");
    const edge = params.get("edge");

    context.setWidth(width);
    context.setLength(length);
    context.setTableTexture(tableTexture);
    context.setcurrentTable(currentTable);
    context.setCurrentLeg(currentLeg);
    context.setLegTexture(legTexture);
    context.setCurrentEdge(edge);

    setTimeout(() => {
      exporter.parse(
        context.testRef.current,
        (glb) => {
          context.setLoadingPhase("Generating QR Code...");
          context.setShowLoadingAnimation(true);
          saveArrayBuffer(glb);
          setLoadingDone(true);
          console.log("hoi hoi");
        },
        (err) => {
          console.log(err);
        },
        { binary: true }
      );
    }, 1000);
  }, []);

  return (
    <Container>
      {loadingDone && (
        <model-viewer src={glb} ar ar-modes="scene-viewer quick-look" camera-controls shadow-intensity="0" exposure="0.3" shadow-softness="1">
          <StartButton slot="ar-button">AR Mode</StartButton>
        </model-viewer>
      )}
      {error && <p>{error}</p>}

      <Canvas>
        <group ref={context.testRef}>
          <Table />
          <Legs />
        </group>
      </Canvas>
    </Container>
  );
};

const StartButton = styled.button`
  position: absolute;
  bottom: 15rem;
  left: 50%;
  transform: translateX(-50%);
  border: none;
  background-color: transparent;
  padding: 1rem 2.5rem;
  color: #42607a;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 1px;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const HiddenContainer = styled.div`
  width: 0;
  height: 0;
`;
