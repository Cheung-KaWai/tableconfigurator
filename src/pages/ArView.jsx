import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getModel } from "../lib/firebase";
import square1 from "../assets/models/tables/square1.glb";

export const ArView = () => {
  const { id } = useParams();
  const [glb, setGlb] = useState(null);
  const [loadingDone, setLoadingDone] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      getModel(id).then((model) => {
        // setGlb(model);
        // fetch(model).then((test) => {
        //   console.log(test);
        //   console.log(model);
        // });
        // const test = new File([model], "table.glb");
        // console.log(test);
        // setGlb(test);
        // setLoadingDone(true);
        // setError(null);
        console.log(square1);
      });
    } catch (err) {
      setError(err?.message);
    }
  }, []);

  return (
    <>
      {loadingDone && (
        <model-viewer alt="table" src={square1} camera-controls touch-action="pan-y" exposure="0.2"></model-viewer>
      )}
      {error && <p>{error}</p>}
    </>
  );
};

{
  /* <model-viewer
src={glb}
ar
ar-modes="webxr scene-viewer quick-look"
camera-controls
shadow-intensity="0"
exposure="0.61"
shadow-softness="1"
environment-image="whipple_creek_regional_park_04_1k.hdr"
></model-viewer> */
}
