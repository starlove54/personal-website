import React from "react";
import Navbar from "./Navbar"; 
import {Link} from "react-router-dom";
import Footer from "./Footer";

function Slide6(){



    return  (
        <body id ="slide6-page">

            <div>
            <Navbar/>
            <main >
            <div className ="main--title">
            <p className ="title6"></p>
            </div>
            <div className ="main--intro ">        
            <p className = "intro6"></p>
            </div>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/contact"><div className ="main--moreinfo">
                <p className = "moreinfo_text">MORE INFO</p>
                </div>
                </Link>
            <div className = "main--navbullets6">
            <Link to="/"><div className = "navbullet6-1"></div></Link>
            <Link to="/slide2"><div className = "navbullet6-2"></div></Link>
            <Link to="/slide3"><div className = "navbullet6-3"></div></Link>
            <Link to="/slide4"><div className = "navbullet6-4"></div></Link>
            <Link to="/slide5"><div className = "navbullet6-5"></div></Link>
            <Link to="/slide6"><div className = "navbullet6-6"></div></Link>
            </div>
            </main>
            <Footer/>               
            </div>
        </body>

       
      

    )
}


export default Slide6;
