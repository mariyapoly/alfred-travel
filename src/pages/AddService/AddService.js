import axios from 'axios';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/services', {
            title: data.title,
            des: data.des,
            img: data.img,
            price: data.price,
        })
            .then(function (response) {
                if (response.data.insertedId) {
                    alert('service added successfully');
                    reset()
                }
            })
    };
    return (
        <div className="add-services">
            <Container>
                <Row>
                    <h1>Add A New Service</h1>
                    <div className="user-entry-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input placeholder="Service Title" {...register("title")} />
                            <input placeholder="Image URL" {...register("img")} />
                            <input placeholder="Description" {...register("des")} />
                            <input placeholder="Price" {...register("price")} />
                            <input className="submit-btn" type="submit" value="Add Service" />
                        </form>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default AddService;