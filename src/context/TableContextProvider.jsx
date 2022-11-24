import React, { createContext, useState } from "react";
import { textures } from "../assets/js/textures";

export const TableContext = createContext();

export const TableContextProvider = ({ children }) => {
  const [width, setWidth] = useState(0.9);
  const [length, setLength] = useState(2);

  const [currentTable, setcurrentTable] = useState("square");
  const [currentEdge, setCurrentEdge] = useState("edge1");
  const [tableTexture, setTableTexture] = useState("Wood1");

  const [currentLeg, setCurrentLeg] = useState("leg1");
  const [legTexture, setLegTexture] = useState("Metal1");

  const [showSize, setShowSize] = useState(true);

  const [step, setStep] = useState(1);

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
  };

  return <TableContext.Provider value={elements}>{children}</TableContext.Provider>;
};
