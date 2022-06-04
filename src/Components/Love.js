import React from "react";
import Navbar from "./Navbar";


function Love() {

    return ( 

        <body id ="love-page">
                <Navbar/>
            <div className= "love--container">
        

            <div className ="love--container_left">
            <img className="love--pinwheel" src="../images/about-love-pinwheel.png" alt ="pinwheel"/>
            <p className ="love--top_text">I LOVE</p>

                 <p className ="love--interest">STUDIO GHIBLI</p>
                <p className ="love--interest">TRAVEL</p>
                <p className ="love--interest">GYM</p>
                <p className ="love--interest">BETTER CALL SAUL</p>
                <p className ="love--interest">ELDEN RING</p>
                <p className ="love--interest">CYCLING</p>
                <p className ="love--interest">STORIES</p>
                <p className ="love--interest">EXPLORING CULTURES</p>

            </div>
            <div className ="love--container_right">
            <div>
            <p className="love--recent_love_title"> RECENT LOVE </p>
            <img className="love--eldenring1" src="../images/about-love-elden_ring1.png" alt ="elden-ring-leyndall"/>
            <p className="love--recent_love_description"> THIS TARNISHED AINT PUTTING HIS FOOLISH AMBITIONS TO REST. </p>
            </div>
            </div>
            </div>
         
        </body>
    









    )
}


export default Love;