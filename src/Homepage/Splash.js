import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './Splash.scss';

class Splash extends Component {

  // Constructor
  constructor(props){
    super(props);
    this.state = {msg:this.props.smallMsg,vidUrl:this.props.smallVidUrl};//initial = mobile
  }

  updatetext(){
    //updates the text by screen width for mobile responsivenenss 
    if (window.innerWidth <= 820){
      this.setState({msg:this.props.smallMsg})
    }else{
      this.setState( {msg:this.props.bigMsg});
    }

    if (window.innerWidth <=500){
      this.setState({vidUrl:this.props.smallVidUrl})
    }else{
      this.setState({vidUrl:this.props.bigVidUrl})
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
                       <text className="splash-text" x="50%" y="10%" dy="50%">{this.state.msg}</text>
                  </mask>
                </defs>
                <rect style={{fill:this.props.maskColor}}className="splash-masker" x="0" y="0" height="100%" width="100%"/>
              </svg>
            </div>
            <div className="splash-video">
              <ReactPlayer className="splash-bg-video" id="splash-paralax" url= {this.state.vidUrl} playing loop muted/>
            </div>
        </div>
      );
    }
  }
  

  /*
      ReactPlayer: https://www.npmjs.com/package/react-player
  */
  export default Splash;