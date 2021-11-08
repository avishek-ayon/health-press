import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CallOn = () => {
    const { serviceId } = useParams();
    const [details, setDetails] = useState([]);
    const [specificDetails, setSpecificDetails] = useState({});

    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    useEffect(() => {
        if (details.length > 0) {
            const matchedData = details.find(detail => detail.id == serviceId)
            console.log(matchedData)
            setSpecificDetails(matchedData);
        }
    }
        , [details])
    return (
        <div>
            <h1>This is Call on:Product Details</h1>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={specificDetails?.img} />
                    <Card.Body>
                        <Card.Title>{specificDetails?.name}</Card.Title>
                        <Card.Text>
                            {specificDetails?.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default CallOn;