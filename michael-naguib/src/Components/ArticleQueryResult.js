import {getDisplayMode} from "../Util/util";
//import {HashLink as Link} from "react-router-hash-link";//
import { Link } from "gatsby"
import Row from "react-bootstrap/Row";
import {Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import React from "react";

export default function ArticleQueryResult(props){
    var article = props.article;
    const dark= getDisplayMode()=="dark";
    const fontColor= dark?"white":"black";
    return(
        <Link to={article.pLink} key={article.title} style={{textDecoration:"none",color:"inherit"}}>
            <Row style={{color:fontColor,backgroundColor:dark?"#040719":"white",padding:"30px"}}>
                <Col md={3}>
                    <Image src={article.imgSrc} thumbnail />
                </Col>
                <Col md={8}>
                    <h1>{article.title}</h1>
                    <h8>{article.date}</h8>
                    <p>{article.caption}</p>
                    <p className="text-muted" >by {article.author} | {article.readTime}</p>
                </Col>
            </Row>
        </Link>
    );
}