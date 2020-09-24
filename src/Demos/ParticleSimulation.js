import React from 'react';
import * as THREE from 'three';
import Navigation from "../Navigation";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

class Simulation extends React.Component{
    constructor(props){
        super(props);

        // Three JS Setup
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.scene.background = new THREE.Color( 0xff0000 );
        document.body.appendChild( this.renderer.domElement );
        //Camera Setup
        this.camera.position.z = 15;

        // Basic Geometry: CUBE
        this.geometry = new THREE.SphereGeometry(1,25,25);
        this.material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
        this.cube = new THREE.Mesh( this.geometry, this.material );
        this.scene.add( this.cube );
        /*
        //Point cloud instancing
        var MAX_POINTS= 500;
        //this.pointInformation= new THREE.Geometry();// non buffer this.pointInformation.vertices.push(new THREE.Vector3(1,2,3));

        var geometry = new THREE.BufferGeometry()
        var positions = new Float32Array( MAX_POINTS * 3 ); // 3 vertices per point\
        geometry.setAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );

        var pointMaterial = new THREE.PointsMaterial();
        pointMaterial.color = new THREE.Color("white");
        pointMaterial.size = 1;
        pointMaterial.sizeAttenuation = false;
        var pointCloud = new THREE.Points( this.pointInformation, pointMaterial )
        var positions = pointCloud.geometry.setAttribute("position",new Float32Array( MAX_POINTS * 3 ); // 3 vertices per point\)

        var x, y, z, index;
        x = y = z = index = 0;

        for ( var i = 0, l = MAX_POINTS; i < l; i ++ ) {

            positions[ index ++ ] = x;
            positions[ index ++ ] = y;
            positions[ index ++ ] = z;

            x += ( Math.random() - 0.5 ) * 30;
            y += ( Math.random() - 0.5 ) * 30;
            z += ( Math.random() - 0.5 ) * 30;

        }
        this.scene.add(pointCloud);
        */
        //Basic Wire Frame
        var size=30;
        var geometry = new THREE.BoxGeometry( size,size,size );
        var wireframe = new THREE.WireframeGeometry( geometry );
        var line = new THREE.LineSegments( wireframe );
        line.material.depthTest = true;
        line.material.opacity = 1;
        line.material.transparent = true;
        this.scene.add( line );
        /*for(var i=  0; i<100; i++){
            this.pointInformation.vertices.push(new THREE.Vector3(15*Math.random(),15*Math.random(),15*Math.random()));
        }*/

        //Render the Scene
        this.renderer.render( this.scene, this.camera );
        //Orbit Controls
        this.controls = new OrbitControls( this.camera, this.renderer.domElement );
        //artificial time
        this.atime=0;

    }
    componentDidMount() {
        window.addEventListener('resize', this.handleResize, false);
        requestAnimationFrame( ()=>{this.animate()} );
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize, false);
    }
    handleResize = () => {
        // thanks & credit: https://stackoverflow.com/questions/20290402/three-js-resizing-canvas
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    animate() {
        // Get the next frame (async call)
        requestAnimationFrame( ()=>{this.animate()} );
        //Do the next animation work
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;

        var scale = 5
        this.cube.position.x = 10*Math.sin(this.atime*2);
        this.cube.position.y=10*Math.cos(this.atime*2);
        this.cube.position.z+=scale*(Math.random()-0.5);
        var bound=15
        if(Math.abs(this.cube.position.x) >bound){
            this.cube.position.x = this.cube.position.x%bound;
        }
        if(Math.abs(this.cube.position.y) >bound){
            this.cube.position.y = this.cube.position.y%bound;
        }
        if(Math.abs(this.cube.position.z) >bound){
            this.cube.position.z = this.cube.position.z%bound;
        }
        this.atime+=0.01;

        //Update the renderer and controls
        this.renderer.render( this.scene, this.camera );
        this.controls.update();
    }
    render(){
        return(<div className="Simulation">

        </div>);
    }
}
const devMode = false;
//https://threejsfundamentals.org/threejs/lessons/threejs-primitives.html
function ParticleSimulation() {
    return (
        devMode ? <div className="ParticleSimulation">
            <Navigation/>
            <Simulation/>
            </div>: <div className="ParticleSimulation">
            Cool Code Comming Check back later!

        </div> );
}

export default ParticleSimulation;