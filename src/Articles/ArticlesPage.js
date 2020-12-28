import React from 'react';
import Navigation from "../Components/Navigation.js";
import Footer from "../Components/Footer.js";
import {Form, Button, Col, Container} from 'react-bootstrap';
import MathJax from "react-mathjax";
import data from './ArticleData.js';
import { HashLink as Link } from 'react-router-hash-link';
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import {getDisplayMode} from "../Util/util";


function ArticleCard(props){
    var article = props.article;
    const dark= getDisplayMode()=="dark";
    const fontColor= dark?"white":"black";
    return(
        <Link to={article.pLink} key={article.title} >
            <Row style={{color:fontColor,backgroundColor:dark?"#040719":"white",padding:"30px"}}>
                <Col md={3}>
                    <Image src={article.imgSrc} thumbnail />
                </Col>
                <Col md={8}>
                    <h1>{article.title}</h1>
                    <h4>{article.date}</h4>
                    <p>{article.caption}</p>
                    <p>by Michael Naguib</p>
                </Col>
            </Row>
        </Link>
    );
}


class ArticlesSearch extends React.Component{
    constructor(props){
        super(props);
        this.articles=data;
        //TODO: when filtering filter max size too ... we dont want all the results on the page
        // Link the data for this in the router too ... we want the articles to be linked by title
        // Add a url param for the objects here ...
        // linkname for the router
        // ~fin ~

        this.state={
            searchParam:"",
        }
    }
    handleChange(event){
        this.setState({ searchParam: event.target.value });
    };

    render() {

        const dark= getDisplayMode()=="dark";
        const fontColor= dark?"white":"black";
        //Great Resources
        //https://stackoverflow.com/questions/51801907/how-to-create-react-search-filter-for-search-multiple-object-key-values
        //https://stackoverflow.com/questions/38511906/handle-change-of-formcontrol-react

        // Filter the List
        var filteredArticles= undefined;
        if(this.state.searchParam==""){
            filteredArticles=this.articles;
        }else{
            filteredArticles = this.articles.filter(article => {
                return Object.keys(article).some((key) =>
                    typeof(article[key])==typeof("")? article[key].toLowerCase().includes(this.state.searchParam.toLowerCase()) : false
                );
            });

        }

        return(<div id={"ArticlesSearch"} style={{color:fontColor,backgroundColor:dark?"#040719":"white"}}>
            <Form style={{paddingBottom: "30px"}}>
                <Form.Row>
                    <Col md>
                        <Form.Control type="text" placeholder="search"  defaultValue={""} onChange={this.handleChange.bind(this)}/>
                    </Col>
                </Form.Row>
            </Form>
            <MathJax.Provider >

            <ul>
                {
                    filteredArticles.length>0 ? filteredArticles.map((article) =>
                    <ArticleCard article={article}/>
                    ): <h3 key={"NOARTICLES"}> No Articles meet the search criteria "{this.state.searchParam}"</h3>
                }
            </ul>
            </MathJax.Provider>
            </div>)
    }
}

// Main Component for the page
function ArticlesPage(){
    const dark= getDisplayMode()=="dark";
    const fontColor= dark?"white":"black";
    return(
        <div id={"ArticlesPage"} style={{marginTop:"72px",color:fontColor,backgroundColor:dark?"#040719":"white",height:"100vh"}}>
            <Navigation/>
            <ArticlesSearch/>
            <Footer/>
        </div>
    )
}

export default ArticlesPage;