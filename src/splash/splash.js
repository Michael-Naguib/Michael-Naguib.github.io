import React, { Component } from 'react';
import './splash.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from 'react-player';

class Splash extends Component {
    render() {
      return (
        <div className="splash">
            <div className="splash-overlay">
              <svg className="splash-svg">
                <defs>
                  <mask className="splash-mask" id="splash-mask" x="0" y="0" >
                    <rect className="splash-background" x="0" y="0" height="100%" width="100%" />
					          <text className="splash-text" x="50%" y="0" dy="50%"> &#60;Michael&#47;&#62; </text>
                  </mask>
                </defs>
                <rect className="splash-masker" x="0" y="0" height="100%" width="100%"/>
              </svg>
            </div>
            <div className="splash-video">
              <ReactPlayer className="splash-bg-video" id="splash-paralax" url='assets/splash-video-3.mp4' playing loop muted/>
            </div>
        </div>
      );
    }
  }
  

  /*
      ReactPlayer: https://www.npmjs.com/package/react-player
  */
  export default Splash;