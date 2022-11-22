import React, { createContext, useState } from "react";

export const TableContext = createContext();

export const TableContextProvider = ({ children }) => {
  const [width, setWidth] = useState(0.9);
  const [length, setLength] = useState(2);

  const [step, setStep] = useState(1);
  const [tableTexture, setTableTexture] = useState("check");

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
