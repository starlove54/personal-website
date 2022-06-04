import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import data from "../data";


function Projects() {


    const card = data.map( item => (
          <Card
            key = {item.id}
            item = {item}
          />
    ))

    return ( 
      <body id ="projects-page">
        <Navbar/>
        <section className="cards-lists">
        {card}
        </section>
        </body>
    )
}


export default Projects;