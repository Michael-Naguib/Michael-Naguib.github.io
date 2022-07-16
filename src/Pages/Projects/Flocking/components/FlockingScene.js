import React from 'react';
import FlockingView from './FlockingView';


export default class FlockingScene extends React.Component {
    constructor(props) {
        super(props);
        this.viewGL = undefined;
        this.canvasRef = React.createRef();
    }

    // ******************* COMPONENT LIFECYCLE ******************* //
    componentDidMount() {
        // Get canvas, pass to custom class
        this.viewGL = new FlockingView( this.canvasRef.current);

        // Init any event listeners
        window.addEventListener('mousemove', this.mouseMove);
        window.addEventListener('resize', this.handleResize);
    }

    componentDidUpdate(prevProps, prevState) {// eslint-disable-line no-unused-vars
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
    mouseMove = (event) => { // eslint-disable-line no-unused-vars
        this.viewGL.onMouseMove();
    }

    handleResize = () => {
        this.viewGL.onWindowResize(window.innerWidth, window.innerHeight);
    };

    render() {
        return (
            <div className="flocking-scene">
                <canvas ref={this.canvasRef} />
            </div>
        );
    }
}