import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Portfolio from "./components/Portfolio";
import Hobbies from "./components/Hobbies";
import About from "./components/About";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
