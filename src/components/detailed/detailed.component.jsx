import React from 'react'
import './detailed.styles.css'
import Card from '../cards/cards.component'
import { Container,Col,Row} from 'reactstrap'
import HospitalLogo from '../../picture/hospitalLogo.png'
import MarketLogo from '../../picture/localMarketLogo.png'
import BankLogo from '../../picture/bankLogo.png'
import JobLogo from '../../picture/jobsLogo.png'
import RestaurentLogo from '../../picture/restaurantLogo.png'
import EstateLogo from '../../picture/estateLogo.png'
const Detailed = () => {
    return (
        <div className='detailedContainer'>
            <Container>
                <Row>
                    <Col xs='6'>
                        <div className='leftCol'>
                            <Card cardHeader = 'Hospitals' logo={HospitalLogo} 
                            cardText='Many hospital including Pvt and Government, are giving best treatment to the people of BrahmanBaria.
                            There are a lot of Hospitals, the main ones are BrahmanBaria Medical Collge Hospital, Square General Hospital etc'
                            buttonText='View Hospitals'></Card>
                        </div>
                    </Col>
                    <Col xs='6'>
                        <Card cardHeader = 'Local Markets' logo={MarketLogo} 
                            cardText='Naxalbari has a famous marketplace called bazarpara, where people of Naxalbari use to get their daily needs.
                            For every village there are local markets available and for each upazila there is one main Mall situated'
                            buttonText='Survey Markets'></Card>
                    </Col>
                </Row>

                <Row>
                    <Col xs='6'>
                        <div className='leftCol'>
                            <Card cardHeader = 'Jobs' logo={JobLogo} 
                            cardText='As BrahmanBaria is developing day by day the need of workers also increasing. 
                            But maybe the quality of workers required are below the lower class levels. Click below link to find or post a job.'
                            buttonText='Find Jobs'></Card>
                        </div>
                    </Col>
                    <Col xs='6'>
                        <Card cardHeader = 'Banks' logo={BankLogo} 
                            cardText='There are several branches of Government and Private banks in the city and their numbers of ATMs.
                            The city has the branches of almost all the banks of the country. Click below to know more.'
                            buttonText='Look for a Branch'></Card>
                    </Col>
                </Row>

                
                <Row>
                    <Col xs='6'>
                        <div className='leftCol'>
                            <Card cardHeader = 'Real Estates' logo={EstateLogo} 
                            cardText='Like any other cities, BrahmanBaria is also a place of real estates. 
                            And it is beneficial for the capitalists as it is a border area and a devloping city'
                            buttonText='View Details'></Card>
                        </div>
                    </Col>
                    <Col xs='6'>
                        <Card cardHeader = 'Restaurants' logo={RestaurentLogo} 
                            cardText='Being a beautiful place and sorrounded by amazing people BrahmanBaria also serves delicious 
                            food, you must try along with their traditional pithas, it is one of the delicacies of East of Bangladesh'
                            buttonText='Look for a Restaurent'></Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Detailed