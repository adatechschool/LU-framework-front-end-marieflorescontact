
import React from "react";
import './styles/App.css';
import Nav from './components/Nav.js'
import Projects from './components/Projects.js'
import ScrollTop from "./components/ScrollTop";

function App() {
    return (
        <div className="app imageCover" id="app">
            <Nav id="contact"/>
            <Projects id="project"/>
            <ScrollTop/>
        </div>
    );
}

export default App;
