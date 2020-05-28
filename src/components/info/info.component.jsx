import React from 'react'
import './info.styles.css'
import {Col,Container,Row} from 'reactstrap'
import InfoBG from '../../picture/infoBg-bb.jpg'
import Card from '../cards/cards.component'
import BookLogo from '../../picture/bookLogo.jpeg'
import TruckLogo from '../../picture/truckLogo.png'
import UpazilaLogo from '../../picture/UpazilaLogo.png'
const Info = () => {
    return (
        <div className='infoDiv'>
            <div className='infoContainer'>
                <h2>Our BrahmanBaria</h2>
                <Container>
                    <Row>
                        <Col xs = '4' >
                            <Card cardHeader = 'Education' logo={BookLogo} 
                            cardText='Brahmanbaria has about 40 colleges and universities. 
                            BrahmanBaria is also famous for many Pvt. & Government Schools. 
                            It also has Pvt Institutions which serves a quality education to the students of BrahmanBaria'
                            buttonText='All Educations'></Card>
                        </Col>
                        <Col xs='4'>
                            <Card cardHeader='Transport' logo={TruckLogo} 
                            cardText='There are almost every facilities are available for transport in BrahmanBaria. Bus, Train, Auto, Small Rickshaw. 
                            Whether it is small or a long journey all the transport facilities are available here. Also for tickets go for this link' 
                            buttonText='Available Transport'></Card>
                        </Col>
                        <Col xs='4'>
                            <Card cardHeader='Upazilas' logo={UpazilaLogo} 
                            cardText='There are about 9 Upazilas in the BrahmanBaria District. They are Brahmanbaria Sadar,
                            Ashuganj, Nasirnagar, Nabinagar, Sarail, Kasba, Akhaura, Bancharampur and Bijoynagar. For details click here' 
                            buttonText='More Details'></Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default Info