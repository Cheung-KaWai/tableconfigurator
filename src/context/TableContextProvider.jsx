import React, { createContext, useRef, useState } from "react";
import { textures } from "../assets/js/textures";

export const TableContext = createContext();

export const TableContextProvider = ({ children }) => {
  const [width, setWidth] = useState(0.9);
  const [length, setLength] = useState(2);

  const [currentTable, setcurrentTable] = useState("square");
  const [currentEdge, setCurrentEdge] = useState("edge1");
  const [tableTexture, setTableTexture] = useState("wood1");

  const [currentLeg, setCurrentLeg] = useState("leg1");
  const [legTexture, setLegTexture] = useState("metal3");

  const [showSize, setShowSize] = useState(false);
  const [seperate, setSeperate] = useState(false);

  const testRef = useRef();
  const cameraRef = useRef();
  const orbitRef = useRef();

  const [camPosition, setCamPosition] = useState([0, 2, 2]);
  const [camRotation, setCamRotation] = useState([-1.23, -0.71, -1.07]);
  const [disableLerp, setDisableLerp] = useState(false);

  const [step, setStep] = useState(1);

  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);
  const [url, setUrl] = useState(null);
  const [loadingPhase, setLoadingPhase] = useState("Exporting model...");
  const [showLoadingAnimation, setShowLoadingAnimation] = useState(false);
  const [loadingScreen, setLoadingScreen] = useState(true);

  const elements = {
    width,
    setWidth,
    length,
    setLength,
    step,
    setStep,
    setTableTexture,
    tableTexture,
    setcurrentTable,
    currentTable,
    setCurrentLeg,
    currentLeg,
    setLegTexture,
    legTexture,
    setCurrentEdge,
    currentEdge,
    showSize,
    setShowSize,
    setSeperate,
    seperate,
    testRef,
    setLoading,
    loading,
    complete,
    setComplete,
    setUrl,
    url,
    setLoadingPhase,
    loadingPhase,
    setShowLoadingAnimation,
    showLoadingAnimation,
    setLoadingScreen,
    loadingScreen,
    cameraRef,
    orbitRef,
    setCamPosition,
    camPosition,
    setCamRotation,
    camRotation,
    setDisableLerp,
    disableLerp,
  };

  return <TableContext.Provider value={elements}>{children}</TableContext.Provider>;
};
