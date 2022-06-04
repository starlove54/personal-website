import React from "react";


function NotFound() {

    const styles1 = { 
        backgroundColor : "grey"
    }

    const styles2 = { 
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop : "20%"
        
    }

        return(  
            <body  style = {styles1}> 
            <div>
            <h1 style = {styles2}>404 YOU MAY BE AT THE WRONG ADDRESS FRAND!!????</h1>
            </div>
            </body>
      
        ) 
} 
    
 



export default NotFound;