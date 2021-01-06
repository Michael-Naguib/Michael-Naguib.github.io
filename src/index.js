import React,{useEffect, Suspense, lazy} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch ,useLocation } from 'react-router-dom';
import Error from './Components/Error.js';
import {$,jQuery} from 'jquery';
import data from './Articles/ArticleData.js';

/*
// Implement Lazy Loading for React Router
const LandingPage = lazy(() => import('./LandingPage/LandingPage'));
const ParticleSimulation = lazy(() => import("./Demos/ParticleSimulation.js"));
const PrivatePolicy = lazy(()=>import('./LandingPage/PrivatePolicy.js'));
const FallingCubes = lazy(()=>import('./FallingCubes/FallingCubes.js'));
const ArticlesPage = lazy(()=>import('./Articles/ArticlesPage'));
// YIKES that little overhead made it much worse!!!
*/
import LandingPage from './LandingPage/LandingPage';
import ParticleSimulation from "./Demos/ParticleSimulation.js";
import PrivatePolicy from './LandingPage/PrivatePolicy.js';
import FallingCubes from './FallingCubes/FallingCubes.js';
import ArticlesPage from './Articles/ArticlesPage';



// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

//Website Wide Settings & Usefull data passing object
window.MichaelNaguibSiteData = {
    displayMode:"auto",// Determines whether components using this use lightmode or darkmode ... "light","dark", "auto"
    svgAnimate:false,
    privatePolicyAccepted:false,
    GA_MEASUREMENT_ID:'UA-165348245-1',
    gtag: ()=>{console.log("GTagFuncNotSpecified")}
}

// Responsible for updating the google tag for SPA
/*browserHistory.listen( location =>  {

});*/

function GoogleAnalyitics() {
    const location = useLocation();
    useEffect(() => {
        const currentPath = location.pathname;
        // If the Policy is accepted then this will be defined
        if( window.MichaelNaguibSiteData.privatePolicyAccepted){
            console.log("Updating Location to "+currentPath);
            window.MichaelNaguibSiteData.gtag('config', window.MichaelNaguibSiteData.GA_MEASUREMENT_ID, {'page_path': currentPath});
        }

    }, [location]);
    return (
        <div style={{display:"hidden"}}></div>
    );
}

//React Browser Router: Preserves page history & routes the site as a dynamic single site aplication
ReactDOM.render(
        <BrowserRouter>
            <Switch>
                <Route exact path="/FallingCubes" component={FallingCubes}/>
                <Route exact path="/Demos" component={ParticleSimulation}/>
                <Route exact path="/PrivatePolicy" component={PrivatePolicy}/>
                <Route exact path="/Articles" component={ArticlesPage}/>
                <Route exact path="/" component={LandingPage}/>
                {// Routes for the articles...
                    data.map((article)=><Route exact key={article.title} path={article.pLink} component={article.component}/>)
                }
                <Route component={Error}/>
            </Switch>
            <GoogleAnalyitics/>
        </BrowserRouter>
    ,
  document.getElementById('root')
);

/*
OLD CODE:
<React.StrictMode>
    <LandingPage />
 </React.StrictMode>,

*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
