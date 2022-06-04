import React from "react";
import Navbar from "./Navbar"; 
import {Link} from "react-router-dom";
import Footer from "./Footer";

function Slide4(){



    return  (

        <body id ="slide4-page">
            
            <div>
            <Navbar/>
            <main >
            <div className ="main--title" >
            <p className ="title4"></p>
            </div>
            <div className ="main--intro ">        
            <p className = "intro4"></p>
            </div>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/skills"><div className ="main--moreinfo">
            <p className = "moreinfo_text">MORE INFO</p>
            </div>
            </Link>
            <div className = "main--navbullets4">
            <Link to="/"><div className = "navbullet4-1"></div></Link>
            <Link to="/slide2"><div className = "navbullet4-2"></div></Link>
            <Link to="/slide3"><div className = "navbullet4-3"></div></Link>
            <Link to="/slide4"><div className = "navbullet4-4"></div></Link>
            <Link to="/slide5"><div className = "navbullet4-5"></div></Link>
            <Link to="/slide6"><div className = "navbullet4-6"></div></Link>
            </div>
            </main>
            <Footer/>               

            </div>
        </body>




      

    )
}


export default Slide4;
