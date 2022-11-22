import React, { useContext } from "react";
import styled from "styled-components";
import { TableContext } from "../../context/TableContextProvider";
import { ConfigTitle } from "./ConfigTitle";
import { Subheading } from "./Subheading";

export const Dimensions = () => {
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

  return (
    <>
      <ConfigTitle>1. table dimensions</ConfigTitle>
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

  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-out;
  &:hover {
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
  }
`;

const Option = styled.option``;
