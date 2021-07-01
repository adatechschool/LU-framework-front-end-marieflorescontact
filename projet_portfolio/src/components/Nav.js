import React, {useState} from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Projects from './Projects.js'
import {FaAlignJustify, FaEyeSlash} from 'react-icons/fa';
import About from './About.js'
import Modal from 'react-modal';
import '../styles/Nav.css'

function Nav () {
    const [modalIsOpen, setModalIsOpen] = React.useState(false)
    const setModalIsOpenToTrue = () => {
        setModalIsOpen(true)
    }
    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }
    const iconStyles = { color: "white", fontSize: "1.2em" };
    return (
        <BrowserRouter>
            <div className='App'>
                <div className='navigation' >
                    <div className='navigation-sub'>
                        <Link
                            to='/projects'
                            className='item'
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            MARIE FLORES
                        </Link>
                        <Link
                            to='/about'
                            className='item'
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <FaAlignJustify classname="icon" onClick = {setModalIsOpenToTrue}/>
                            <Modal isOpen={modalIsOpen}  onRequestClose={setModalIsOpenToFalse} className="modal isOpenModal">
                                <FaEyeSlash classname="iconCloseModal" onClick = {setModalIsOpenToFalse} style ={iconStyles}/>
                                <h1>My name is Marie Flores.<br/>
                                I'm a software developer based in Paris. I'm particularly interested in javascript, Node.JS, React.<br/>
                                Find me on <a href ="https://github.com/marieflorescontact" target ="_blank" className="items">Github</a>, <a href ="https://www.linkedin.com/in/marie-flores-63110917/" target ="_blank" className="items">Linkedin</a> or <a href ="https://www.instagram.com/marieflorescontact/" target ="_blank" className="items">Instagram</a>. If you want to know more, don't hesitate to <a href ="mailto:marie.flores@student.adatechschool.fr
                                " target ="_blank" className="items">get in touch!</a>
                                </h1>

                            </Modal>

                        </Link>

                    </div>
                </div>
                <Route path='/projects' component={Projects} />
                <Route path='/about' component={About} />
            </div>
        </BrowserRouter>
    )
}

export default Nav