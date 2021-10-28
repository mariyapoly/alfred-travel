import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import bannerImg1 from '../../../images/home-slider-img-1.jpg';
import bannerImg2 from '../../../images/home-slider-img-2.jpg';
import bannerImg3 from '../../../images/home-slider-img-3.jpg';

const Banner = () => {
    return (
        <div className="banner-part">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bannerImg1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Your Journey Begins </h1>
                        <p>Alfred Travel is a simply stunning theme perfect for all types of travel & tourism businesses </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bannerImg2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>Your Journey Begins </h1>
                        <p>Alfred Travel is a simply stunning theme perfect for all types of travel & tourism businesses </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bannerImg3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>Your Journey Begins </h1>
                        <p>Alfred Travel is a simply stunning theme perfect for all types of travel & tourism businesses </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;