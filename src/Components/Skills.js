import React from "react";
import Navbar from "./Navbar";



function Skills() {


    return ( 
        <body id ="skills-page">
        <Navbar/>
        <div className ="skills--container">
                 <div className ="skills--row1">
                    <div className ="skills--lists" >HTML/CSS </div>
                    <div className ="skills--lists" >JAVASCRIPT</div>
                    <div className ="skills--lists" >JAVA</div>
                    <div className ="skills--lists" >C++ </div>
                    <div className ="skills--lists" >REACT</div>
                    <div className ="skills--lists" >REDUX</div>
                    <div className ="skills--lists" >JQUERY</div>
                 </div>
                <p className ="skills--title_text">Skills</p>
                 <div className ="skills--row2">
                 <div className ="skills--lists" >VIDEO PRODUCTION</div>
                    <div className ="skills--lists" >CREATIVE SUITE</div>
                    <div className ="skills--lists" >BLENDER 3D</div>
                    <div className ="skills--lists" >UNREAL ENGINE</div>
                 </div>
            </div>
    </body>
    )
}



export default Skills;