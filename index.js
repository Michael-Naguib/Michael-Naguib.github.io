//Javascript Imports
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App/App.js';
import registerServiceWorker from './src/extra/registerServiceWorker';
//import paralaxLib from "./extra/parallax-1-4-2.js";
import $ from 'jquery';
import SplashScript from "./src/Splash/splash-script.js";

//Css Imports
import './index.scss';

// Main
$(document).ready(function(){

    //Render App
    ReactDOM.render(<App />, document.getElementById('root'));
    registerServiceWorker();

    //Other Scripts
    SplashScript();
    
    
});

