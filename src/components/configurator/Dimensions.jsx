import React, { useContext } from "react";
import styled from "styled-components";
import { TableContext } from "../../context/TableContextProvider";

export const Dimensions = () => {
  const context = useContext(TableContext);

  const handleLength = (ev) => {
    const value = ev.target.value;
    if (!value) return;

    context.setLength(value);
  };

  return (
    <SectionContainer onClick={handleLength}>
      <Button value={1.6} length={context.length}>
        160cm
      </Button>
      <Button value={1.8} length={context.length}>
        180cm
      </Button>
      <Button value={2} length={context.length}>
        200cm
      </Button>
      <Button value={2.2} length={context.length}>
        220cm
      </Button>
      <Button value={2.4} length={context.length}>
        240cm
      </Button>
      <Button value={2.6} length={context.length}>
        260cm
      </Button>
      <Button value={2.8} length={context.length}>
        280cm
      </Button>
      <Button value={3} length={context.length}>
        300cm
      </Button>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Button = styled.button`
  height: 3rem;
  padding: 0 1.5rem;
  border: none;
  font-size: 1.4rem;
  font-weight: 600;
  border-radius: 0.3rem;
  background-color: ${(props) => (props.length == props.value ? "#bac8ff" : "#fff")};
  cursor: pointer;
  color: #212529;
`;
