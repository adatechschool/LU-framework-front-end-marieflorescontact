import React, {useEffect, useState} from 'react'
import {useWindowScroll} from "react-use"
import '../styles/ScrollTop.css'
import {FaArrowUp} from 'react-icons/fa';


function ScrollTop(){
    const { y: pageYOffset} = useWindowScroll()
    const [visible, setVisibility] = useState(false)
    useEffect(()=>{
        if(pageYOffset > 400){
            setVisibility (false)
        }
        else{
            setVisibility(true)
        }
    },  [pageYOffset])

    if (!visible){
        return false
    }
    const scrollToTop = () => window.scrollTo({top :0, behaviour :"smooth"})
    return(
        <div className= "scroll_to_top cursor-pointer text-center" onClick={scrollToTop}>
            <i className="icon fas fa-arrow-up"><FaArrowUp/></i>
        </div>
    )
}
export default ScrollTop
