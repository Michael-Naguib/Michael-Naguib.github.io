import "./AboutMe.css";
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classnames from 'classnames';
import imgpath from "./MichaelProfilePicBlurred.png";

class AboutMe extends Component{
    render(){
        return(
            <div className={classnames("AboutMe","row")}>
                <div className="container-fluid" id="AboutMe-c">
                    <div className="row">
                        <div className={classnames('AboutMe-Photo-container','col-sm-12','col-lg-4')}>
                            <img src={imgpath} alt="Me" className="AboutMe-Photo"></img>
                        </div>
                        <div className={classnames('AboutMe-Quote','col-sm-12','col-lg-8')}>
                            <span className="AboutMe-BigQuotes">&ldquo;</span> 
                            <br/>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                             Mauris dignissim, justo eget tempor commodo, nulla urna 
                             efficitur justo, si
                             auctor velit sollicitudin. Sed eget accumsan dui. Nam vel consequat eros, 
                             at elementum felis. Proin non feugiat sapien, ac tempus erat. Nulla facilisi.<br/>
                            <span className="AboutMe-BigQuotes" >&rdquo;</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;