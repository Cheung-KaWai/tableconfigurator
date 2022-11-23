import React, { useContext } from "react";
import styled from "styled-components";
import { TableContext } from "../../context/TableContextProvider";

export const Navigation = () => {
  const context = useContext(TableContext);

  const handlePrevious = () => {
    context.setStep((prev) => prev - 1);
  };
  const handleNext = () => {
    context.setStep((prev) => prev + 1);
  };

  return (
    <Container>
      {context.step !== 1 && <ButtonBack onClick={handlePrevious}>Previous</ButtonBack>}
      {context.step !== 4 && <ButtonNext onClick={handleNext}>Next</ButtonNext>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonBack = styled.button`
  all: unset;
  display: block;
  box-sizing: border-box;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    font-weight: 600;
  }

  &:last-child {
    margin-right: auto;
  }
`;

const ButtonNext = styled.button`
  all: unset;
  display: block;
  box-sizing: border-box;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    font-weight: 600;
  }

  &:last-child {
    margin-left: auto;
  }
`;
