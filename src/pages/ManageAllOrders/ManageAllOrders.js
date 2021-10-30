import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import swal from 'sweetalert';
import './ManageAllOrders.css'

const ManageAllOrders = () => {

    const [orders, setOrders] = useState([]);
    const [remeaning, setRemeaning] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [remeaning])

    const handleDeleteBtn = (id) => {
        axios.delete(`http://localhost:5000/orders/${id}`)
            .then(function (response) {
                if (response.data.deletedCount > 0) {
                    swal({
                        title: "Are you sure?",
                        text: "delete for this order item",
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

    const handleUpdateBtn = (id) => {
        axios.put(`http://localhost:5000/orders/${id}`)
            .then(function (response) {
                if (response.data.modifiedCount) {
                    swal({
                        title: "Status Approved",
                        icon: "success",
                    });
                    setRemeaning(true)
                } else {
                    setRemeaning(false)
                }
            })
    }

    return (
        <div className="orders">
            <Container>
                {
                    !orders ? <p>loading.....</p> :
                        <Row>
                            <ul className="order-title">
                                <li>order item</li>
                                <li>email</li>
                                <li>name</li>
                                <li>phone</li>
                                <li>date</li>
                                <li>tickets</li>
                                <li>status</li>
                                <li>delete</li>
                                <li>update</li>
                            </ul>
                            {
                                orders.map(order => <ul key={order._id}>
                                    <li>{order?.title}</li>
                                    <li>{order?.email}</li>
                                    <li>{order?.name}</li>
                                    <li>{order?.phone}</li>
                                    <li>{order?.date}</li>
                                    <li>{order?.tickets}</li>
                                    <li>{order?.status}</li>
                                    <li><button className="delete-btn" onClick={() => handleDeleteBtn(order._id)}>delete</button></li>
                                    <li><button onClick={() => handleUpdateBtn(order._id)}>update</button></li>
                                </ul>)
                            }
                        </Row>
                }
            </Container>

        </div>
    );
};

export default ManageAllOrders;
