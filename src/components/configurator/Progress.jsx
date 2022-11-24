import React, { useContext } from "react";
import styled from "styled-components";
import { TableContext } from "../../context/TableContextProvider";

export const Progress = () => {
  const context = useContext(TableContext);
  const percentage = (100 / 4) * context.step;

  return (
    <Progresscontainer>
      <ProgressBar1 />
      <ProgressBar2 step={percentage} />
    </Progresscontainer>
  );
};

const Progresscontainer = styled.div`
  position: relative;
  margin-top: auto;
  margin-bottom: 2rem;
`;

const ProgressBar1 = styled.div`
  width: 100%;
  height: 0.5rem;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
`;
const ProgressBar2 = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  transition: all 0.2s ease-out;
  width: ${(props) => props.step + "%"};
  height: 0.5rem;
  background-color: #42607a;
  border-radius: 10px;
`;
