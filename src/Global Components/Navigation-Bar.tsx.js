import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

export default function NavigationBar(){
    return(
        <div>
            <Link to="/">Home</Link><br/>
            <Link to="/about">About</Link><br/>
            <Link to="/flocking-simulation">Flocking Simulation</Link>
        </div>
    );
}
