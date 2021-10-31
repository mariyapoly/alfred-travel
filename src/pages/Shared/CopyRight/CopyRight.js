import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './CopyRight.css'

const CopyRight = () => {
    return (
        // copyrright start
        <div className="copyright">
            <Container>
                <Row>
                    <Col>
                        <p>Copyright &copy; 2021 Alfred Travel
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
        // copyright end
    );
};

export default CopyRight;