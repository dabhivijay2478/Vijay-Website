import React from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contactus from "./Components/Contactus";
import Index from "./Components/Index";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="" element={<Index />} />

        {/* <Route exact path="" element={<Navbar />}>
          <Route exact path="" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Projects" element={<Projects />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contactus />} />
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
