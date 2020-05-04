import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation() {

    return(
        <Navbar className="sticky-top" sticky="top" bg="dark" variant="dark" style={{top:"0",position:"fixed",width:"100%"}}>
            <Nav className="mr-auto">
                <Nav.Link href="#AboutMe">About Me</Nav.Link>
                <Nav.Link href="#Projects">Projects</Nav.Link>
                <Nav.Link href="#Contact">Contact</Nav.Link>

            </Nav>
        </Navbar>
    )

}

export default Navigation;
/* for another day...
*                 <Nav.Link href="#Posts">Posts</Nav.Link>
                <Nav.Link href="#Links">Links</Nav.Link>
* */