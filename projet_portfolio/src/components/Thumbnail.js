import React from 'react'
import '../styles/Thumbnail.css'
import Beatmaker from '../img/Beatmaker.png'
function Thumbnail (props){

    function changeBackground(e) {
        const appBackground = document.getElementById('app')
            appBackground.classList.add("imageCover"+props.id)
            appBackground.classList.add("imageCover")
    }

    function focusOnText(e) {
        const text = document.getElementById(props.id)
        text.classList.add("focus")
    }

    return(

        <div className='thumbnail' >
            <h1 id ={props.id} onMouseOver={focusOnText} >{props.title}</h1>
            <aside >{props.smallDescription}</aside>
        </div>
    )
}

export default Thumbnail