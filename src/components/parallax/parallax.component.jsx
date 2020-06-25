import React from 'react'
import './parallax.styles.css'
import Random from '../../picture/randomBg.jpg'
import {Parallax} from 'react-scroll-parallax'

const ParallaxImage = () => {
    return(
    <Parallax className="custom-class" y={[20,-20]} tagOuter="figure">
        <img src={Random} className='parallaxImage' />
    </Parallax>
    )
}
export default ParallaxImage