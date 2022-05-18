import React from 'react';
import ViewGL from './ViewGL';
import * as THREE from 'three';

export default class Scene extends React.Component {
    private readonly canvasRef: React.RefObject<HTMLCanvasElement>;
    private viewGL: ViewGL | undefined;
    constructor(props:any) {
        super(props);
        this.canvasRef = React.createRef();
    }

    // ******************* COMPONENT LIFECYCLE ******************* //
    componentDidMount() {
        // Get canvas, pass to custom class
        let canvas : HTMLCanvasElement | THREE.OffscreenCanvas | undefined;
        canvas = this.canvasRef.current != null ? this.canvasRef.current : undefined; //fix undefined vs null typing

        this.viewGL = new ViewGL(canvas);

        // Init any event listeners
        window.addEventListener('mousemove', this.mouseMove);
        window.addEventListener('resize', this.handleResize);
    }

    componentDidUpdate(prevProps:Readonly<any>, prevState:Readonly<any>) {
        // Pass updated props to
        // @ts-ignore: property not exist
        const newValue = this.props.whateverProperty;
        // @ts-ignore: ignore viewGL undefined
        this.viewGL.updateValue(newValue);
    }

    componentWillUnmount() {
        // Remove any event listeners
        window.removeEventListener('mousemove', this.mouseMove);
        window.removeEventListener('resize', this.handleResize);
    }

    // ******************* EVENT LISTENERS ******************* //
    mouseMove = (event:any) => {
        // @ts-ignore: ignore possible undefined
        this.viewGL.onMouseMove();
    }

    handleResize = () => {
        // @ts-ignore: ignore possible undefined
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