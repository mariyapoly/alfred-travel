import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css'

const Service = ({ service }) => {

    const history = useHistory();

    const { _id, des, img, price, title } = service || {};

    const handleBookBtn = () => {
        history.push(`/serviceDetails/${_id}`)
    }

    return (
        <Col lg={4} md={6}>
            <div className="servcie">
                <img src={img} alt="" />
                <p className="price">$ {price}</p>
                <div className="service-content">
                    <h5 className="sevice-title">{title}</h5>
                    <p>{des}</p>
                    <button onClick={handleBookBtn}>book now</button>
                </div>
            </div>
        </Col>
    );
};

export default Service;