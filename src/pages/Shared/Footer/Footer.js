import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import footerImg1 from '../../../images/footer-1-1.jpg';
import footerImg2 from '../../../images/footer-1-2.jpg';
import footerImg3 from '../../../images/footer-1-3.jpg';
import footerImg4 from '../../../images/footer-1-4.jpg';
import footerImg5 from '../../../images/footer-1-5.jpg';
import footerImg6 from '../../../images/footer-1-6.jpg';
import './Footer.css'


const Footer = () => {
    return (
        <div className="footer-part">
            <Container>
                <Row>
                    <Col lg={3}>
                        <div className="footer-widget">
                            <NavLink className="alfred-logo" to="/">alfred travel</NavLink>
                            <p>we are provite best service all time, Our trip guide is informative, friendly</p>
                            <p><FontAwesomeIcon className="footer-icon" icon={faPhoneAlt} /> 1-677-124-44227</p>
                            <p><FontAwesomeIcon className="footer-icon" icon={faMapMarkerAlt} /> Eighth Avenue 487, New York</p>
                            <p><FontAwesomeIcon className="footer-icon" icon={faEnvelope} />alfred@travel.com</p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="footer-widget">
                            <h4>Latest Posts</h4>
                            <p className="post-text">Traveling – It Leaves You Speechless, Then Turns You Into A Storyteller</p>
                            <small>February 21, 2022</small>
                            <p className="post-text">A Journey Is Always Best Measured In New Friends, Rather Than Miles</p>
                            <small>june 15, 2022</small>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="footer-widget">
                            <h4>Company</h4>
                            <ul>
                                <li><NavLink to="/">About Us</NavLink></li>
                                <li><NavLink to="/">Community Blog</NavLink></li>
                                <li><NavLink to="/">Rewards</NavLink></li>
                                <li><NavLink to="/">Work with Us</NavLink></li>
                                <li><NavLink to="/">Meet the Team</NavLink></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="footer-widget">
                            <h4>Instagram</h4>
                            <ul className="footer-instagram">
                                <li><img src={footerImg1} alt="footer-img" /></li>
                                <li><img src={footerImg2} alt="footer-img" /></li>
                                <li><img src={footerImg3} alt="footer-img" /></li>
                                <li><img src={footerImg4} alt="footer-img" /></li>
                                <li><img src={footerImg5} alt="footer-img" /></li>
                                <li><img src={footerImg6} alt="footer-img" /></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;