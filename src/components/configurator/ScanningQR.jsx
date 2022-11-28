import React, { useContext } from "react";
import styled from "styled-components";
import QRCode from "react-qr-code";
import { TableContext } from "../../context/TableContextProvider";
import { IoCloseOutline } from "react-icons/io5";
import { MutatingDots } from "react-loader-spinner";

export const ScanningQR = () => {
  const context = useContext(TableContext);
  const handleExit = () => {
    context.setLoading(false);
    context.setUrl(null);
    context.setComplete(false);
  };

  return (
    <Container>
      <QRContainer>
        {!context.complete && (
          <LoadingContainer>
            <Loader>{context.loadingPhase}</Loader>
            <MutatingDots
              height="100"
              width="100"
              color="#42607a"
              secondaryColor="#42607a"
              radius="12.5"
              ariaLabel="mutating-dots-loading"
              visible={true}
            />
          </LoadingContainer>
        )}
        {context.complete && (
          <>
            <QRCode
              size={256}
              style={{ height: "auto", width: "50%", height: "auto" }}
              value={"https://tableconfigurator-cheung-kawai.vercel.app"}
              viewBox={`0 0 256 256`}
            />
            <QrDescription>Scan the QR Code to view the table in augmented reality</QrDescription>
            <ExitButton onClick={handleExit} />
          </>
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
  height: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  gap: 4rem;
  position: relative;
  padding-top: 4rem;
`;

const Loader = styled.p`
  text-align: center;
`;

const QrDescription = styled.p`
  padding: 0 2rem;
  text-align: center;
  font-weight: 600;
`;

const ExitButton = styled(IoCloseOutline)`
  width: 3rem;
  height: 3rem;
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    color: red;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
