import React from 'react';
import {Navbar} from 'react-bootstrap';//,NavItem
import Nav from 'react-bootstrap/Nav';
//import { NavLink,Link } from 'react-router-dom'; // code works without it... thanks https://reactjsexample.com/hash-link-scroll-functionality-for-react-router/
import { HashLink as Link } from 'react-router-hash-link';
//import { LinkContainer } from 'react-router-bootstrap';

function Navigation() {
    //Hedgehog home link will not work in dev ... will work in production ...
    return(
        <Navbar className="sticky-top" sticky="top" bg="dark" variant="dark" style={{top:"0",position:"fixed",width:"100%"}}>
            <Navbar.Brand><Link className={"nav-link"} to={"/"}> 🦔</Link></Navbar.Brand>
            <Nav className="mr-auto">
                <Link className={"nav-link"} to={"/#AboutMe"}> About Me</Link>
                <Link className={"nav-link"} to={"/#Projects"}> Projects</Link>
                <Link className={"nav-link"} to={"/#Contact"}> Contact</Link>
                <Link className={"nav-link"} to={"/Demos"}> Demos</Link>
            </Nav>
        </Navbar>
    )

}

export default Navigation;
/* for another day...
*                 <Nav.Link href="#Posts">Posts</Nav.Link>
                <Nav.Link href="#Links">Links</Nav.Link>
* */