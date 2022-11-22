import React, { useContext } from "react";
import { TableContext } from "../../context/TableContextProvider";
import { ConfiguratorContainer } from "../layouts/ConfiguratorContainer";
import { Dimensions } from "./Dimensions";
import { Navigation } from "./Navigation";
import { TableTexture } from "./TableTexture";

export const Configurator = () => {
  const context = useContext(TableContext);

  const handleStep = () => {
    switch (context.step) {
      case 1:
        return <Dimensions />;
      case 2:
        return <TableTexture />;
    }
  };

  return (
    <ConfiguratorContainer>
      {handleStep()}
      <Navigation />
    </ConfiguratorContainer>
  );
};
