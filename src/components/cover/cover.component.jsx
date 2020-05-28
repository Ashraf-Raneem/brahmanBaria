import React from 'react'
import ReactRotatingText from 'react-rotating-text'
import './cover.styles.css'
import CarouselBg from '../carousel/caraousel.component'
import {Button} from 'react-bootstrap'
import About from '../about/about.component'
import Logo from '../../picture/leafLogo.png'

const Cover = ()=>{
    return (
        <div className='coverDiv'>
            <div class="topnav">
                <div class='topnavBrand'>
                    <a class='brand'>BrahmanBaria City</a>
                </div>
                <div class='navItems'>
                    <a class="active" href="#home">Home</a>
                    <a href="#news">About Us</a>
                    <a href='#phoneNumbers'>Blog</a>
                    <a href='#phoneNumbers'>Articles</a>
                    <a href='#phoneNumbers'>Phone Numbers</a>
                    <a href='#phoneNumbers'>Administration</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">Advertise</a>
                </div>
            </div>
            <CarouselBg className='carousel'></CarouselBg>
            <div className='coverText'>
                <h2>Welcome to BrahmonBaria</h2>
                <h4>The City of <ReactRotatingText color={'#5E0057'} items={['Hope', 'Wonders', 'Opportunities']}></ReactRotatingText></h4>
                <br></br>
                <button className='learnBtn'>Learn More</button>
                <button className='contactBtn'>Contact</button>
            </div>
        </div>
    )
}
export default Cover