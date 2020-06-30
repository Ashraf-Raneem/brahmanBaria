import React from 'react'
import './about-page.styles.css'

import Raneem01 from '../../picture/raneem01.jpg'
import Raneem02 from '../../picture/RaneemPortfolio.jpg'

import ParallaxImage from '../../components/parallax/parallax.component'
import SecondaryNavbar from '../../components/navbars/secondary-navbar.component'

const AboutPage = () => {
    return(
        <div className='aboutPageDiv'>   
            <SecondaryNavbar/>
            <ParallaxImage>
                <h2>The site has been created by Ashraful Hassan</h2>
                <h2>A full stack developer</h2>
            </ParallaxImage>
            <div className='developersInfo'>
                <div className='row'>
                    <div className='flex-child imgDiv'>
                        <img className='developersImg' src={Raneem01}></img>
                    </div>
                    <div className='flex-child developersText'>
                        <h3>Who am I ?</h3>
                        <p>This is Ashraf, a full stack developer from Dhaka, Bangladesh. BrahmanBaria
                            is where I am originally from, hence I decided to add a little tribute to 
                            my forefathers lands. I am a mainly a React developer with a degree of Computer
                            Science and Engineering from Independent University, Bangladesh. 
                        </p>
                        <button className='contactBtn'>Visit Portfolio</button>
                    </div>
                </div>
                <div className='row' src={Raneem02}>
                    <div className='flex-child developersText'>
                        <h3>Why this Project ?</h3>
                        <p> This project was created initially to demonstrate my UI and UX skills for
                            my recruiters and also for the fact that BrahmanBaria City is my roots. 
                            Furthermore, this site is gonna make life easier for the people looking to find 
                            information about the city. 
                        </p>
                        <button className='contactBtn'>See GitHub Repo</button>
                    </div>
                    <div className='flex-child imgDiv'>
                        <img className='developersImg' src={Raneem02}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutPage