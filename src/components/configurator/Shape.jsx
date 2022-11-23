import React, { useContext } from "react";
import styled from "styled-components";
import { TableContext } from "../../context/TableContextProvider";
import { ConfigTitle } from "./ConfigTitle";
import { Subheading } from "./Subheading";
import edge1 from "../../assets/images/edge1.jpg";
import edge2 from "../../assets/images/edge2.jpg";
import edge3 from "../../assets/images/edge3.jpg";
import table1 from "../../assets/images/table1.jpg";
import table2 from "../../assets/images/table2.jpg";

export const Shape = () => {
  const context = useContext(TableContext);

  const handleLength = (ev) => {
    const value = ev.target.value;
    if (!value) return;

    context.setLength(value);
  };

  const handleWidth = (ev) => {
    const value = ev.target.value;
    if (!value) return;

    context.setWidth(value);
  };

  const handleEdge = (edge) => {
    context.setCurrentEdge(edge);
  };

  const handleShape = (shape) => {
    context.setcurrentTable(shape);
  };

  return (
    <>
      <ConfigTitle>1. table shape</ConfigTitle>

      <SectionContainer>
        <Subheading>length</Subheading>
        <SectionParameters>
          <Select defaultValue={2} onChange={handleLength}>
            <Option value={1.6}>160 cm</Option>
            <Option value={1.8}>180 cm</Option>
            <Option value={2}>200 cm</Option>
            <Option value={2.2}>220 cm</Option>
            <Option value={2.4}>240 cm</Option>
            <Option value={2.6}>260 cm</Option>
            <Option value={2.8}>280 cm</Option>
            <Option value={3}>300 cm</Option>
          </Select>
        </SectionParameters>
      </SectionContainer>
      <SectionContainer>
        <Subheading>width</Subheading>
        <SectionParameters>
          <Select defaultValue={0.9} onChange={handleWidth}>
            <Option value={0.85}>85 cm</Option>
            <Option value={0.9}>90 cm</Option>
            <Option value={0.95}>95 cm</Option>
          </Select>
        </SectionParameters>
      </SectionContainer>
      <SectionContainer>
        <Subheading>Table Shape</Subheading>
        <ImagesContainer>
          <Image src={table1} selected={context.currentTable === "square"} onClick={() => handleShape("square")} />
          <Image src={table2} selected={context.currentTable === "outdoor"} onClick={() => handleShape("outdoor")} />
        </ImagesContainer>
      </SectionContainer>
      <SectionContainer>
        <Subheading>Edge finish</Subheading>
        <ImagesContainer>
          <Image src={edge1} selected={context.currentEdge === "edge1"} onClick={() => handleEdge("edge1")} />
          {context.currentTable !== "outdoor" && (
            <>
              <Image src={edge2} selected={context.currentEdge === "edge2"} onClick={() => handleEdge("edge2")} />
              <Image src={edge3} selected={context.currentEdge === "edge3"} onClick={() => handleEdge("edge3")} />
            </>
          )}
        </ImagesContainer>
      </SectionContainer>
    </>
  );
};

const SectionContainer = styled.div`
  margin-bottom: 3rem;
`;

const SectionParameters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Select = styled.select`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  width: 100%;
  padding: 1rem;
  transition: all 0.3s ease-out;
  outline: 1px solid transparent;
  border-radius: 3px;
  color: #212529;
  font-weight: 500;
  outline-width: 2px;
  outline-color: #212529;

  box-shadow: 0 0 0 0 rgba(66, 96, 122, 0.3);
  transition: all 0.2s ease-out;
  &:hover {
    box-shadow: 0 0 10px 5px rgba(66, 96, 122, 0.3);
  }
`;

const Option = styled.option``;

const ImagesContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const Image = styled.img`
  cursor: pointer;
  border: 2px solid #212529;
  box-shadow: 0 0 10px 5px rgba(66, 96, 122, ${(props) => (props.selected == true ? 0.3 : 0)});
  border-radius: 0.5rem;
  transition: all 0.2s ease-out;
  &:hover {
    box-shadow: 0 0 10px 5px rgba(66, 96, 122, 0.3);
  }
`;
