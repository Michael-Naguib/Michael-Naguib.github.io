import React from 'react';
//https://github.community/t5/GitHub-Pages/Project-page-serving-from-the-wrong-URL-SOLVED/td-p/2853 (FIXes upload bug)
import './App.scss';
import Splash from "./Homepage/Splash.js";
import AboutMe from "./Homepage/AboutMe.js";
import Navigation from "./Navigation.js";
import Projects from "./Homepage/Projects.js";
import Contact from "./Homepage/Contact.js";
import Footer from "./Footer.js";
import PrivacyNotice from "./Homepage/PrivacyNotice.js";

function App() {
  return (
    <div className="App" id={"AppTop"}>
        { !window.policyAccepted ? <PrivacyNotice/> : undefined}
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