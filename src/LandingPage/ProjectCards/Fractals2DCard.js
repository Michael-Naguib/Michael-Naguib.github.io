import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import React from "react";
import {getDisplayMode} from "../../Util/util";

export default function ParticleSimCard(props){
    const dark= getDisplayMode()=="dark";
    const fontColor= dark?"white":"black";
    return(
        <Card className={dark?"bg-dark text-white":"bg-light text-black"} text={fontColor}>
            <a href="https://github.com/Michael-Naguib/Chaotic-IFS-Fractal"  className={"ProjectsLink"}>
                <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Fractal2.png"}/>
                <Card.Body  bg={dark?"Dark":"Light"}>
                    <Card.Title>Chaotic Iterated Fractals</Card.Title>
                    <Card.Text>
                        Affine Transformation Matrix Based calculation rendered using Datashader
                    </Card.Text>
                </Card.Body>
                <Card.Text>
                    <small className="text-muted">Last updated May 2020 </small>
                </Card.Text>
            </a>
        </Card>
    )
}