import Card from "react-bootstrap/Card";
import {HashLink as Link} from "react-router-hash-link";
import CardColumns from "react-bootstrap/CardColumns";
import React from "react";
import {getDisplayMode} from "../../Util/util";

export default function ConwaysCard(props){
    const dark= getDisplayMode()=="dark";
    const fontColor= dark?"white":"black";
    return(
        <Card className={dark?"bg-dark text-white":"bg-light text-black"} text={fontColor}>
            <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"  className={"ProjectsLink"}>
                <Card.Img variant="top" src={process.env.PUBLIC_URL + "/CatepillarRave.gif"}/>
                <Card.Body bg={dark?"Dark":"Light"}>
                    <Card.Title>Catepillar Rave</Card.Title>
                    <Card.Text>
                        Conway's Game of Life implemented using emojis 🐛! A 3D raytraced version using semi transparent
                        cubes is on the way ...
                    </Card.Text>
                </Card.Body>
                <Card.Text>
                    <small className="text-muted">Last updated September 2020 </small>
                </Card.Text>
            </a>
        </Card>
    );
}

