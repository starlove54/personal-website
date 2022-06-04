import React from "react";


function Card(props) {
    return ( 
            <div className = "projects--card"> 
                <img src= {`../images/${props.item.coverImg}`} className ="card--image"  alt ={`${props.item.title}`}/>
                <p className = "card--title">{props.item.title}</p>
                <p className = "card--description">{props.item.description}</p>
                <a href= {`${props.item.url}`}><button className="card--button">LAUNCH</button></a>
            </div>
    )
}
export default Card;