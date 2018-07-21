import React, { Component } from 'react';
import './NavButton.js'
import NavButton from './NavButton.js';

class Navbar extends Component {
    render() {
      return ( 
        <div className="Navbar">
            <NavButton href="#page1" text="Page 1"/>
            <NavButton href="#page2" text="Page 2"/>
            <NavButton href="#pagen" text="Page n"/>
        </div>
      );
    }
  }

export default Navbar;