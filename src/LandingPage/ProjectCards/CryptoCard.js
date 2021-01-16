import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import React from "react";
import {getDisplayMode} from "../../Util/util";


export default function CryptoCard(props){
    const dark= getDisplayMode()=="dark";
    const fontColor= dark?"white":"black";
    return(
        <Card className={dark?"bg-dark text-white":"bg-light text-black"} text={fontColor}>
            <a href="https://github.com/Michael-Naguib/Simple-Cryptography"  className={"ProjectsLink"}>
                <video className={"card-img-top"} src={process.env.PUBLIC_URL + "/tenor.mp4"} autoPlay="true" loop muted></video>
                <Card.Body bg={dark?"Dark":"Light"}>
                    <Card.Title>Cryptography</Card.Title>
                    <Card.Text>
                        One of my earliest projects where I implemented several encryption algorithms:
                        Vigenere, Hills, Affine & Caesar;  in addition to implementing frequency analysis to automatically
                        break encryption given a corpus of encrypted text.
                    </Card.Text>
                </Card.Body>
                <Card.Text>
                    <small className="text-muted">Last updated May 2020 </small>
                </Card.Text>
            </a>
        </Card>)
}