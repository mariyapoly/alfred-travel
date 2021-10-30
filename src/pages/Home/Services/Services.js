import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {


    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('https://enigmatic-cliffs-59575.herokuapp.com/services')
            .then(function (response) {
                setServices(response.data);
            })
    }, [])

    return (
        // service-part start
        <div className="service-part">
            <Container>
                <div className="section-top">
                    <h2 className="section-title">Explore the World for Yourself</h2>
                    <p>Come Explore the world with us and enjoy the best trip of your life. We offer trips to every end of the world.</p>
                </div>
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
        // service-part end
    );
};

export default Services;