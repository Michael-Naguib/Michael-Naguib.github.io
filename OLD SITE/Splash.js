import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './Splash.scss'

class Splash extends Component {
  // Constructor
  constructor(props) {
    super(props)
    this.state = { msg: this.props.smallMsg, vidUrl: this.props.smallVidUrl } //initial = mobile
  }

  updatetext() {
    //updates the text by screen width for mobile responsivenenss
    if (window.innerWidth <= 820) {
      this.setState({ msg: this.props.smallMsg })
    } else {
      this.setState({ msg: this.props.bigMsg })
    }

    if (window.innerWidth <= 500) {
      this.setState({ vidUrl: this.props.smallVidUrl })
    } else {
      this.setState({ vidUrl: this.props.bigVidUrl })
    }
  }

  //REALLY Useful as starter code
  //https://chanind.github.io/javascript/svg/2019/01/13/manipulating-and-animating-svg-with-raw-javascript.html
  animateCircle() {
    // Variable Setup
    let startTime = 0
    const totalTime = 10000 // 1000ms = 1s
    //Create the circles:

    var container = document.getElementById('splash-mask')

    if (document.getElementsByClassName('splash-particle').length == 0) {
      //if rerender by react ... we dont want to create more particles...
      for (var j = 0; j < 5; j++) {
        const circleNode = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
        circleNode.setAttributeNS(null, 'cx', '50')
        circleNode.setAttributeNS(null, 'cy', '50')
        circleNode.setAttributeNS(null, 'r', '40')
        circleNode.setAttributeNS(null, 'fill', 'blue')
        circleNode.classList.add('splash-particle')
        container.appendChild(circleNode)
      }
    }

    const animateStep = (timestamp) => {
      if (!startTime) startTime = timestamp
      // progress goes from 0 to 1 over 1s
      const progress = (timestamp - startTime) / totalTime

      //Circles
      var circleNodes = document.getElementsByClassName('splash-particle')
      for (var i = 0; i < circleNodes.length; i++) {
        var circleNode = circleNodes[i] //document.getElementById("splash-particle");
        var newx = circleNode.getAttribute('cx')
        var newy = circleNode.getAttribute('cy')
        // Chop of the %
        newx = parseInt(newx.substring(0, newx.length - 1))
        newy = parseInt(newy.substring(0, newy.length - 1))

        //update the position
        //<circle id={"splash-particle"} cx="50%" cy="50%" r="45" stroke="black" stroke-width="3" fill="clear" />
        //newx=(newx+Math.random()>0.5?1:-1)%100;
        //newy=(newy+Math.random()>0.5?1:-1)%100;
        newx = (newx + Math.floor(Math.random() * 10)) % 100
        newy = (newy + i) % 100
        //newx=(100+(newx+Math.random()>0.5?1:-1)%100)%100;
        //newy=(100+(newy+Math.random()>0.5?1:-1)%100)%100;
        console.log('[Particle: ' + i + ' x:' + newx + ' y:' + newy + ']')

        // move right 100 px
        circleNode.setAttributeNS(null, 'cx', newx + '%')
        circleNode.setAttributeNS(null, 'cy', newy + '%')
      }

      if (progress < 1) {
        window.requestAnimationFrame(animateStep)
      }
    }
    window.requestAnimationFrame(animateStep)
  }

  componentDidMount() {
    //console.log("mounted")
    this.updatetext()
    window.addEventListener('resize', this.updatetext.bind(this))
    if (window.MichaelNaguibSiteData.svgAnimate) {
      this.animateCircle()
    }
  }
  render() {
    return (
      <div className="splash">
        <div className="splash-overlay">
          <svg className="splash-svg">
            <defs>
              <mask className="splash-mask" id="splash-mask" x="0" y="0">
                <rect className="splash-background" x="0" y="0" height="100%" width="100%" />
                <text className="splash-text" x="50%" y="10%" dy="50%">
                  {this.state.msg}
                </text>
              </mask>
            </defs>
            <rect
              style={{ fill: this.props.maskColor }}
              className="splash-masker"
              x="0"
              y="0"
              height="100%"
              width="100%"
            />
          </svg>
        </div>
        <div className="splash-video">
          <ReactPlayer
            className="splash-bg-video"
            id="splash-paralax"
            url={this.state.vidUrl}
            playing
            loop
            muted
          />
        </div>
      </div>
    )
  }
}

/*
      ReactPlayer: https://www.npmjs.com/package/react-player
  */
export default Splash
