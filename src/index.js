import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import LandingPage from './LandingPage/LandingPage';
import ParticleSimulation from "./Demos/ParticleSimulation.js";
import PrivatePolicy from './LandingPage/PrivatePolicy.js';
import FallingCubes from './FallingCubes/FallingCubes.js';
import ArticlesPage from './Articles/ArticlesPage';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error from './Components/Error.js';
import {$,jQuery} from 'jquery';
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

//Create a way for components to pass data ...
window.MichaelNaguibSiteData = {
    displayMode:"auto",// Determines whether components using this use lightmode or darkmode ... "light","dark", "auto"
}


//UPDATE: I wanted to make this a multipage site ... react router acomplish that ... site pages
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/FallingCubes" component={FallingCubes}/>
            <Route path="/Demos" component={ParticleSimulation}/>
            <Route path="/PrivatePolicy" component={PrivatePolicy}/>
            <Route path="/Articles" component={ArticlesPage}/>
            <Route exact path="/" component={LandingPage} exact/>
            <Route component={Error}/>
        </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);// ORDERING of the routes matters ... because of the pattern matching algorithm it uses...

/*
*   <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
* */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
