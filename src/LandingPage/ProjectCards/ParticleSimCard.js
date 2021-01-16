import Card from "react-bootstrap/Card";
import MathJax from "react-mathjax";
import CardColumns from "react-bootstrap/CardColumns";
import React from "react";
import {getDisplayMode} from "../../Util/util";
const bigO = `\\mathcal{O}(n\\log{}n)`;
//old code ... video more efficient
//<Card.Img variant="top" src={process.env.PUBLIC_URL + "/BoidsSimGif.webp"}/>
export default function ParticleSimCard(props){
    const dark= getDisplayMode()=="dark";
    const fontColor= dark?"white":"black";
    return(
    <Card className={dark?"bg-dark text-white":"bg-light text-black"} text={fontColor}>
        <a href="https://github.com/Michael-Naguib/BoidsSimulation"  className={"ProjectsLink"}>
            <video className={"card-img-top"} src={process.env.PUBLIC_URL + "/BoidsSimGif.mp4"} autoPlay="true" loop muted></video>
            <Card.Body bg={dark?"Dark":"Light"}>
                <Card.Title>3k Particle Simulation</Card.Title>
                <Card.Text>
                    <MathJax.Provider>
                        An implementation of Craig Renyolds Boids done in <MathJax.Node inline formula={bigO} /> by fractally subdividing space
                        using a KD-Tree to approximate nearest neighbors.
                    </MathJax.Provider>
                </Card.Text>
            </Card.Body>
            <Card.Text>
                <small className="text-muted">Last updated May 2020 </small>
            </Card.Text>
        </a>
    </Card>)
}