import React from 'react';
import * as THREE from 'three';
import Navigation from "./Navigation";
import Jumbotron from "react-bootstrap/Jumbotron";
//https://threejsfundamentals.org/threejs/lessons/threejs-primitives.html
class ParticleSimulation extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<div className="ParticleSimulation">
            <Navigation/>
            <div className="SimulationContainer" style={{padding:"10px",marginTop:"120px"}}>
                Some Really cool stuff comming soon! Check Back Later!  (last updated 5/18/2020)
            </div>
        </div>);
    }
}
export default ParticleSimulation;