import React from 'react';
import { Col } from 'react-bootstrap';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterestSquare, faFacebookSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

<i class="fab "></i>

const Team = ({ team }) => {

    const { des, img, name, role } = team || {};

    return (
        // single-team start
        <Col lg={6}>
            <div className="single-team">
                <div className="team-thumb">
                    <img src={img} alt="" />
                </div>
                <div className='team-des'>
                    <h4>{name}</h4>
                    <p>{role}</p>
                    <p>{des}</p>
                    <div>
                        <FontAwesomeIcon className="team-pinterest" icon={faPinterestSquare} />
                        <FontAwesomeIcon className="team-facebook" icon={faFacebookSquare} />
                        <FontAwesomeIcon className="team-twitter" icon={faTwitterSquare} />
                        <FontAwesomeIcon className="team-youtube" icon={faYoutubeSquare} />
                    </div>
                </div>
            </div>
        </Col>
        // single-team end
    );
};

export default Team;