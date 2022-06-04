import React from "react";
import Navbar from "./Navbar";
import {Link} from "react-router-dom"

function About() {


    // function waitBeforeNavigate1(){
    //     setTimeout(()=>{window.location= "/about/love" },2000)
    //     var love = document.querySelector(".about--love_image");
    //     love.classList.add("about--love_image-addedClass");
    //     document.querySelector(".about--core_image").classList.add("disabled")
    // }

    // function waitBeforeNavigate2(){
    //     setTimeout(()=>{window.location.pathname = "/core" },2000)
    //     var core = document.querySelector(".about--core_image");
    //     core.classList.add("about--core_image-addedClass");
    //     document.querySelector(".about--love_image").classList.add("disabled")
    // }

    return ( 

        <body id ="about-page">
                <Navbar/>
        <div className ="about--container">
            <div className ="about--left_container">
            {/* <img onClick={waitBeforeNavigate1} className ="about--love_image" src="../images/about-love-unselected.png" alt="love-pic"/> */}
            <Link to ="/about/love"> <img  className ="about--love_image" src="../images/about-love-unselected.png" alt="love-pic"/></Link>
            </div>
            <div className ="about--right_container">
            {/* <img onClick ={waitBeforeNavigate2} className ="about--core_image" src="../images/about-core-unselected.png" alt="book-pic"/> */}
            <Link  to ="/about/core"><img  className ="about--core_image" src="../images/about-core-unselected.png" alt="book-pic"/></Link>
            </div>
        </div>
        </body>
    )

}


export default About;