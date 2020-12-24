import React from "react"

function Footer(){
    return(
        <div className="Footer" style={{background:"Black",color:"white"}}>
             Site Created & Coded by Michael Naguib, Some Icons & Images provided by:
            <a className="ProjectsLink" href="https://icons8.com">Icons8</a>,
            <a className="ProjectsLink" href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a>,
            <a className="ProjectsLink" href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a>
        </div>
    );
}

export default Footer;