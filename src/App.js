import React from 'react';
//https://github.community/t5/GitHub-Pages/Project-page-serving-from-the-wrong-URL-SOLVED/td-p/2853 (FIXes upload bug)
import './App.scss';
import Splash from "./Splash.js";
import AboutMe from "./AboutMe.js";
import Navigation from "./Navigation.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";
import Carousel from "react-bootstrap/Carousel";
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Splash smallMsg="M"
              bigMsg="Michael"
              smallVidUrl={process.env.PUBLIC_URL+"/me.mp4"}
              bigVidUrl={process.env.PUBLIC_URL+"/splash-video-3.mp4"}
              maskColor="rgb(4,7,25)"
      />
      <AboutMe/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
/*
            <MathJax.Provider>
                <div style={{paddingTop:"11em",fontSize:"180%",color:"white",margin:"0 auto",width:"100%",overflow:"hidden"}}>
                    <MathJax.Node formula={tex} />
                </div>
            </MathJax.Provider>
*/