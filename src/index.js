import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import "./css/style.css"

const root = document.querySelector('#root');
ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
