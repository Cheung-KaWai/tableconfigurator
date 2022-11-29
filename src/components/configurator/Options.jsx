import React, { useContext } from "react";
import styled from "styled-components";
import { CiRuler, CiGrid42, CiBank, CiMobile4 } from "react-icons/ci";
import { TableContext } from "../../context/TableContextProvider";
import { GLTFExporter } from "../../../node_modules/three/examples/jsm/exporters/GLTFExporter";
import { addData } from "../../lib/firebase";

export const Options = () => {
  const context = useContext(TableContext);
  const exporter = new GLTFExporter();

  async function saveArrayBuffer(buffer) {
    const data = new Blob([buffer], { type: "application/octet-stream" });
    const id = await addData(data);
    context.setUrl(id);
    context.setComplete(true);
    context.setShowLoadingAnimation(false);
  }

  // function save(blob, filename) {
  //   const link = document.createElement("a");
  //   link.href = URL.createObjectURL(blob);
  //   link.download = filename;
  //   link.click();

  //   // URL.revokeObjectURL( url ); breaks Firefox...
  // }

  const handleExport = () => {
    context.setSeperate(false);
    context.setLoading(true);
    context.setComplete(false);

    setTimeout(() => {
      exporter.parse(
        context.testRef.current,
        (glb) => {
          context.setLoadingPhase("Generating QR Code...");
          context.setShowLoadingAnimation(true);
          saveArrayBuffer(glb);
        },
        (err) => {
          console.log(err);
        },
        { binary: true }
      );
    }, 1000);
  };

  return (
    <Container>
      <OptionContainer
        selected={context.showSize}
        onClick={() => context.setShowSize((prev) => !prev)}
        icon={"Show sizes"}
      >
        <CiRuler size={32} />
      </OptionContainer>
      <OptionContainer
        selected={context.seperate}
        onClick={() => context.setSeperate((prev) => !prev)}
        icon={"Seperate parts"}
      >
        <CiGrid42 size={32} />
      </OptionContainer>
      <OptionContainer onClick={handleExport} icon={"View in AR"}>
        <CiMobile4 size={32} />
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

  &:hover::after {
    opacity: 1;
  }

  &::after {
    content: "${(props) => props.icon}";
    width: 12rem;
    display: block;
    position: absolute;
    right: 5px;
    padding: 1.5rem;
    transform: translateX(100%);
    opacity: 0;
    transition: all 0.3s ease-out;
  }
`;
