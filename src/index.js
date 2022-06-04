import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import "./css/style.css"
import { HashRouter} from "react-router-dom";



// slash (default) /#/
// noslash /#
// hashbang  /#!/
// basename ="/something"

ReactDOM.render(
    <HashRouter hashType ="hashbang"  >
        <App/>
    </HashRouter>
 , document.querySelector( "#root"));