import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusAlt, faGlobeEurope, faHotel, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div className="about-area">
            <Container>
                <Row>
                    <Col lg={3}>
                        <div className="single-about">
                            <FontAwesomeIcon className="about-icon" icon={faBusAlt} />
                            <h5>Private Transport</h5>
                            <p>We have the best team in the whole world that organizes the best trips for our clients and make their</p>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="single-about">
                            <FontAwesomeIcon className="about-icon" icon={faGlobeEurope} />
                            <h5>Diverse Destinations</h5>
                            <p>We have the best team in the whole world that organizes the best trips for our clients and make their</p>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="single-about">
                            <FontAwesomeIcon className="about-icon" icon={faHotel} />
                            <h5>Great Hotels</h5>
                            <p>We have the best team in the whole world that organizes the best trips for our clients and make their</p>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="single-about">
                            <FontAwesomeIcon className="about-icon" icon={faAddressBook} />
                            <h5>Fast Booking</h5>
                            <p>We have the best team in the whole world that organizes the best trips for our clients and make their</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;