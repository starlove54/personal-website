import React from "react";
import Navbar from "./Navbar"; 
import {Link} from "react-router-dom";
import Footer from "./Footer";

function Slide5(){



    return  (
        <body id ="slide5-page">
                <div>
                <Navbar/>
                <main >
                <div className ="main--title" >
                <p className ="title5"></p>
                </div>
                <div className ="main--intro ">        
                <p className = "intro5"></p>
                </div>
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/projects"><div className ="main--moreinfo">
                <p className = "moreinfo_text">MORE INFO</p>
                </div>
                </Link>
                <div className = "main--navbullets5">
                <Link to="/"><div className = "navbullet5-1"></div></Link>
                <Link to="/slide2"><div className = "navbullet5-2"></div></Link>
                <Link to="/slide3"><div className = "navbullet5-3"></div></Link>
                <Link to="/slide4"><div className = "navbullet5-4"></div></Link>
                <Link to="/slide5"><div className = "navbullet5-5"></div></Link>
                <Link to="/slide6"><div className = "navbullet5-6"></div></Link>
                </div>
                </main>
                <Footer/>               

                </div>

        </body>

      



      

    )
}


export default Slide5;
