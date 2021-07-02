import React from 'react'
import '../styles/Thumbnail.css'


function Thumbnail (props){


    function changeBackground(e) {
        const appBackground = document.getElementsByClassName('app')
        for(let i = 0; i < appBackground.length; i++) {
            appBackground[i].style.backgroundImage = `url(${props.image})` ;
        }
    }

    function focusOnText(e) {
        const text = document.getElementById(props.id)
        for (let i =0; i < text.length; i++){
            text.style.color = '#ffffff'
            text.style.transition = 'transition: 0.3s'
        }
    }

    return(

        <div className='thumbnail'
             onMouseOver={changeBackground}
        >
            <h1 id ={props.id}
                onMouseOver={focusOnText} >{props.title}</h1>
            <aside >{props.smallDescription}</aside>
        </div>
    )
}

export default Thumbnail