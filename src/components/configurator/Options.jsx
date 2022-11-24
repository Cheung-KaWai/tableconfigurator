import React, { useContext } from "react";
import styled from "styled-components";
import { CiRuler, CiGrid42, CiBank } from "react-icons/ci";
import { TableContext } from "../../context/TableContextProvider";

export const Options = () => {
  const context = useContext(TableContext);

  return (
    <Container>
      <OptionContainer selected={context.showSize} onClick={() => context.setShowSize((prev) => !prev)}>
        <CiRuler size={32} />
      </OptionContainer>
      <OptionContainer selected={context.seperate} onClick={() => context.setSeperate((prev) => !prev)}>
        <CiGrid42 size={32} />
      </OptionContainer>
      <OptionContainer>
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
