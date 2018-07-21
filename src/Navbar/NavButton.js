import React from 'react';


//Creates a Nav Button
function NavButton(props){
    return(
        <a className="Nav-button" href={props.href}>
            <div class="Nav-button-text">
            {props.text}
            </div>
        </a>
    );
}

export default NavButton;