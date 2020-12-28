import {Container, Jumbotron} from "react-bootstrap";
import React from "react";
import Navigation from "../../Components/Navigation";



function Article1(props){
    return(<div style={{marginTop:"72px"}}>
        <Navigation/>
        <Jumbotron fluid>
            <Container>
                <h1>Fluid Monte carlo pi</h1>
                <p>
                    This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.
                </p>
            </Container>
        </Jumbotron>
    </div>);
}

const article1Data =  {
    title:"Monte Carlo Pi Simulation",
    date:(new Date()).toString(),
    caption:"Monte carlo simulations can be computed in higher dimensions",
    keywords:"Math,Monte Carlo, Approximation, Pi",
    pLink:"/Articles/MonteCarloPi",
    imgSrc:"https://images.unsplash.com/photo-1608561028990-47a3a8538ba6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    component: Article1
}

export default article1Data;