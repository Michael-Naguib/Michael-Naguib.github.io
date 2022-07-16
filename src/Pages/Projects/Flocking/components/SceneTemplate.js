import React from 'react';
import ViewTemplate from './ViewTemplate';
import * as THREE from 'three';

export default class SceneTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.viewGL = undefined;
        this.canvasRef = React.createRef();
    }

    // ******************* COMPONENT LIFECYCLE ******************* //
    componentDidMount() {
        // Get canvas, pass to custom class
        this.viewGL = new ViewTemplate( this.canvasRef.current);

        // Init any event listeners
        window.addEventListener('mousemove', this.mouseMove);
        window.addEventListener('resize', this.handleResize);
    }

    componentDidUpdate(prevProps, prevState) {

        /*
        * Do whatever with the new state and modify the view
        * */
        this.viewGL.updateValue("test");
    }

    componentWillUnmount() {
        // Remove any event listeners
        window.removeEventListener('mousemove', this.mouseMove);
        window.removeEventListener('resize', this.handleResize);
    }

    // ******************* EVENT LISTENERS ******************* //
    mouseMove = (event) => {
        this.viewGL.onMouseMove();
    }
    handleResize = () => {
        this.viewGL.onWindowResize(window.innerWidth, window.innerHeight);
    };

    render() {
        return (
            <div className="canvasContainer">
                <canvas ref={this.canvasRef} />
            </div>
        );
    }
}