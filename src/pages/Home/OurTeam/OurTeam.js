import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Team from '../Team/Team';
import './OurTeam.css'

const OurTeam = () => {

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        axios.get('https://enigmatic-cliffs-59575.herokuapp.com/team')
            .then(function (response) {
                setTeams(response.data);
            })
    }, [])


    return (
        // team-area start
        <div className="team-area">
            <Container>
                <div className="section-top">
                    <h2 className="section-title">meet our trip organizer</h2>
                    <p>We have the best team in the whole world that organizes the best trips for our clients and make their journeys life remembering.</p>
                </div>
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
        // team-area end
    );
};

export default OurTeam;