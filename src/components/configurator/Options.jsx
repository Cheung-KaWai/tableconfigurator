import React, { useContext } from "react";
import styled from "styled-components";
import { CiRuler } from "react-icons/ci";
import { TableContext } from "../../context/TableContextProvider";

export const Options = () => {
  const context = useContext(TableContext);

  return (
    <OptionContainer selected={context.showSize} onClick={() => context.setShowSize((prev) => !prev)}>
      <CiRuler size={32} />
    </OptionContainer>
  );
};

const OptionContainer = styled.div`
  position: absolute;
  z-index: 10;
  left: 5rem;
  top: 50%;
  background-color: ${(props) => (props.selected ? "#e9ecef" : "#fff")};
  border: 1px solid #adb5bd;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;
