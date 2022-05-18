import * as THREE from 'three';
import React from "react";

export default class ViewGL{
    private scene: THREE.Scene;
    private renderer: THREE.WebGLRenderer;
    private camera: THREE.PerspectiveCamera;
    private HEIGHT = 100;
    private WIDTH = Math.floor(1.618033*this.HEIGHT);

    constructor(canvasRef:  HTMLCanvasElement | THREE.OffscreenCanvas | undefined) {
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer({
            canvas: canvasRef,
            antialias: false,
        });

        this.camera = new THREE.PerspectiveCamera( 45, this.WIDTH / this.HEIGHT, 1, 1000 );
        this.scene.add( this.camera );

        // Create meshes, materials, etc.
        //this.scene.add(myNewMesh);

        // Initial Render Loop Call With Current timestamp
        this.update(performance.now());
    }

    // ******************* PUBLIC EVENTS ******************* //
    updateValue(value:any) {
        // Whatever you need to do with React props
    }

    onMouseMove() {
        // Mouse moves
    }

    onWindowResize(vpW:number, vpH:number) {
        this.renderer.setSize(vpW, vpH);
    }

    // ******************* RENDER LOOP ******************* //
    update(t:DOMHighResTimeStamp ) {
        this.renderer.render(this.scene, this.camera);

        requestAnimationFrame(this.update.bind(this));
    }
}