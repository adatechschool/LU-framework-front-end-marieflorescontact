import React from 'react'
import Thumbnail from './Thumbnail.js'
import '../styles/Projects.css'
import jeu_de_pong from '../img/Jeu_de_pong_pico-8.png'
import ip_adresse_tracker from '../img/ip_adresse_tracker.png'
import Launch_countdown_timer from '../img/Launch_countdown_timer.png'
import Beatmaker from '../img/Beatmaker.png'
import flower from '../img/flower.png'

function Projects(){
    return(
        <div className='projects' >
            <Thumbnail className='projectsThumbnail'
                       image={Beatmaker}
                       title='Beatmaker'
                       type='Desktop App'
                       smallDescription= 'play drums with your keybord.'
                       description='play drums with your keybord.'
                       techno='CSS/HTML/JS'
                       github='https://github.com/marieflorescontact/Drum-Kit'
                       id='1'



            />
            <Thumbnail
                className='projectsThumbnails'
                image={Launch_countdown_timer}
                title='Countdown timer'
                type='Desktop App'
                smallDescription='remaing time before the end of my studies at Ada tech School.'
                description='remaing time before the end of my studies at Ada tech School.'
                techno='HTML/SASS/JS'
                github='https://github.com/marieflorescontact/Launch-countdown-timer'
                id='2'
            />
            <Thumbnail
                className='projectsThumbnails'
                image={ip_adresse_tracker}
                title='Ip-tracker'
                type='Desktop App'
                smallDescription='locate an IP adresse (I know...it sucks)'
                description='locate an IP adresse (I know...it sucks)'
                techno='CSS/HTML/JS'
                github='https://github.com/marieflorescontact/ip-address-tracker'
                id='3'
            />
            <Thumbnail
                className='projectsThumbnails'
                image={flower}
                title='Hate shield'
                type='Addon'
                smallDescription= 'a shield to protect you from hate online.'
                description='a shield to protect you from hate online. As of now it only works in french and allows you to replace racist, sexist and homophobic insults with 🌸'
                techno='CSS/HTML/JS'
                github='https://github.com/marieflorescontact/extension_firefox_hate_shield'
                id='4'
            />
            <Thumbnail
                className='projectsThumbnails'
                image={jeu_de_pong}
                title='Pong on pico-8'
                type='Retro game'
                smallDescription='pong revisited made on Pico 8 plateform...'
                description='pong revisited made on Pico 8 plateform...'
                techno='Lua'
                github='https://github.com/marieflorescontact/PC-pico8-maraalno'
                id='5'
            />

        </div>
    )
}

export default Projects