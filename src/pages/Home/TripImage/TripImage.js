import React, { useState } from 'react';
import { Col, Modal } from 'react-bootstrap';
import './TripImage.css'
const TripImage = ({ image }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { img } = image || {};

    return (
        // trip-img start
        <Col lg={3} md={4}>
            <div onClick={handleShow} className="trip-img">
                <div className="thumb">
                    <img src={img} alt="" />
                </div>
                <span>view trip image</span>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <img src={img} alt="" />
                </Modal.Body>
            </Modal>
        </Col>
        // trip-img end
    );
};

export default TripImage;