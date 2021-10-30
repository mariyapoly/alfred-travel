import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Team from '../Team/Team';
import './OurTeam.css'

const OurTeam = () => {

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/team')
            .then(function (response) {
                setTeams(response.data);
            })
    }, [])


    return (
        <div className="team-area">
            <Container>
                <h2 className="section-title">MEET OUR TRIP ORGANIZER</h2>
                <Row>
                    {
                        teams.map(team => <Team
                            key={team._id}
                            team={team}
                        ></Team>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default OurTeam;