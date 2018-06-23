//IMports
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App.js';
import registerServiceWorker from './extra/registerServiceWorker';
//import paralaxLib from "./extra/parallax-1-4-2.js";
import $ from 'jquery';
import SplashScript from "./splash/splash-script.js";

// Main
$(document).ready(function(){

    //Render App
    ReactDOM.render(<App />, document.getElementById('root'));
    registerServiceWorker();

    //Other Scripts
    SplashScript();
    
    
});

