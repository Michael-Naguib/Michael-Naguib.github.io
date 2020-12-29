import Card from "react-bootstrap/Card";
import {HashLink as Link} from "react-router-hash-link";
import CardColumns from "react-bootstrap/CardColumns";
import React from "react";
import {getDisplayMode} from "../../Util/util";

export default function GithubCard(props){
    const dark= getDisplayMode()=="dark";
    const fontColor= dark?"white":"black";
    return(
        <Card className={dark?"bg-dark text-white":"bg-light text-black"} text={fontColor}>
            <Link to={"https://github.com/Michael-Naguib/"}  className={"ProjectsLink"}>
                <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Octocat.webp"}/>
                <Card.Body bg={dark?"Dark":"Light"}>
                    <Card.Title>And Many More</Card.Title>
                    <Card.Text>
                        Checkout my github! Although all of my code is open source, I cannot release every side project
                        I am working on until it has reached some level of maturity. These are the tip of the iceberg!
                    </Card.Text>
                </Card.Body>
            </Link>
        </Card>
    );
}
