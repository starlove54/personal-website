import React from "react";




function Footer()
{
    return (
        <div className= "footer"> 
        <p className = "footer--message"><span className="message-1">Designed</span> and <span className="message-2">Handcoded</span> with <img className="footer--heart" src="../images/heart.png" alt="heart"/></p>
        <div className="footer--icons">
        <a className="icons--twitter" href="https://twitter.com/anubhavnegi54"><img src="../images/twitter.png" alt ="twitter"/></a>
        <a className="icons--dribble" href="https://dribbble.com/anubhavnegi54"><img src="../images/dribble.png" alt ="dribble"/></a>
        <a className="icons--artstation" href="https://www.artstation.com/anubhavnegi54"><img src="../images/artstation.png" alt ="artstation"/></a>
        <a className="icons--instagram" href="https://www.instagram.com/anubhavnegi54/"><img src="../images/instagram.png" alt ="instagram"/></a>
        <a className="icons--github" href="https://github.com/starlove54"><img src="../images/github.png" alt ="github"/></a>
        <a className="icons--linkedin" href="https://www.linkedin.com/in/anubhavnegi54/"><img src="../images/linkedin.png" alt ="linkedin"/></a>
        <a className="icons--medium" href="https://guyfromhills.medium.com/"><img src="../images/medium.png" alt ="medium"/></a>
        </div>
        <p className ="footer--copyright">Copyright © 2022 Anubhav Negi. All Rights Reserved.</p>
        </div>
    )
}

export default Footer;