import MathJax from "react-mathjax";
import React from "react";
import article1Data from "../Components/Articles/Article1.js";
// Coursesy of github: https://stackoverflow.com/questions/11591854/format-date-to-mm-dd-yyyy-in-javascript
//Modified for use
function getFormattedDate(date) {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    return months[month-1] + " " + day+", " + year;
}

/*
* Here keywords for the search engine and a URL path for the article are specified
* */
const data = [
    {
        title:"Articles",
        date:getFormattedDate(new Date()),
        caption:"This is an example of an article",
        keywords:"testing,test",
        pLink:"/Articles/test",
        imgSrc:"https://images.unsplash.com/photo-1551207046-b56c35384080?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        component: (props)=><div>TEST PAGE<h1 style={{color:"red"}}>EXAMPLE ARTICLE... NOT REAL</h1></div>
    },
    article1Data,
    {
        title:"Merge Sort Algorithm",
        date:(new Date()).toString(),
        caption:"Merge sort is a stable algorithm for sorting a list in O(nlogn) time",
        keywords:"Algorithms,Datastructures,Merge Sort, Sorting",
        pLink:"/Articles/MergeSort-Algorithm",
        imgSrc:"https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        component: (props)=><div>Merge Sort<h1 style={{color:"red"}}>EXAMPLE ARTICLE... NOT REAL</h1></div>
    },
    {
        title:"Quick Sort Algorithm",
        date:(new Date()).toString(),
        caption:"Quick Sort is an adaptive sorting algorithm sorting in Amortorized O(nlogn)",
        keywords:"Algorithms,Datastructures,Quick Sort, Sorting",
        pLink:"/Articles/QuickSort-Algorithm",
        imgSrc:"https://images.unsplash.com/photo-1484662020986-75935d2ebc66?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=80",
        component: (props)=><div>QuickSort<h1 style={{color:"red"}}>EXAMPLE ARTICLE... NOT REAL</h1></div>
    },
    {
        title:"Pi vs Tau",
        date:(new Date()).toString(),
        caption:"An opinion piece on why PI is better than TAU",
        keywords:"Math,Constants,Pi,Tau",
        pLink:"/Articles/TauVsPi",
        imgSrc:"https://images.unsplash.com/photo-1589705637779-d959371018dc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        component: (props)=><div>Pi VS TAU</div>
    },
    {
        title:"Neural Networks & Eigen Value Decomposition",
        date:(new Date()).toString(),
        caption:"Are the weight matricies that come from neural networks Diagonalizable? Is this a desired?",
        keywords:"NN,ANN,Neural Networks,AI,ML,Machine Learning,Linear Algebra, Eigen Values",
        pLink:"/Articles/Neural-Networks-Eigen-Value-Decomposition",
        imgSrc:"https://images.unsplash.com/photo-1542382257-80dedb725088?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        component: (props)=><div>Neural Networks <h1 style={{color:"red"}}>EXAMPLE ARTICLE... NOT REAL</h1></div>
    },
    {
        title:"Cauchy's Integral Formula",
        date:(new Date()).toString(),
        caption: <MathJax.Node  formula={`f(a) = \\frac{1}{2\\pi i} \\oint\\frac{f(z)}{z-a}dz`} />,
        keywords:"Cauchy,Integral,integration,formula,mathematics,math",
        pLink:"/Articles/Cauchy-Integral-Formula",//Tim Scalzo 's Image via unsplash
        imgSrc:"https://images.unsplash.com/photo-1593792287216-63d6852cc3a8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        component: (props)=><MathJax.Provider ><h1 style={{color:"red"}}>EXAMPLE ARTICLE... NOT REAL</h1><MathJax.Node  formula={`f(a) = \\frac{1}{2\\pi i} \\oint\\frac{f(z)}{z-a}dz`} /></MathJax.Provider>
    }


];
export default data;//[];//TODO: replace with `data`