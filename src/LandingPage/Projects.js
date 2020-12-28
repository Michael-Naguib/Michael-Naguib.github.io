import React  from 'react';
import Card from "react-bootstrap/Card"
import CardColumns from "react-bootstrap/CardColumns";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { HashLink as Link } from 'react-router-hash-link';
import UnsplashPhoto from "./UnsplashPhoto.js";
import MathJax from "react-mathjax";
import FallingCubesCard from "../FallingCubes/FallingCubesCard";
import {getDisplayMode} from "../Util/util";
import GithubCard from "./ProjectCards/GithubCard";
import ConwaysCard from "./ProjectCards/ConwaysCard";
import EulersCard from "./ProjectCards/EulersCard";
import CryptoCard from "./ProjectCards/CryptoCard";
import MontePiCard from "./ProjectCards/MontePiCard";
import GeneticCard from "./ProjectCards/GeneticCard";
import Fractals3DCard from "./ProjectCards/Fractals3DCard";
import ParticleSimulation from "../Demos/ParticleSimulation";
import ParticleSimCard from "./ProjectCards/ParticleSimCard";



function ProjectCardDeck(){
    const dark= getDisplayMode()=="dark";
    const fontColor= dark?"white":"black";
    return(
        <CardColumns style={{marginTop:"50px",marginBottom:"90px"}}>

            <ParticleSimCard/>
            <Fractals3DCard/>
            <GeneticCard/>
            <MontePiCard/>
            <CryptoCard/>
            <EulersCard/>
            <ConwaysCard/>
            <FallingCubesCard/>
            <GithubCard/>
        </CardColumns>
    )
}

function Projects(){
    const dark= getDisplayMode()=="dark";
    const fontColor= dark?"white":"black";
    return(
        <div className="Projects" style={{margin:"0px 0px 0px 0px "}} id="Projects">
            <UnsplashPhoto
                imageUrl={
                    dark?
                    process.env.PUBLIC_URL+"/jeremy-bishop-uAfZBP-GtiA-unsplash.jpg":
                    "https://images.unsplash.com/photo-1546392049-eb5f840af250?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"
                }
                photographerUrl={
                    dark?
                        "https://unsplash.com/@jeremybishop":"https://unsplash.com/@lishakov"
                }
                photographer={dark?"Jeremy Bishop":"Andrej Lišakov"}
                gradientRGBAfrom={dark?"rgba(2,2,4,1)":"rgba(255,255,255,1)"}
                gradientRGBAmid={dark?"rgba(2,2,4,0.4)":"rgba(255,255,255,0)"}
                gradientRGBAto={dark?"rgba(2,2,4,1)":"rgba(255,255,255,1)"}
            >
                <Container>
                    <Row>
                        <Col xs={12}> <h1 className="text-left" style={{color:fontColor,marginTop:"100px"}}> Projects</h1></Col>
                        <Col xs={12}>
                        <ProjectCardDeck/>
                        </Col>
                    </Row>
                </Container>
            </UnsplashPhoto>
        </div>
    );
}
export default Projects;
