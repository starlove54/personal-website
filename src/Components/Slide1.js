import React from "react";
import Navbar from "./Navbar"; 
import Footer from "./Footer";
import {Link} from "react-router-dom"

function Slide1(){
    return  (
        <body id="slide1-page">
            <div>
            <Navbar/>
            <main  >
            <div className ="main--title" >
            <p className ="title1"></p>
            </div>
            <div className ="main--intro ">        
            <p className = "intro"></p>         
            </div>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/about"><div className ="main--moreinfo">
            <p className = "moreinfo_text"> MORE INFO </p>
            </div>
            </Link>
            <div className = "main--navbullets">
            <Link to="/"><div className="navbullet-1"></div></Link>
            <Link to="/slide2"><div className = "navbullet-2"></div></Link>
            <Link to="/slide3"><div className = "navbullet-3"></div></Link>
            <Link to="/slide4"><div className = "navbullet-4"></div></Link>
            <Link to="/slide5"><div className = "navbullet-5"></div></Link>
            <Link to="/slide6"><div className = "navbullet-6"></div></Link>
            </div>
            </main>
            <Footer/>               
            </div>
        </body>
    )
}

export default Slide1;
