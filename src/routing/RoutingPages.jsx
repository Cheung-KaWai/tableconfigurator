import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ArView } from "../pages/ArView";
import { Home } from "../pages/Home";

export const RoutingPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/ar" element={<ArView />} />
      </Routes>
    </BrowserRouter>
  );
};
