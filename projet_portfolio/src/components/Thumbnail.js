import React from 'react'
import '../styles/Thumbnail.css'

function Thumbnail (props){
    return(

        <div className='thumbnail' >
            <h1>{props.title}</h1>
            <aside>{props.description}</aside>
        </div>
    )
}

export default Thumbnail