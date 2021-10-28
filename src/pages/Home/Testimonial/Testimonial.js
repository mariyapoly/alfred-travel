import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import testimonialImg from '../../../images/testimonail-bg.jpg';
import './Testimonial.css';
import user1 from '../../../images/user-1.jpg';
import user2 from '../../../images/user-2.jpg';
import user3 from '../../../images/user-3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const Testimonial = () => {
    return (
        <div className="testimonial-part">
            <Container fluid>
                <Row>
                    <Col lg={6} className="p-0">
                        <div className="testimonial-thumb">
                            <img src={testimonialImg} alt="" />
                        </div>
                    </Col>
                    <Col lg={6} className="p-0">
                        <div className="testimonial-slide">
                            <h2>Our Top Reviews</h2>
                            <Carousel>
                                <Carousel.Item>
                                    <Carousel.Caption>
                                        <h4>Action Safari</h4>
                                        <div className="rating">
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                        <p>The sightseeing and activities were better than we even thought! I still can’t believe we did so much in such a short time, but we did not feel stre</p>
                                        <p className="name">Karin Thomas </p>
                                        <img src={user1} alt="" />
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Carousel.Caption>
                                        <h4>Adventure Alaska</h4>
                                        <div className="rating">
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                        <p>I had a wonderful time during the trip. The guide was informative, friendly and attentive to our entire group! I definitely plan to be a returning cus</p>
                                        <p className="name">Hart Coney</p>
                                        <img src={user2} alt="" />
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Carousel.Caption>
                                        <h4>Ancient Pyramids</h4>
                                        <div className="rating">
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                        <p>Always enjoyed my stay with Hilton Hotel and Resorts, top class room service and rooms have great outside views and luxury assessories. Thanks for gre</p>
                                        <p className="name">Roman Paolera </p>
                                        <img src={user3} alt="" />
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Testimonial;