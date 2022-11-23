import React, { useContext } from "react";
import { TableContext } from "../../context/TableContextProvider";
import { ConfiguratorContainer } from "../layouts/ConfiguratorContainer";
import { Dimensions } from "./Dimensions";
import { LegsMaterial } from "./LegsMaterial";
import { LegsModel } from "./LegsModel";
import { Navigation } from "./Navigation";
import { TableMaterial } from "./TableMaterial";

export const Configurator = () => {
  const context = useContext(TableContext);

  const handleStep = () => {
    switch (context.step) {
      case 1:
        return <Dimensions />;
      case 2:
        return <TableMaterial />;
      case 3:
        return <LegsModel />;
      case 4:
        return <LegsMaterial />;
    }
  };

  return (
    <ConfiguratorContainer>
      {handleStep()}
      <Navigation />
    </ConfiguratorContainer>
  );
};
