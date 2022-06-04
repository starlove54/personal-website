import React from "react";
import {NavLink} from "react-router-dom"



function Navbar() {
    return (
        <nav className ="navbar">
            <p><NavLink to = "/"><span className="nav--elements">HOME</span>  /</NavLink></p>
            <p><NavLink to = "/about"><span className="nav--elements">ABOUT</span>  /</NavLink></p>
            <p><NavLink to = "/skills"><span className="nav--elements">SKILLS</span>  /</NavLink></p>
            <p><NavLink to = "/projects"><span className="nav--elements">PROJECTS</span>  /</NavLink></p>
            <p><NavLink to = "/contact"><span className="nav--elements">CONTACT</span> </NavLink></p>
        </nav> 
    )
}
export default Navbar;