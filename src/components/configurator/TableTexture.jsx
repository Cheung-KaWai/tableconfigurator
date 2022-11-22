import React, { useContext } from "react";
import { TableContext } from "../../context/TableContextProvider";
import { ConfigTitle } from "./ConfigTitle";

export const TableTexture = () => {
  const context = useContext(TableContext);

  const handleTexture = (ev) => {
    context.setTableTexture(ev.target.value);
  };

  return (
    <>
      <ConfigTitle>2. table material</ConfigTitle>
      <button value="check" onClick={handleTexture}>
        test
      </button>
    </>
  );
};
