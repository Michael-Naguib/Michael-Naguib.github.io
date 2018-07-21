import React, { Component } from 'react';
import Splash from '../Splash/Splash.js';
import UnsplashPhoto from "../UnsplashPhoto/UnsplashPhoto.js";
import AboutMe from "../AboutMe/AboutMe.js";
import Navbar from "../Navbar/Navbar.js"; 


class App extends Component {
  
  render() {
    return ( 
      <div>
        <Navbar/>
        <Splash/>
        <UnsplashPhoto/>
        <AboutMe/>
      </div>
    );
  }
}

export default App;
