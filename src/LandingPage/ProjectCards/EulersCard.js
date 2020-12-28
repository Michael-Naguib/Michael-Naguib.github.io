import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import React from "react";
import {getDisplayMode} from "../../Util/util";

export default function EulersCard(props){
    const dark= getDisplayMode()=="dark";
    const fontColor= dark?"white":"black";
    return(
    <Card className={dark?"bg-dark text-white":"bg-light text-black"} text={fontColor}>
        <a href="https://github.com/Michael-Naguib/ProjectEuler"  className={"ProjectsLink"}>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Euler.jpg"}/>
            <Card.Body  bg={dark?"Dark":"Light"}>
                <Card.Title>Project Euler</Card.Title>
                <Card.Text>
                    Project Euler a website containing mathematical challenges to solve and implement as you see fit.
                    As I mentioned ... I like to code ... I often find the challenges fun and a great way to learn!
                </Card.Text>
            </Card.Body>
        </a>
    </Card>)
}