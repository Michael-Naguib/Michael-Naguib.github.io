import React, { Component } from 'react';
import "./Overlayer.css";

class Overlayer extends Component{
    constructor(props){
        super(props);
        /*
            @description        Overlay 2 elements Passed to this Component
                                The 1st element is placed over the 2nd element
            @usageExample       
                                <Overlayer>
                                    <div> 1st Element I am on top</div>
                                    <div> 2nd Element I am on bottom</div>
                                </Overlayer>
        
        */
    }
    render(){
        return(
            <div className="Overlayer">
                <div className="Overlayer_Overlay">
                    {this.props.children[0]}
                </div>
                <div className="Overlayer_Overlayed">
                    {this.props.children[1]}
                </div>
            </div>
        );
    }
}

export default Overlayer;