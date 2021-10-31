import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import swal from 'sweetalert';
import './MyOrder.css'

const MyOrder = () => {

    const [orders, setOrders] = useState([]);
    const { user } = useAuth() || {};

    useEffect(() => {
        fetch(`https://enigmatic-cliffs-59575.herokuapp.com/orders/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleDeleteBtn = (id) => {
        axios.delete(`https://enigmatic-cliffs-59575.herokuapp.com/orders/${id}`)
            .then(function (response) {
                if (response.data.deletedCount > 0) {
                    swal({
                        title: "Are you sure?",
                        text: "delete this order item",
                        icon: "warning",
                        dangerMode: true,
                    })
                        .then(willDelete => {
                            if (willDelete) {
                                swal({
                                    title: "Deleted!",
                                    text: "Deleted Successfully!",
                                    icon: "success",
                                });
                                const remeaning = orders.filter(pd => pd._id !== id);
                                setOrders(remeaning);
                            }
                        });

                }
            })
    }

    return (
        // my-orders start
        <div className="my-orders">
            <Container>
                <h2 className="section-title">my booking list</h2>
                <Row className="order-container">
                    <ul className="order-title">
                        <li>book item</li>
                        <li>email</li>
                        <li>name</li>
                        <li>address</li>
                        <li>date</li>
                        <li>tickets</li>
                        <li>status</li>
                        <li>delete</li>
                    </ul>
                    {
                        orders.map(order => <div key={order._id} className="order">
                            <ul className="order-sm-title">
                                <li>book item</li>
                                <li>email</li>
                                <li>name</li>
                                <li>address</li>
                                <li>date</li>
                                <li>tickets</li>
                                <li>status</li>
                                <li>delete</li>
                            </ul>
                            <ul className="order-info">
                                <li>{order?.title}</li>
                                <li>{order?.email}</li>
                                <li>{order?.name}</li>
                                <li>{order?.address}</li>
                                <li>{order?.date}</li>
                                <li>{order?.tickets}</li>
                                <li>{order?.status}</li>
                                <li><button className="delete-btn" onClick={() => handleDeleteBtn(order._id)}>delete</button></li>
                            </ul>
                        </div>
                        )
                    }
                </Row>
            </Container>
        </div>
        // my-orders end
    );
};

export default MyOrder;