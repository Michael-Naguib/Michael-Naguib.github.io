import * as THREE from 'three';
// import React from "react";
import { GPU } from 'gpu.js';


/*
* Default settings; Every settings object should have these properties;
* */
const FLOCKING_DEFAULT_SETTINGS = {
  particle_count:1000,
  time_step:0.0002,
  forces: {
    alignment:0.5,
    cohesion: 0.3,
    repulsion: 0.1,
    seeking: 0.1,
    air_resistance:0.0,
    bounding_box:12,
    force_limit: 0.5,
  },

  force_ranges:{
    alignment:12,
    cohesion: 16,
    repulsion: 10,
    seeking: 45,
  },
  camera_fov: 45,
  camera_pos:{
    x: 0, y:0,z:200
  },
  render_height: 500,
  render_width: Math.floor(1.618033*100),
  flocking_region:{
    x_min:0,
    x_max: 100,
    y_min:0,
    y_max: 100,
    z_min:0,
    z_max: 100,
  },

}

export default class FlockingView {

  constructor(canvasRef,initSettings = FLOCKING_DEFAULT_SETTINGS ) {

    // Flocking View Settings: (deep copy init) access this directly
    this.settings = JSON.parse(JSON.stringify(initSettings));
    // GPU Compute
    this.gpu = new GPU();

    // Scene_Template and Renderer
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({
      canvas: canvasRef,
      antialias: false,
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);

    // Camera Setup
    this.camera = new THREE.PerspectiveCamera( this.settings.camera_fov, this.settings.render_width / this.settings.render_height, 1, 1000 );
    this.camera.position.x = this.settings.camera_pos.x;
    this.camera.position.y = this.settings.camera_pos.y;
    this.camera.position.z = this.settings.camera_pos.z;
    this.scene.add( this.camera );

    // Init the simulation
    this.initFlocking()

    // Initial Render Loop Call With Current timestamp
    this.update(performance.now());
  }

  // ******************* Flocking Calculation ******************* //
  initFlocking(){
    // Three JS Stuff
    this.point_geometry =  new THREE.BufferGeometry();

    // Simulation Properties
    this.colors=[]
    this.positions=[]
    this.velocities=[]
    // this.masses=[]// TODO: future feature
    this.force_sum=[]

    // Init Colors (all black)
    const color = new THREE.Color(0,0,0);
    for(let i =0;i<this.settings.particle_count;i++){ // eslint-disable-line no-plusplus
      this.colors.push(color.r,color.g,color.b);
    }

    // Init Random Positions: (all within settings.flocking_region)
    for(let i =0;i<this.settings.particle_count;i++){ // eslint-disable-line no-plusplus
      // X Coordinate
      const xDelta = this.settings.flocking_region.x_max- this.settings.flocking_region.x_min
      this.positions.push(Math.floor(this.settings.flocking_region.x_min + xDelta*Math.random()));
      // Y Coordinate
      const yDelta = this.settings.flocking_region.y_max- this.settings.flocking_region.y_min
      this.positions.push(Math.floor(this.settings.flocking_region.y_min + yDelta*Math.random()));
      // Z Coordinate
      const zDelta = this.settings.flocking_region.z_min- this.settings.flocking_region.z_min
      this.positions.push(Math.floor(this.settings.flocking_region.z_min + zDelta*Math.random()));
    }

    // Init Random Velocities: (10% - 15%  the max world dim  per time_step)
    for(let i =0;i<this.settings.particle_count;i++){ // eslint-disable-line no-plusplus
      const randScale = (0.15-0.1)*Math.random() + 0.1
      // X Velocity
      const xDelta = this.settings.flocking_region.x_max- this.settings.flocking_region.x_min
      this.positions.push(Math.floor(randScale*xDelta));
      // Y Velocity
      const yDelta = this.settings.flocking_region.y_max- this.settings.flocking_region.y_min
      this.positions.push(Math.floor(randScale*yDelta));
      // Z Velocity
      const zDelta = this.settings.flocking_region.z_min- this.settings.flocking_region.z_min
      this.positions.push(Math.floor(randScale*zDelta));
    }

    // Init: Empty forces
    for(let i =0;i<this.settings.particle_count;i++){// eslint-disable-line no-plusplus
      this.force_sum.push(0.0);
    }


    // Three JS Stud
    this.point_geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(this.positions, 3)
    );
    this.point_geometry.setAttribute('color', new THREE.Float32BufferAttribute(this.colors, 3));

    this.point_material = new THREE.PointsMaterial({
      size: 3,
      vertexColors: true,
    });

    this.points = new THREE.Points(this.point_geometry, this.point_material);
    this.scene.add(this.points);
  }
  
  calculateFlockingStep(){// eslint-disable-line class-methods-use-this

      // KD Tree Region Partitioning
      // GPU Local Cluster Force Updates

  }

  // ******************* PUBLIC EVENTS ******************* //
  updateValue(value) { // eslint-disable-line class-methods-use-this, no-unused-vars
    // Whatever you need to do with React props
  }

  onMouseMove() { // eslint-disable-line class-methods-use-this
    // Mouse moves
  }

  onWindowResize(vpW, vpH) {
    // Update Settings
    this.settings.render_width = vpW;
    this.settings.render_height = vpH;
    // Update Camera
    this.camera.aspect = vpW / vpH;
    this.camera.updateProjectionMatrix();
    // Update Render
    this.renderer.setSize(vpW, vpH);
  }

  // ******************* RENDER LOOP ******************* //
  update(t) {// eslint-disable-line no-unused-vars
    // Perform Calculation
    this.calculateFlockingStep();
    // Testing Feature
    this.points.rotation.x += 0.001;
    this.points.rotation.y += 0.002;
    // Render
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.update.bind(this));
  }

}