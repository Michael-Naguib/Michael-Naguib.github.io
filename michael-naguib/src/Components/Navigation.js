import React from 'react';
import {Navbar} from 'react-bootstrap';//,NavItem
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "gatsby"
// /import {getDisplayMode} from "../Util/util.js";
function Navigation(props) {

    // If the mode is defined then we use that mode else get the mode by the algorithm
    //var mode = !!props.darkmode?props.darkmode: getDisplayMode();
    var mode="dark"
    console.log("[Navigation.js Using "+mode+" mode]");

    //Hedgehog home link will not work in dev ... will work in production ...
    return(
        <Navbar expand="md" className="sticky-top" sticky="top" bg={mode} variant={mode} style={{top:"0",position:"fixed",width:"100%"}} >
            <Navbar.Brand><Link className={"nav-link"} to={"/"}> <span role={"img"} aria-label={"Hedgehog"}>🦔</span></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className={"nav-link"} to={"/#AboutMe"}> About Me</Link>
                    <Link className={"nav-link"} to={"/#Projects"}> Projects</Link>
                    <Link className={"nav-link"} to={"/#Contact"}> Contact</Link>
                    <Link className={"nav-link"} to={"/Demos"}> Demos</Link>
                    <Link className={"nav-link"} to={"/ArticlesPage"}> Articles</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

}

export default Navigation;
/* for another day...
*                 <Nav.Link href="#Posts">Posts</Nav.Link>
                <Nav.Link href="#Links">Links</Nav.Link>
* */