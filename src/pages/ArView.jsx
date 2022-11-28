import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getModel } from "../lib/firebase";

export const ArView = () => {
  const { id } = useParams();
  const [glb, setGlb] = useState(null);
  const [loadingDone, setLoadingDone] = useState(false);

  useEffect(() => {
    getModel(id).then((model) => {
      setGlb(glb);
      setLoadingDone(true);
      console.log(model);
    });
  }, []);

  return (
    <>
      {loadingDone && (
        <model-viewer
          src={glb}
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          poster="poster.webp"
          shadow-intensity="0"
          exposure="0.61"
          shadow-softness="1"
          environment-image="whipple_creek_regional_park_04_1k.hdr"
        ></model-viewer>
      )}
    </>
  );
};
