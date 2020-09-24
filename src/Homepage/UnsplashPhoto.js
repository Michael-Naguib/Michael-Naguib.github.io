import React, { Component } from 'react';
import "./UnsplashPhoto.scss";
class UnsplashPhoto extends Component {
    render() {
      return (

              <div className="UnsplashPhoto" style={{
                  background:" linear-gradient(to bottom, "+this.props.gradientRGBAfrom+","+this.props.gradientRGBAmid+","+this.props.gradientRGBAto+"),url('"+this.props.imageUrl+"') no-repeat",
                  backgroundSize:"cover"
              }}>
                  {this.props.children}
                  <a className="UnsplashLink" href={this.props.photographerUrl} target="_blank" rel="noopener noreferrer" title= {"Download free do whatever you want high-resolution photos from "+ this.props.photographer}>
                <span className="UnsplashSpan">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32">
                        <title>unsplash-logo</title>
                        <path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path>
                    </svg>
                </span>
                      <span  className="UnsplashSpan">Photo by {this.props.photographer}</span>
                  </a>
              </div>
      );
    }
  }
export default UnsplashPhoto