import React, { createContext, useState } from "react";
import { textures } from "../assets/js/textures";

export const TableContext = createContext();

export const TableContextProvider = ({ children }) => {
  const [width, setWidth] = useState(0.9);
  const [length, setLength] = useState(2);

  const [step, setStep] = useState(1);
  const [tableTexture, setTableTexture] = useState("wood1");

  const elements = {
    width,
    setWidth,
    length,
    setLength,
    step,
    setStep,
    setTableTexture,
    tableTexture,
  };

  return <TableContext.Provider value={elements}>{children}</TableContext.Provider>;
};
