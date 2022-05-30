import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import NavigationBar from "../Global Components/Navigation-Bar.tsx";

export default function About(){
    return(<div className={"About"}>
        <NavigationBar/>
        <h1>About Page</h1>
    </div>);
}