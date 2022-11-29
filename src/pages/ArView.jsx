import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getModel } from "../lib/firebase";

export const ArView = () => {
  const { id } = useParams();
  const [glb, setGlb] = useState(null);
  const [loadingDone, setLoadingDone] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      getModel(id).then((model) => {
        setGlb(model);
        setLoadingDone(true);
        setError(null);
        console.log(model);
      });
    } catch (err) {
      setError(err?.message);
    }
  }, []);

  return (
    <>
      {loadingDone && (
        <model-viewer
          src={glb}
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          shadow-intensity="0"
          exposure="0.3"
          shadow-softness="1"
        >
          <StartButton slot="ar-button">Start</StartButton>
        </model-viewer>
      )}
      {error && <p>{error}</p>}
    </>
  );
};

const StartButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
`;
