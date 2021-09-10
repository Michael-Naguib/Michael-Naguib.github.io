import {Container, Jumbotron} from "react-bootstrap";
import MathJax from "react-mathjax";
import React from "react";
import {Link} from "gatsby";

export default function ArticleSplashFeature(props){
    return(
        <MathJax.Provider >
            <Link to={props.article.pLink} key={props.article.title} style={{textDecoration:"none",color:"inherit"}}>
                <Jumbotron fluid style={{backgroundImage:"url('"+props.article.imgSrc+"'",overflow:"hidden",backgroundSize:"cover",paddingLeft:"5vw",paddingRight:"5vw"}}>
                    <Container style={{backgroundColor: "rgba(255, 255, 255, .45)", backdropFilter:" blur(5px)",padding:"20px",borderRadius:"10px",margin:"8vw"}}>
                        <h1>{props.article.title}</h1>
                        <p>{props.article.caption}</p>
                        <p className="text-muted">By {props.article.author} | {props.article.readTime}</p>
                    </Container>
                </Jumbotron>
            </Link>
        </MathJax.Provider>)
}
