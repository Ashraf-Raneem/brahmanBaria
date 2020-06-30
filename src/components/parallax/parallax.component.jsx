import React from 'react'
import './parallax.styles.css'

const ParallaxImage = (props) => {
    return(
        <div className='parallaxImage'>
            <div className='parallaxText'>
                {props.children}
            </div>
        </div>
    )
}
export default ParallaxImage