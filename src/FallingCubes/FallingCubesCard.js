import Card from "react-bootstrap/Card";
import {HashLink as Link} from "react-router-hash-link";
import MathJax from "react-mathjax";
import React from "react";
const renderEqn = `
\\mathit{L_{o}}(\\boldsymbol{x},\\omega _{o},\\lambda,t)
=
\\mathit{L_{e}}(\\boldsymbol{x},\\omega _{o},\\lambda,t) 
+\\\\
\\int_{\\Omega }^{}
f_{r}(\\boldsymbol{x},\\omega _{i},w_{o},\\lambda,t)
\\mathit{L_{i}}(\\boldsymbol{x},\\omega _{o},\\lambda,t)
(\\omega \\cdot \\boldsymbol{n})
d\\omega_{i}
`;
function FallingCubesCard(){
    return(
        <Card className="bg-dark text-white" text="black">
            <Link to={"/FallingCubes#FallingCubesTop"}  className={"ProjectsLink"}>
                <Card.Img variant="top" src={process.env.PUBLIC_URL + "/SlowedFallingCubesCropped.gif"}/>
                <Card.Body bg="Dark">
                    <Card.Title>Falling Cubes</Card.Title>
                    <Card.Text>
                        Simplicity, Elegance , 🔥 GPU's .... are all found in the Rendering Equation!
                        Just some messing around with Blender's Cycles Rendering Engine.
                    </Card.Text>
                </Card.Body>
                <Card.Text>
                    <small className="text-muted">Last updated July 2020 </small>
                </Card.Text>
            </Link>
        </Card>
    );
}

export default FallingCubesCard;