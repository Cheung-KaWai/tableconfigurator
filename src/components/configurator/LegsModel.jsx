import React, { useContext } from "react";
import styled from "styled-components";
import { ConfigTitle } from "./ConfigTitle";
import leg1 from "../../assets/images/leg1.jpg";
import leg2 from "../../assets/images/leg2.jpg";
import { TableContext } from "../../context/TableContextProvider";

export const LegsModel = () => {
  const context = useContext(TableContext);
  const handleLeg = (leg) => {
    context.setCurrentLeg(leg);
  };

  return (
    <>
      <ConfigTitle>3. Legs Model</ConfigTitle>
      <ImagesContainer>
        <Image src={leg1} selected={context.currentLeg === "leg1"} onClick={() => handleLeg("leg1")} />
        <Image src={leg2} selected={context.currentLeg === "leg2"} onClick={() => handleLeg("leg2")} />
      </ImagesContainer>
    </>
  );
};

const ImagesContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const Image = styled.img`
  cursor: pointer;
  border: 2px solid #212529;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, ${(props) => (props.selected == true ? 0.1 : 0)});
  border-radius: 0.5rem;
  transition: all 0.2s ease-out;
  &:hover {
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
  }
`;
