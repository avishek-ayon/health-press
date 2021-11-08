import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';


const Service = (props) => {
    const { id, name, img, description } = props.service;

    const handleDetails = key => {
        const uri = '/details/$'
    }
    return (
        <div className=" pb-3 mb-2">
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Link to={`/service/${id}`}>
                        <button onClick={handleDetails(id)} className="btn btn-warning">Call {name.toLowerCase()}</button>
                    </Link>
                </Card>
            </Col>

        </div>
    );
};

export default Service;