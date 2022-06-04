import React from "react";
import Navbar from "./Navbar"; 
import {Link} from "react-router-dom";
import Footer from "./Footer";

function Slide2(){
    return  (
        <body id ="slide2-page">
            <div>
            <Navbar/>
            <main >
            <div className ="main--title" >
            <p className ="title2"></p>
            </div>
            <div className ="main--intro ">        
            <p className = "intro2"></p>        
            </div>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/about"><div className ="main--moreinfo">
            <p className = "moreinfo_text">MORE INFO</p>
            </div>
            </Link>
            <div className = "main--navbullets2">
            <Link to="/"><div className = "navbullet2-1"></div></Link>
            <Link to="/slide2"><div className = "navbullet2-2"></div></Link>
            <Link to="/slide3"><div className = "navbullet2-3"></div></Link>
            <Link to="/slide4"><div className = "navbullet2-4"></div></Link>
            <Link to="/slide5"><div className = "navbullet2-5"></div></Link>
            <Link to="/slide6"><div className = "navbullet2-6"></div></Link>
            </div>
            </main>
            <Footer/>               

            </div>


        </body>

    


      

    )
}


export default Slide2;
