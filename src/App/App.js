import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Splash from '../splash/splash.js';
import UnsplashPhoto from "../UnsplashPhoto/UnsplashPhoto.js";
import AboutMe from "../AboutMe/AboutMe.js";

class App extends Component {
  render() {
    return ( 
      <div>
        <Splash/>
        <UnsplashPhoto/>
        <AboutMe/>
      </div>
    );
  }
}

export default App;
