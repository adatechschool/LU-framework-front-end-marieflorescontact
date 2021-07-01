
import React from "react";
import './styles/App.css';
import Nav from './components/Nav.js'
import About from './components/About.js'
import Projects from './components/Projects.js'
import ScrollTop from "./components/ScrollTop";

function App() {
    return (
        <div className="app" id="app">

            <Nav id="contact"/>
            <Projects id="project"/>
            <About id="about"/>
            <ScrollTop/>
        </div>
    );
}

export default App;
