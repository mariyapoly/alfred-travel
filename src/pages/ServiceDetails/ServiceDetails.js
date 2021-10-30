import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './ServiceDetails.css';
import useAuth from '../../hooks/useAuth';
import swal from 'sweetalert';

const ServiceDetails = () => {

    const [service, setService] = useState({});

    const { id } = useParams();
    const { user } = useAuth();

    useEffect(() => {
        axios.get(`http://localhost:5000/services/${id}`)
            .then(function (response) {
                setService(response.data);
            })
    }, [])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.title = service?.title
        data.status = 'Pending'
        axios.post('http://localhost:5000/addOrder', {
            title: data.title,
            name: data.name,
            email: data.email,
            address: data.address,
            phone: data.phone,
            date: data.date,
            tickets: data.tickets,
            status: data.status
        })
            .then(function (response) {
                if (response.data.insertedId) {

                    swal({
                        title: "Booking Succussfully!",
                        icon: "success",
                    });
                    reset();
                }
            })

    };

    return (
        // service-details start
        <div>
            <div className="service-details-bg">
                <h1>{service?.title}</h1>
            </div>
            <div className="service-details-container">
                <Container>
                    <Row>
                        <Col lg={7}>
                            <div className="service-details">
                                <h2>{service?.title}</h2>
                                <p className="service-price">${service?.price} / per person</p>
                                <p className="service-des">{service?.des}</p>
                            </div>
                            <ul className="service-list">
                                <li>13 Days</li>
                                <li>16+ Age</li>
                                <li>Explore</li>
                            </ul>
                            <div className="services-des">
                                <ul>
                                    <li className="table-title">Destination</li>
                                    <li className="text">{service?.title}</li>
                                </ul>
                                <ul>
                                    <li className="table-title">Departure</li>
                                    <li className="text">Please arrive by 9:15 AM for a prompt departure at 9:30 AM.</li>
                                </ul>
                                <ul>
                                    <li className="table-title">Departure Time</li>
                                    <li className="text">Approximately 8:30 PM.</li>
                                </ul>
                                <ul>
                                    <li className="table-title">Dress Code</li>
                                    <li className="text">Casual. Comfortable athletic clothing, hiking shoes, hat and warm jacket.</li>
                                </ul>
                                <ul>
                                    <li className="table-title">Included</li>
                                    <li className="text">All Museum Tickets, Meals,  divansportation/Car</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="booking">
                                <h2>Book this tour</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input type="text" value={user?.displayName} {...register("name")} />
                                    <input type="email" value={user?.email} {...register("email")} />
                                    <input value={service?.title} {...register("title")} />
                                    <input required type="number" placeholder="Phone *" {...register("phone")} />
                                    <input required type="text" placeholder="Address *" {...register("address")} />
                                    <input type="date" required placeholder="Date *" {...register("date")} />
                                    <input type="number" required placeholder="Number of tickets *" {...register("tickets")} />
                                    <input className="submit-btn" type="submit" value="book now" />
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
        // service-details end
    );
};

export default ServiceDetails;