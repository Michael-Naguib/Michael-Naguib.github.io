import React, { Component } from 'react';

//thanks to https://jonsuh.com/hamburgers/#sass
//toggle nav visibility
var toggleNavButtonVisibility = function(){
    var navButtons= document.getElementsByClassName("Nav-button");
    //console.log(navButtons)
    for(var i=0; i<navButtons.length; i++){
        var button=navButtons[i]
        button.style.display = button.style.display !== 'inline-block' ? 'inline-block' : 'none';
    }
    var navnav = document.getElementById("Nav-Nav");
    console.log(navnav)
    navnav.classList.toggle("is-active");
};

function NavNav(props){
    return(
        <button id="Nav-Nav" className="Nav-Nav hamburger hamburger--collapse" type="button" onClick={toggleNavButtonVisibility}>
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
    );
}
export default NavNav;