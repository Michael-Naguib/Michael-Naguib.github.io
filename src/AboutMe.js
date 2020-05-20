import UnsplashPhoto from "./UnsplashPhoto.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import './AboutMe.scss';
import Image from "react-bootstrap/esm/Image";
//import Carousel from "react-bootstrap/Carousel";

function AboutMe(){
    return(
        <div id="AboutMe">

            <UnsplashPhoto
                imageUrl='https://images.unsplash.com/photo-1548983965-416c1920352e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
                photographerUrl="https://unsplash.com/@24ameer"
                photographer="Ameer Basheers"
                gradientRGBAfrom="rgba(4,7,25,1)"
                gradientRGBAmid="rgba(4,7,25,0.0)"
                gradientRGBAto="rgba(2,2,2,0.95)"
            >   <div className="AboutMe"></div>
                <Container>
                    <Row style={{padding:"0% 0% 10% 0%"}}>
                        <Col xs={12}><h1 style={{color:"white",marginTop:"100px"}} className="float-left" >About Me</h1></Col>
                        <Col xs={12} md={3} style={{marginTop:"50px",overflow:"hidden"}}>
                            <Image src={process.env.PUBLIC_URL+"/AboutMePhotoFixed.jpg"} roundedCircle fluid></Image>
                        </Col>
                        <Col xs={12} md={8} style={{marginTop:"50px",color:"white",fontSize:"1.9em"}}>
                             Hi, my name is Michael Naguib. I am a college student pursuing a BS in Computer Science and Mathematics.
                                I currently do research in multi-agent artificial intelligence and have experience with GPU accelerated computing.

                        </Col>
                        <Col style={{marginTop:"50px",color:"white",fontSize:"1.2em"}}>
                            <div className="text-left">
                                Often I will code a project simply because it sounds interesting. The solution to a problem is not always nearly as interesting
                                to me as the process needed to compute the solution. Understanding the fundamental logic and intuitive steps of a process for me is
                                one of the more rewarding aspects of my field of study; understanding the rationality of an individual's choices can inform me as to
                                similar manners of thinking for when I attempt to solve a new problem. I try to work smarter not harder, ironically however when you
                                can't work smarter, the smartest move is to work harder, as figuring it out will let you work smarter when you recognize the same issue
                                in the future.<br></br><br></br>
                                In my free time I will often take time to read, program, or hangout with friends. My hobbies include  XC Running 🏃, Coding 👨‍💻,
                                Drone Racing Quadcopters ✈️, & Boldering 🧗 . I am always up for a challenge whether it be abstract or otherwise.
                            </div>

                        </Col>
                    </Row>
                </Container>
            </UnsplashPhoto>
        </div>
    );
}

export default AboutMe;