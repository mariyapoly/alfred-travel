import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import TripImage from '../TripImage/TripImage';
import './TripGallery.css'

const TripGallery = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/gallery')
            .then(function (response) {
                setImages(response.data);
            })
    }, [])


    return (
        <div className="gallery-area">
            <Container fluid>
                <h2 className="section-title">TRIP GALLERY</h2>
                <Row>
                    {
                        images.map(image => <TripImage
                            key={image._id}
                            image={image}></TripImage>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default TripGallery;