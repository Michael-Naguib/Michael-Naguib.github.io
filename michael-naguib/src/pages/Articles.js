import React from 'react';
import Navigation from "../Components/Navigation.js";
import Footer from "../Components/Footer.js";
import {getDisplayMode} from "../Util/util";
import ArticleSearcher from "../Components/ArticleSearcher";
import ArticleSplashFeature from "../Components/ArticleSplashFeature";
import ArticleData from "../Util/ArticleData";

// Main Component for the page
export default function Articles(){
    const dark= getDisplayMode()=="dark";
    const fontColor= dark?"white":"black";
    return(
        <div id={"Articles"} style={{marginTop:"72px",color:fontColor,backgroundColor:dark?"#040719":"white",height:"100vh"}}>
            <Navigation/>
            <ArticleSplashFeature article={ArticleData[6]}/>
            <ArticleSearcher/>
            <Footer/>
        </div>
    )
}