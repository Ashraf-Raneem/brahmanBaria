import React from 'react'
import './cards.styles.css'

const Card = (props) => {
    return (
        <div className='cardDiv'>
            <img className='cardLogo' src={props.logo}></img>
            <div className='cardText'>
                <h3>{props.cardHeader}</h3>
                <p>{props.cardText}</p>
            </div>
            <button className='learnBtn'> {props.buttonText}</button>
        </div>
    )
}
export default Card