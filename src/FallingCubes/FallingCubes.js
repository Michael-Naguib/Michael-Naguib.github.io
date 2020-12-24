import React from 'react';
import Navigation from "../Components/Navigation";
import {Col, Container, Jumbotron, Row, Image} from "react-bootstrap";
import MathJax from "react-mathjax";
import "./FallingCubes.scss";
import Card from "react-bootstrap/Card";//\\huge
const renderEqn = `
\\mathit{L_{o}}(\\boldsymbol{x},\\omega _{o},\\lambda,t)
=
\\mathit{L_{e}}(\\boldsymbol{x},\\omega _{o},\\lambda,t) 
+
\\int_{\\Omega }^{}
f_{r}(\\boldsymbol{x},\\omega _{i},w_{o},\\lambda,t)
\\mathit{L_{i}}(\\boldsymbol{x},\\omega _{o},\\lambda,t)
(\\omega \\cdot \\boldsymbol{n})
d\\omega_{i}
`;
function FallingCubes(props){
    return(
        <div className={"FallingCubes"} id={"FallingCubesTop"} style={{backgroundColor:"#464646"}}>
            <Navigation/>
            <Jumbotron
                       style={{
                           backgroundImage:"url("+process.env.PUBLIC_URL+"/RPFallingCubes.png)",
                           backgroundSize:"cover",
                           overflow:"hidden",
                           marginBottom:"0px"
                       }}
            >
                <Container style={{height:"600px",color:"White"}} >
                    <MathJax.Provider >
                        <MathJax.Node style={{marginTop:"290px"}} formula={renderEqn} />
                    </MathJax.Provider>

                </Container>
            </Jumbotron>
            <Container fluid>
                <Row>
                    <Col md={12} style={{padding:"75px",color:"white"}}>
                        <h2 > Gallery </h2>
                        <par>
                            While looking into how I might approach creating a Mandlebulb fractal I came across some
                            software I had previously seen ... but until now I did not realize what I could do with it
                            I had previously just thought it good for viewing .stl files ... I was wrong ... I began expiramenting
                            with some raytraced falling cube animations.
                        </par>
                    </Col>
                    <Col lg={4}>
                        <Image src={process.env.PUBLIC_URL+"/FCubesCropHighRes.gif"}  />

                    </Col>
                    <Col lg={8}>
                        <Image style={{height:"350px"}} src={process.env.PUBLIC_URL+"/RLaPinkFallingCubes.png"}  />
                    </Col>
                    <Col lg={6}>
                        <Image style={{height:"400px"}} src={process.env.PUBLIC_URL+"/MyFirstCubeRender.png"}  />
                    </Col>
                    <Col lg={6}>
                        <Image style={{height:"250px"}} src={process.env.PUBLIC_URL+"/RBlueFallingCubes.png"}  />
                    </Col>

                </Row>
            </Container>

        </div>
    );
}

export default FallingCubes;