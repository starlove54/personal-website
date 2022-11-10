import React from 'react';
import {BrowserRouter as Router,Route , Routes } from 'react-router-dom';
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";
import Slide5 from "./Slide5";
import Slide6 from "./Slide6";
import NotFound from "./NotFound";
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';
import Core from './Core';
import About from './About';
import Love from './Love';

function App(){
    return (
        <Router>
            <Routes >
            <Route exact path="/" element ={<Slide1/>}/>
            <Route path="/slide2" element ={<Slide2/>}/>
            <Route path="/slide3" element ={<Slide3/>}/>
            <Route path="/slide4" element ={<Slide4/>}/>
            <Route path="/slide5" element ={<Slide5/>}/>
            <Route path="/slide6" element ={<Slide6/>}/>
            <Route path="/contact" element ={<Contact/>}/>
            <Route path="/projects" element ={<Projects/>}/>
            <Route path="/skills" element ={<Skills/>}/>
            <Route path="/about" element ={<About/>}/>
            <Route path="/about/core" element ={<Core/>}/>
            <Route path="/about/love" element ={<Love/>}/>
            </Routes>
            </Router>
    ) 
} 
export default App;