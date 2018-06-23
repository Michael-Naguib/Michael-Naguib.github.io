import "./AboutMe.css";
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classnames from 'classnames';

class AboutMe extends Component{
    render(){
        return(
            <div className={classnames("AboutMe","row")}>
                <div className="container-fluid">
                    <div className="row">
                        <div className={classnames('AboutMe-Photo','col-sm-12','col-lg-4')}>
                        </div>
                        <div className={classnames('AboutMe-Quote','col-sm-12','col-lg-8')}>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;