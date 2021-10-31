import React from 'react';
import About from '../../Shared/About/About';
import Banner from '../Banner/Banner';
import OurTeam from '../OurTeam/OurTeam';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import TripGallery from '../TripGallery/TripGallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Testimonial></Testimonial>
            <TripGallery></TripGallery>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;