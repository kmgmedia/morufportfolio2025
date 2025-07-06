// src/Components/Landingpage/LandingPage.jsx
import React from "react";
import Hero from "./Hero";
import Projects from "../Projects/Project";
import Footer from "../Footer/Footer";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <div id="projects">
        <Projects />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
