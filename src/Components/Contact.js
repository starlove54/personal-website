import React from "react";
import emailjs from "emailjs-com"
import Navbar from "./Navbar";

function Contact() {

    const [messageSent, setMessageSent]  = React.useState(false);
    const [disable, setDisable] = React.useState(false);

    function displayMessage() {
        setMessageSent( prevState => !prevState);
    }

    // send message to mail 
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_ibqx6rg","template_rmvlugc",e.target, "X8boVEzI-OuYoHU2I"   )
        .then(res => {
            console.log(res);
        }).catch(err => console.log(err))

        //call displayMessage() when message is sent
        displayMessage();
        disableButton();
    }

    function disableButton() {
        setDisable(prevState => !prevState);
    }

    return (
        <body id ="contact-page" >
        <Navbar/>
        <div className = "contact--container">
        {messageSent && <h1 className ="contact--sentmessage">Your message has been sent!</h1>}
         <img className ="contact--image" src="../images/card-frame.png" alt="frame"/>
            <div className ="contact--card_left" >
            <p className="contact--heading">REACH ME</p>
            <p className="contact--text1">If you want to send a  direct message please fill out the form on right and click on the send button. I will try to respond as soon  as possible.</p>
            <p className="contact--text2">I am quite active on twitter which could also be used to engage directly with me. Follow me <a href="https://twitter.com/guyfromhills"><b>@guyfromhills</b></a> on twitter.</p>
             </div>

                <div className ="contact--card_right">
                <p className="contact--username">NAME:*</p>
                <img src="../images/contact_name.png" className="contact--username_box" alt ="namebox"/>
                <p className="contact--useremail">EMAIL:*</p>
                <img src="../images/contact_name.png" className="contact--useremail_box" alt ="emailbox"/>
                <p className="contact--textarea">MESSAGE:* <span className ="contact--char_limit"> (800 chars max)</span></p>
                <img src="../images/contact_textarea.png" className="contact--textarea_box" alt ="textareabox"/>
                <form onSubmit={sendEmail}  className = "contact--form"> 
                <input  type="text" name="name" placeholder="Your Name" required />
                <br/>
                <input className ="contact--input_useremail"  type="email" name="email" placeholder="Your Email" required />
                <br/>
                <br/>
                <br/>
                <br/>
                <textarea maxLength={800} placeholder="Your Message" name="message" required/>
                <br/>
                <br/>
                <button disabled ={disable}  className = "contact--button">SEND</button>
                </form>
                </div>
        
        </div>
        </body>
    )
}
 export default Contact;