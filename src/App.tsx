import React from 'react';
import './App.css';
//Routes
import { Routes, Route, Link } from "react-router-dom";
import About from "./Pages/About.tsx";
import Home from "./Pages/Home.tsx";
import FlockingSimulation from "./Projects/Flocking-Simulation/Flocking-Simulation-Page";

function App() {
  return (
    <div className="Appz">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="flocking-simulation" element={<FlockingSimulation />} />
        </Routes>
    </div>
  );
}

export default App;
