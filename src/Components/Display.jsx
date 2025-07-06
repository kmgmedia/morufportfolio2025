// src/Components/Display.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navigation/Navbar";
import LandingPage from "./Landingpage/LandingPage";
import Kmgfoliobigpage from "./Kmgfoliobigpage/Kmgfoliobigpage";
import Sicklefolio from "./Sicklefolio/Sicklefolio";
import Smarthomefolio from "./Smarthomefolio/Smarthomefolio";
import Pethomefolio from "./Pethomefolio/Pethomefolio";

const Display = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Kmgfoliobigpage" element={<Kmgfoliobigpage />} />
        <Route path="/Sicklefolio" element={<Sicklefolio />} />
        {/* <Route path="/Smarthomefolio" element={<Smarthomefolio />} /> */}
        <Route path="/Pethomefolio" element={<Pethomefolio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Display;
