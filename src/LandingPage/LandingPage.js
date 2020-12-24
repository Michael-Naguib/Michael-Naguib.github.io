import React from 'react';
//https://github.community/t5/GitHub-Pages/Project-page-serving-from-the-wrong-URL-SOLVED/td-p/2853 (FIXes upload bug)
import './LandingPage.scss';
import Splash from "./Splash.js";
import AboutMe from "./AboutMe.js";
import Navigation from "./../Components/Navigation.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";
import Footer from "./../Components/Footer.js";
import PrivacyNotice from "./PrivacyNotice.js";

function LandingPage() {
    /* Create a Darkmode and Lightmode version of the site that automatically switches based on the timezone of the
    * client viewing the site
    * */
    var useDarkmode =  (new Date()).getHours() >= 18;//6pm  sunset ish ... may vary depending on time during year
    console.log(useDarkmode?"Using Darkmode":"Not Using Darkmode");

  return (
    <div className="App" id={"AppTop"}>
        { !window.policyAccepted ? <PrivacyNotice/> : undefined}
      <Navigation darkmode={useDarkmode?"light":"dark"}/>
      <Splash smallMsg="M"
              bigMsg="Michael"
              smallVidUrl={process.env.PUBLIC_URL+"/me.mp4"}
              bigVidUrl={process.env.PUBLIC_URL+"/splash-video-3.mp4"}
              maskColor={ useDarkmode ? "rgb(255,255,255)":"rgb(4,7,25)" }
      />
      <AboutMe/>
      <Projects/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default LandingPage;
/*
            <MathJax.Provider>
                <div style={{paddingTop:"11em",fontSize:"180%",color:"white",margin:"0 auto",width:"100%",overflow:"hidden"}}>
                    <MathJax.Node formula={tex} />
                </div>
            </MathJax.Provider>
*/