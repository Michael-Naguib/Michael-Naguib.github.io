import React, { Component } from 'react';
//import logo from './logo.svg';
import styles from './App.scss';
import Splash from '../splash/splash.js';
import UnsplashPhoto from "../UnsplashPhoto/UnsplashPhoto.js";
import AboutMe from "../AboutMe/AboutMe.js";
//import Navbar from "../Navbar/Navbar.js"; 


class App extends Component {
  
  render() {
    console.log(styles);
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
