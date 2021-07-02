import React, {useState}from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Projects from './Projects.js'
import {FaAlignJustify} from 'react-icons/fa';
import Modal from 'react-modal';
import '../styles/Nav.css'
import ScrollTop from "./ScrollTop";

function Nav () {
    const [modalIsOpen, setModalIsOpen] = React.useState(false)
    const setModalIsOpenToTrue = () => {
        setModalIsOpen(true)
    }
    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }
    return (
        <BrowserRouter>
            <div className='App'>
                <div className='navigation' >
                    <div className='navigation-sub'>
                        <Link
                            to='/projects'
                            className='item'
                        >
                            MARIE FLORES
                        </Link>
                        <Link

                            className='item'

                        >
                            <FaAlignJustify classname="icon" onClick = {setModalIsOpenToTrue}/>
                            <Modal isOpen={modalIsOpen}  onRequestClose={setModalIsOpenToFalse} className="modal isOpenModal">
                                <h1 onClick = {setModalIsOpenToFalse}>My name is Marie Flores.<br/>
                                I'm a still life photographer based in Paris. I'm particularly interested in design and magic. <br/>
                                Find me on <a href ="https://www.instagram.com/marieflorescontact/" target ="_blank" className="items">Instagram</a>. If you want to know more, don't hesitate to <a href ="mailto:marie.flores@student.adatechschool.fr
                                " target ="_blank" className="items"><nobr>get in touch!</nobr></a>
                                </h1>
                                {ScrollTop}
                            </Modal>

                        </Link>

                    </div>
                </div>
                {/*<Route path='/projects' component={Projects} />*/}
            </div>
        </BrowserRouter>
    )
}

export default Nav