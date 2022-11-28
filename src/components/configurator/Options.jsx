import React, { useContext } from "react";
import styled from "styled-components";
import { CiRuler, CiGrid42, CiBank } from "react-icons/ci";
import { TableContext } from "../../context/TableContextProvider";
import { GLTFExporter } from "../../../node_modules/three/examples/jsm/exporters/GLTFExporter";

export const Options = () => {
  const context = useContext(TableContext);
  const exporter = new GLTFExporter();

  function saveArrayBuffer(buffer) {
    const data = new Blob([buffer], { type: "application/octet-stream" });
    console.log(data);
  }

  // function save(blob, filename) {
  //   const link = document.createElement("a");
  //   link.href = URL.createObjectURL(blob);
  //   link.download = filename;
  //   link.click();

  //   // URL.revokeObjectURL( url ); breaks Firefox...
  // }

  const handleExport = () => {
    exporter.parse(
      [context.testRef.current],
      (glb) => {
        saveArrayBuffer(glb);
      },
      (err) => {
        console.log(err);
      },
      { binary: true }
    );
  };

  return (
    <Container>
      <OptionContainer selected={context.showSize} onClick={() => context.setShowSize((prev) => !prev)}>
        <CiRuler size={32} />
      </OptionContainer>
      <OptionContainer selected={context.seperate} onClick={() => context.setSeperate((prev) => !prev)}>
        <CiGrid42 size={32} />
      </OptionContainer>
      <OptionContainer onClick={handleExport}>
        <CiBank size={32} />
      </OptionContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  z-index: 10;
  left: 5rem;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const OptionContainer = styled.div`
  background-color: ${(props) => (props.selected ? "#e9ecef" : "#fff")};
  border: 1px solid #adb5bd;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;

  cursor: pointer;
`;
