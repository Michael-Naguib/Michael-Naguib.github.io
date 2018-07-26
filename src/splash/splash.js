import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../assets/splash-video-3.mp4';

class Splash extends Component {

  // Constructor
  constructor(props){
    super(props);
    this.state = {msg:"M"};//initial = mobile
  }

  updatetext(){
    //updates the text by screen width for mobile responsivenenss 
    if (window.innerWidth <= 820){
      this.setState({msg:"M"})
    }else{
      this.setState( {msg:"Michael"});
    }
  }

  componentDidMount() {
    //console.log("mounted")
    this.updatetext();
    window.addEventListener("resize", this.updatetext.bind(this));
  }
    render() {
      return (
        <div className="splash">
            <div className="splash-overlay">
              <svg className="splash-svg">
                <defs>
                  <mask className="splash-mask" id="splash-mask" x="0" y="0" >
                    <rect className="splash-background" x="0" y="0" height="100%" width="100%" />
					          <text className="splash-text" x="50%" y="0" dy="50%"> &#60;{this.state.msg}&#47;&#62; </text>
                  </mask>
                </defs>
                <rect className="splash-masker" x="0" y="0" height="100%" width="100%"/>
              </svg>
            </div>
            <div className="splash-video">
              <ReactPlayer className="splash-bg-video" id="splash-paralax" url='./splash-video-3.271aeda4.mp4' playing loop muted/>
            </div>
        </div>
      );
    }
  }
  

  /*
      ReactPlayer: https://www.npmjs.com/package/react-player
  */
  export default Splash;