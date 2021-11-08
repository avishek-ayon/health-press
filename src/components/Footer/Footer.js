import React from 'react';
import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import log from '../../images/medical-pharmacy-logo.jpg';


const Footer = () => {
    return (
        <div className='fo'>
            <Container>
                <Row>
                    <Col>
                        <div className="foot-img">
                            <img src={log} alt="" />
                            <h5 className="text-uppercase">Health Press</h5>
                            <p>A comfort zone for all patient and Doctor</p>
                        </div>
                    </Col>
                    <Col md="auto">
                        <div>
                            Visit link
                            <br />
                            <i className="fab fa-facebook"></i>
                            <br />
                            <i className="fab fa-twitter"></i>
                            <br />
                            <i className="fas fa-phone-volume"></i>
                            <br />
                            <i className="fab fa-github-square"></i>
                        </div>
                    </Col>
                    <Col xs lg="2">

                        <div className="mx-auto">
                            <h5>Contact Us</h5>
                            © 2020 Copyright:
                            <a href="https://health-press.web.app"> MDBootstrap.com</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;


