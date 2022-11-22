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
      {context.step !== 1 && <Button onClick={handlePrevious}>Previous</Button>}
      <Button onClick={handleNext}>Next</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

const Button = styled.button`
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
