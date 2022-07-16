 import * as THREE from 'three';
import React from "react";
import { GPU } from 'gpu.js';

export default class ViewTemplate {

    constructor(canvasRef) {
        //GPU Compute
        const gpu = new GPU();

        // Window Size
        this.HEIGHT = 100;
        this.WIDTH = Math.floor(1.618033*this.HEIGHT);

        //Scene_Template and Renderer
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
    updateValue(value) {
        // Whatever you need to do with React props
    }

    onMouseMove() {
        // Mouse moves
    }

    onWindowResize(vpW, vpH) {
        this.renderer.setSize(vpW, vpH);
    }

    // ******************* RENDER LOOP ******************* //
    update(t) {
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.update.bind(this));
    }
}