import React from 'react';
import UnsplashPhoto from "./UnsplashPhoto.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import {getDisplayMode} from "../Util/util";

function Media(){
    return(
        <Container>
            <Row>
                <Col xs={6} md={4} >
                    <a href="https://www.linkedin.com/in/michael-naguib-969591170/">
                        <Image className="ContactImage" style={{height:"80px"}} src={process.env.PUBLIC_URL+"/LI-Bug.svg.original.svg"}/>
                    </a>
                </Col>
                <Col xs={6} md={4} >
                    <a href="mailto:1Michael.Naguib@gmail.com">
                        <Image  className="ContactImage" style={{height:"90px"}}src={process.env.PUBLIC_URL+"/iconfinder_gmail_1220367.svg"}/>
                    </a>
                </Col>
                <Col xs={6} md={4} >
                    <a href="https://github.com/Michael-Naguib">
                        <Image className="ContactImage" style={{height:"90px"}}src={process.env.PUBLIC_URL+"/Octocat.svg"}/>
                    </a>
                </Col>
                <Col xs={6} md={4} >
                    <a href={process.env.PUBLIC_URL+"/Michael-Naguib-Resume-9-10-2021.pdf"} download>
                        <Image className="ContactImage" style={{height:"90px"}}src={process.env.PUBLIC_URL+"/icons8-document.svg"}/>
                    </a>
                </Col>
                <Col xs={6} md={4} >
                    <a href={process.env.PUBLIC_URL+"/Michael Naguib.vcf"}>
                        <Image className="ContactImage" style={{height:"88px"}}src={process.env.PUBLIC_URL+"/business.svg"}/>
                    </a>
                </Col>
                <Col xs={6} md={4} >
                    <a href="tel:919-710-9686">
                        <Image className="ContactImage" style={{height:"90px"}}src={process.env.PUBLIC_URL+"/communications.svg"}/>
                    </a>
                </Col>
            </Row>
        </Container>
    );
}
/*
function MyForm(){
    return(
        <Form action="mailto:1Michael.Naguib@gmail.com?subject='First Contact 🖖'" method="post" encType="text/plain" id="MyForm">
            <Form.Group controlId="formBasicEmail">
                <Form.Label >Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="pull-left" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Last, First" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label> Comments </Form.Label>
                <Form.Control placeholder="Comments"  as="textarea" rows="3" />
            </Form.Group>
            <input type="submit" value="Submit" form="MyForm"/>
            <Button variant="dark" type="submit" form="MyForm" value={"submit"}>
                Submit
            </Button>
        </Form>
    );
}
<Col xs={12} md={6} style={{color:"White",marginTop:"50px"}}>
    <MyForm/>
</Col>
*/

function Contact(){
    const dark= getDisplayMode()=="dark";
    const fontColor= dark?"white":"black";
    return(
        <div id="Contact">
            <UnsplashPhoto
                imageUrl= {
                    dark?
                    process.env.PUBLIC_URL+"/newman.JPG":
                    "https://images.unsplash.com/photo-1532637644947-13094c2745f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                }//'https://images.unsplash.com/photo-1493673272479-a20888bcee10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                photographerUrl={
                    dark?"#":""
                }
                photographer={
                    dark?"My Friend Ryan Dondalski":""
                }
                gradientRGBAfrom={dark?"rgba(0,0,0,1)":"rgba(255,255,255,0.7)"}
                gradientRGBAmid="rgba(0,0,0,0.0)"
                gradientRGBAto="rgba(0,0,0,1)"
            >
                <Container>
                    <Row style={{padding:"0% 0% 10% 0%"}}>
                        <Col xs={12}><h1 style={{color:fontColor,marginTop:"100px" }} className="float-left"> Contact </h1></Col>
                        <Col xs={12} md={6} style={{color:fontColor,fontSize:"100%",paddingTop:"100px"}}>
                           <h3>
                               Email: 1Michael.Naguib@gmail.com <br></br>
                           </h3>
                            <iframe style={{paddingTop:"20px"}}
                                    src="https://docs.google.com/forms/d/e/1FAIpQLScM_W7myy3rCBQEVk06pnWOU6WGQF9--ugdYgAhG50YFUxtHg/viewform?embedded=true"
                                    width="100%" height="673" frameBorder="0" marginHeight="0" marginWidth="0">Loading…
                            </iframe>
                        </Col>
                        <Col className="text-left" xs={12} md={6} style={{borderRadius:"0.25em",color:fontColor,paddingTop:"70px"}}>
                            <Media/>
                        </Col>
                    </Row>
                </Container>
                <br></br><br></br>
                <br></br><br></br>
                <br></br><br></br>

            </UnsplashPhoto>
        </div>
    )
}

export default Contact;