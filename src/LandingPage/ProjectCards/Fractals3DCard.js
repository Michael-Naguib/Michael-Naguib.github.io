import Card from "react-bootstrap/Card";
import MathJax from "react-mathjax";
import CardColumns from "react-bootstrap/CardColumns";
import React from "react";
import {getDisplayMode} from "../../Util/util";


export default function Fractals3DCard(props){
    const dark= getDisplayMode()=="dark";
    const fontColor= dark?"white":"black";
    return(
        <Card className={dark?"bg-dark text-white":"bg-light text-black"} text={fontColor}>
            <a href="https://github.com/Michael-Naguib/ChaoticIFSFractal3D"  className={"ProjectsLink"}>
                <Card.Img variant="top" src={process.env.PUBLIC_URL + "/3dFractal.gif"}/>
                <Card.Body bg={dark?"Dark":"Light"}>
                    <Card.Title>Chaotic Fractals in 3D</Card.Title>
                    <Card.Text>
                        <MathJax.Provider>
                            Derived the equations for 3D variants of 2D fractals and displayed using GPU acelerated
                            Point Cloud viewer.
                        </MathJax.Provider>
                    </Card.Text>
                </Card.Body>
                <Card.Text>
                    <small className="text-muted">Last updated May 2020 </small>
                </Card.Text>
            </a>
        </Card>)
}