import React, { Component } from 'react';
import Splash from '../Splash/Splash.jsx';
import UnsplashPhoto from "../UnsplashPhoto/UnsplashPhoto.jsx";
import AboutMe from "../AboutMe/AboutMe.jsx";
import Navbar from "../Navbar/Navbar.jsx"; 


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
