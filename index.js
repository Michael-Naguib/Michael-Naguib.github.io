/**
 *      Hours Wasted Figuring out this bug: 4
 * 
 *      if parcel build crashes but completes the build... then fix the crash cause then
 *      restart parcel.... also node-sass is the problem..
 * 
 *      (otherwise watch will appear not to work)
 * 
 */

 //Script Imports
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App/App.jsx';
import registerServiceWorker from './src/extra/registerServiceWorker';
//import paralaxLib from "./extra/parallax-1-4-2.js";
import $ from 'jquery';
import SplashScript from "./src/Splash/splash-script.js";

//Css imports
import './index.scss';
console.log("Hello World");

$(document).ready(function(){

    //Render App
    ReactDOM.render(<App />, document.getElementById('root'));
    registerServiceWorker();

    //Other Scripts
    SplashScript();
    
});