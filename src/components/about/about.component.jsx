import React from 'react'
import './about.styles.css'
import UnderCarousal from '../../picture/UnderCarousal.png'
import WebsiteIcon from '../../picture/WebsiteIcon.png'
import InboxIcon from '../../picture/InboxIcon.png'
import WriteIcon from '../../picture/WriteIcon.png'
import BBMap from '../../picture/BBMap.png'
import {Col,Container,Row} from 'reactstrap'

const About = () => {
    return (
        <div className='underCarousel'>
        <img className='aboutBg' src={UnderCarousal}></img>
            <div className='gridLayout'>
                <Container>
                    <Row>
                        <Col xs='4'>
                            <div className='detailsSection'>
                                <div className='aboutIcon websiteIcon'>
                                    <img src={WebsiteIcon}></img>
                                </div>
                                <div className='sectionText'>
                                    <h3>Information</h3>
                                    <p>Here you'll get each and every possible details of BrahmanBaria City. We've divided all the 
                                        details in different sections, which will give you a brief details. </p>
                                    <button className='learnBtn'>See More</button>
                                </div>

                            </div>
                        </Col>
                        <Col xs='4'>
                            <div className='detailSection'>
                                <div className='aboutIcon writeIcon'>
                                    <img src={WriteIcon}></img>
                                </div>
                                <div className='sectionText'>
                                    <h3>Our Blog</h3>
                                    <p>We are updating news, events, and many other updates on our news section. 
                                        The latest news section will help you to be updated.</p>
                                        <button className='learnBtn'>Read Our Blog</button>
                                </div>
                            </div>
                        </Col>
                        <Col xs='4'>
                            <div className='detailSection'>
                                <div className='aboutIcon inboxIcon'>
                                    <img src={InboxIcon}></img>
                                </div>
                                <div className='sectionText'>
                                    <h3>Write to Us</h3>
                                    <p>We don't want any updates to be missed, so we have created guest 
                                        post section where anyone can write posts, news, events or articles.</p>
                                    <button className='learnBtn'>Write Anything</button>   
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className='midSection'>
                    <h2>About the City</h2>
                    <Container>
                        <Row>
                            <Col xs='6'>
                                <div className='midText'>
                                    <p>Brahmanbaria was a part of Samatata region of the ancient Bengal.
                                        The first and temporary capital of Isa Khan was at Sarail,
                                         located at 10 km north of Brahmanbaria Town. 
                                         Brahmanbaria was made one of the 3 Sub-divisions of 
                                         Comilla District by the British rulers in 1790. 
                                         Brahmanbaria Municipality was established in 1868. 
                                         It became part of East Pakistan in 1947 which eventually 
                                         became independent Bangladesh in 1971.</p>
                                    <br></br>
                                    <button className='learnBtn'>History</button>
                                </div>
                            </Col>
                            <Col xs='6'>
                                <div className='bbMap'>
                                    <img src={BBMap}></img>
                                </div>
                            </Col>  
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}
export default About