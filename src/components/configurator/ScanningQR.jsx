import React, { useContext } from "react";
import styled from "styled-components";
import QRCode from "react-qr-code";
import { TableContext } from "../../context/TableContextProvider";

export const ScanningQR = () => {
  const context = useContext(TableContext);

  return (
    <Container>
      <QRContainer>
        {!context.complete && <Loader>Loading</Loader>}
        {context.complete && (
          <QRCode
            size={256}
            style={{ height: "auto", width: "100%", height: "100%" }}
            value={""}
            viewBox={`0 0 256 256`}
          />
        )}
      </QRContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000000d1;
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QRContainer = styled.div`
  background-color: #fff;
  width: 30rem;
  height: 30rem;
`;

const Loader = styled.p``;
