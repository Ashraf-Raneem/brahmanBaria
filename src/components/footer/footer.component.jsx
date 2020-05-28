import React from 'react'
import './footer.styles.css'
import { Container,Col,Row} from 'reactstrap'

const Footer = () => {
    return (
        <div className='footerDiv'>
            <Container>
                <Row>
                    <Col xs='3'>
                        <div className='footerColumns'>
                            <h2>Website Details</h2>
                            <p>This is not an official website but it has all the details about BrahmanBaria
                                taken from Government websites.</p>
                        </div>
                    </Col>
                    <Col xs='3'>
                        <div className='footerColumns'>
                            <h2>Gov Websites</h2>
                            <ul>
                                <li>Upazilas</li>
                                <li>Unions</li>
                                <li>Parishads</li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs='3'>
                        <div className='footerColumns'>
                            <h2>Important Sites</h2>
                            <ul>
                                <li>Disclaimer</li>
                                <li>Privacy and Policy</li>
                                <li>Terms and Conditions</li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs='3'>
                        <div className='footerColumns'>
                            <h2>Quick Links</h2>
                            <ul>
                                <li>Our Blogs</li>
                                <li>Write a post</li>
                                <li>Villages</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='bottomFooter'>
                <p className='leftAlign'>This page has been constructed using REACT framework and is not Responsive</p>
                <p className='rightAlign'>Visit my portfolio here</p>
            </div>
        </div>
    )
}
export default Footer