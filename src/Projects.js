import React  from 'react';
import Card from "react-bootstrap/Card"
import CardColumns from "react-bootstrap/CardColumns";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import UnsplashPhoto from "./UnsplashPhoto.js";
import MathJax from "react-mathjax";

const bigO = `\\mathcal{O}(n\\log{}n)`;

function ProjectCardDeck(){
    return(
        <CardColumns style={{marginTop:"50px",marginBottom:"90px"}}>
            <Card className="bg-dark text-white" text="black">
                <a href="https://github.com/Michael-Naguib/Chaotic-IFS-Fractal"  className={"ProjectsLink"}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Fractal2.png"}/>
                    <Card.Body>
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
            <Card className="bg-dark text-white" text="black">
                <a href="https://github.com/Michael-Naguib/BoidsSimulation"  className={"ProjectsLink"}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "/BoidsSimGif.gif"}/>
                    <Card.Body bg="Dark">
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
            </Card>
            <Card className="bg-dark text-white" text="black">
                <a href="https://github.com/Michael-Naguib/ChaoticIFSFractal3D"  className={"ProjectsLink"}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "/3dFractal.gif"}/>
                    <Card.Body bg="Dark">
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
            </Card>
            <Card className="bg-dark text-white" text="black">
                <a href="https://github.com/Michael-Naguib/Genetic-Algorithm"  className={"ProjectsLink"}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "/exampleGA.gif"}/>
                    <Card.Body bg="Dark">
                        <Card.Title>Genetic Algorithm (on Words)</Card.Title>
                        <Card.Text>
                            <MathJax.Provider>
                                Implemented a Genetic based approach for calculating a target phrase...
                            </MathJax.Provider>
                        </Card.Text>
                    </Card.Body>
                    <Card.Text>
                        <small className="text-muted">Last updated May 2020 </small>
                    </Card.Text>
                </a>
            </Card>
            <Card className="bg-dark text-white" text="black">
                <a href="https://github.com/Michael-Naguib/Genetic-Algorithm"  className={"ProjectsLink"}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "/PiEqn.png"}/>
                    <Card.Body bg="Dark">
                        <Card.Title>Monte Carlo Pi Simulation</Card.Title>
                        <Card.Text>
                            <MathJax.Provider>
                                Derived Pi as a result of a monte carlo simulation computed in N-Dimensions so as to produce
                                and estimate of Pi by running repeated simulations and observing convergence of approximations.
                            </MathJax.Provider>
                        </Card.Text>
                    </Card.Body>
                    <Card.Text>
                        <small className="text-muted">Last updated May 2020 </small>
                    </Card.Text>
                </a>
            </Card>
            <Card className="bg-dark text-white" text="black">
                <a href="https://github.com/Michael-Naguib/Simple-Cryptography"  className={"ProjectsLink"}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "/tenor.gif"}/>
                    <Card.Body bg="Dark">
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
            </Card>

            <Card className="bg-dark text-white" text="black">
                <a href="https://github.com/Michael-Naguib/ProjectEuler"  className={"ProjectsLink"}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Euler.jpg"}/>
                    <Card.Body bg="Dark">
                        <Card.Title>Project Euler</Card.Title>
                        <Card.Text>
                            Project Euler a website containing mathematical challenges to solve and implement as you see fit.
                            As I mentioned ... I like to code ... I often find the challenges fun and a great way to learn!
                        </Card.Text>
                    </Card.Body>
                </a>
            </Card>
            <Card className="bg-dark text-white" text="black">
                <a href="https://github.com/Michael-Naguib/"  className={"ProjectsLink"}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Octocat.png"}/>
                    <Card.Body bg="Dark">
                        <Card.Title>And Many More</Card.Title>
                        <Card.Text>
                            Checkout my github! Although all of my code is open source, I cannot release every side project
                            I am working on until it has reached some level of maturity. These are the tip of the iceberg!
                        </Card.Text>
                    </Card.Body>
                </a>
            </Card>
        </CardColumns>
    )
}

function Projects(){
    return(
        <div className="Projects" style={{margin:"0px 0px 0px 0px "}} id="Projects">
            <UnsplashPhoto
                imageUrl={process.env.PUBLIC_URL+"/jeremy-bishop-uAfZBP-GtiA-unsplash.jpg"}
                photographerUrl="https://unsplash.com/@jeremybishop"
                photographer="Jeremy Bishop"
                gradientRGBAfrom="rgba(2,2,4,1)"
                gradientRGBAmid="rgba(2,2,4,0.4)"
                gradientRGBAto="rgba(2,2,4,1)"
            >
                <Container>
                    <Row>
                        <Col xs={12}> <h1 className="text-left" style={{color:"White",marginTop:"50px"}}> Projects</h1></Col>
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
