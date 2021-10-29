import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {


    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/services')
            .then(function (response) {
                setServices(response.data);
            })
    }, [])

    return (
        <div className="service-part">
            <Container>
                <h2>Explore the World for Yourself</h2>
                {
                    !services.length ? <Spinner className="spinner-home" animation="border" variant="secondary" /> :
                        <Row>
                            {
                                services.map(service => <Service
                                    key={service._id}
                                    service={service}
                                ></Service>)
                            }
                        </Row>
                }
            </Container>

        </div>
    );
};

export default Services;