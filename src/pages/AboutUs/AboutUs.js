import React from 'react';
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import About from '../Shared/About/About';
import aboutImg from '../../images/about-us-img-1.jpg'
import './AboutUs.css';


const AboutUs = () => {
    return (
        <div>
            {/* breadcrumb-bg start */}
            <div className="breadcrumb-bg">
                <div className="overlay">
                    <Container>
                        <div className="breadcrumb-container d-flex justify-content-between align-items-center">
                            <h2 className="breadcrumb-title">The Story About Us</h2>
                            <Breadcrumb>
                                <NavLink to="/home">Home</NavLink>
                                <span>/</span>
                                <NavLink to="/aboutUs" activeClassName="active">
                                    About Us
                                </NavLink>
                            </Breadcrumb>
                        </div>
                    </Container>
                </div>
            </div>
            {/* breadcrumb-bg end */}
            <About></About>
            <div className="our-history">
                <Container fluid>
                    <Row>
                        <Col lg={6} className="p-0">
                            <img src={aboutImg} alt="" />
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="our-history-content">
                                <p className="sub-title">history</p>
                                <h2>You Explore World</h2>
                                <p>Come Explore the world with us and enjoy the best trip of your life. We offer trips to every end of the world.</p>
                                <button>read more</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default AboutUs;