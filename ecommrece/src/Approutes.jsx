import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import Blog from "../src/pages/Blog";
import Contect from "../src/pages/Contect";
import About from "../src/pages/About";
import Shop from "../src/pages/Shop";
const Approutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contect" element={<Contect />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>
    </>
  );
};

export default Approutes;
