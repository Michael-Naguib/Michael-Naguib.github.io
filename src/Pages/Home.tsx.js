import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import NavigationBar from "../Global Components/Navigation-Bar.tsx";

export default function Home(){
    return(<div className={"Home"}>
        <NavigationBar/>
        <h1>Home Page</h1>
    </div>);
}