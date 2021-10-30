import React from 'react';
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {

    const historey = useHistory();
    const handleBackHome = () => {
        historey.push("/")
    }

    return (
        <>
            {/* breadcrumb-bg start */}
            <div className="breadcrumb-bg">
                <Container>
                    <div className="breadcrumb-container d-flex justify-content-between align-items-center">
                        <h2 className="breadcrumb-title">Page Not Found</h2>
                        <Breadcrumb>
                            <NavLink to="/home">Home</NavLink>
                            <span>/</span>
                            <NavLink to="/*" activeClassName="active">
                                Error 404
                            </NavLink>
                        </Breadcrumb>
                    </div>
                </Container>
            </div>
            {/* breadcrumb-bg end */}
            {/* notfound start */}
            <div className="not-found-bg">
                <Container>
                    <Row>
                        <Col>
                            <div className="not-found">
                                <h1>404</h1>
                                <h3>Whoops! This Page Does Not Exist</h3>
                                <p>We can't seem to find the page that you're looking for, the link you followed might have been broken, it is temporarily unavailable. or it appears the website address you entered was incorrect.</p>
                                <button onClick={handleBackHome} className="regular-btn">Back To Home</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* notfound end */}
        </>
    );
};

export default NotFound;