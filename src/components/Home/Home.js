import React from 'react';
import Banner from '../Banner/Banner';
import Conference from '../Conference/Conference';
import Gallary from '../Gallary/Gallary';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <br />
            <br />
            <Banner></Banner>
            <Services></Services>

            <Gallary></Gallary>
            <Conference></Conference>
        </div>
    );
};

export default Home;