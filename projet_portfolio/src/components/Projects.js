import React from 'react'
import Thumbnail from './Thumbnail.js'
import '../styles/Projects.css'
import Colors from '../static/MARIE_FLORES_colors_perfumes_NOMADE.jpg'
import Ormaie from '../static/MARIE_FLORES_ORMAIE_BADABOUM_BRUMES.jpg'
import Almost from '../static/MARIE_FLORES_FLEURS_14h59_2.jpeg'
import MarryMe from '../static/MARIE_FLORES_MARRY_ME_tasse.jpg'
import flower from '../static/Matilde.gif'

function Projects(){
    return(
        <div className='projects' >
            <Thumbnail className='projectsThumbnail'
                       image={Colors}
                       title='Colors'
                       type='Still Life'
                       smallDescription='Art direction and photography.'
                       id='1'
            />
            <Thumbnail
                className='projectsThumbnails'
                image={Ormaie}
                title='Ormaie'
                type='Still Life'
                smallDescription='Art direction and photography.'
                id='2'
            />
            <Thumbnail
                className='projectsThumbnails'
                image={Almost}
                title='Almost before we knew it...'
                type='Still Life'
                smallDescription='Art direction and photography.'
                id='3'
            />
            <Thumbnail
                className='projectsThumbnails'
                image={flower}
                title='Moving Images'
                type='Still Life'
                smallDescription= 'Vidéo, Gif'
                id='4'
            />
            <Thumbnail
                className='projectsThumbnails'
                image={MarryMe}
                title='Marry me'
                type='Still Life'
                smallDescription='Art direction and photography.'
                id='5'
            />

        </div>
    )
}

export default Projects