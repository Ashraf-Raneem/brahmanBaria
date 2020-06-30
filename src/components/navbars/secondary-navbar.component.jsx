import React from 'react'
import './secondary-navbar.styles.css'
const SecondaryNavbar = ()=>{
    return (
        <div className='SecondayNavDiv'>
            <div class="secondarynav">
                <div class='secondarynavBrand'>
                    <a class='brand' href='#home'>BrahmanBaria City</a>
                </div>
                <div class='secondaryNavItems'>
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
        </div>
    )
}
export default SecondaryNavbar