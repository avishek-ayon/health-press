import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';
import first from '../../images/animates-ambulance.jpg';
import second from '../../images/pat.jpg';
import third from '../../images/go-home.jpg';


const Banner = () => {
    return (
        <div className='mt-5 banner'>
            <h1 className="text-primary">OUR VISION</h1>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="mx-auto d-block w-75 "
                        src={first}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>HOSPITAl</h5>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="mx-auto d-block w-75"
                        src={second}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Take Prescribtion</h5>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="mx-auto d-block w-75"
                        src={third}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Go Home</h5>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;