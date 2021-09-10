import React from "react";
import data from "../Util/ArticleData";
import {getDisplayMode} from "../Util/util";
import {Col, Container, Form} from "react-bootstrap";
import MathJax from "react-mathjax";
import ArticleQueryResult from "./ArticleQueryResult"; // NOTE TO SELF: the ./ is needed for correct path resolution

export default class ArticleSearcher extends React.Component{
    constructor(props){
        super(props);
        this.articles=data;
        //TODO: when filtering filter max size too ... we dont want all the results on the page
        // Link the data for this in the router too ... we want the articles to be linked by title
        // Add a url param for the objects here ...
        // linkname for the router
        // ~ fin ~

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

            <MathJax.Provider >

                <Container  style={{minHeight:"100vh"}}>
                    <Form>
                        <Form.Row>
                            <Col md>
                                <Form.Control style={{margin:"5%"}} type="text" placeholder="Search"  defaultValue={""} onChange={this.handleChange.bind(this)}/>
                            </Col>
                        </Form.Row>
                    </Form>
                    {
                        filteredArticles.length>0 ? filteredArticles.map((article) =>
                            <ArticleQueryResult article={article}/>
                        ): <h3 key={"NOARTICLES"}> No Articles meet the search criteria "{this.state.searchParam}"</h3>
                    }
                </Container>
            </MathJax.Provider>
        </div>)
    }
}
