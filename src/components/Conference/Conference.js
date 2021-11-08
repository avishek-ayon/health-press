import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import first from '../../images/conf1.jpg';
import second from '../../images/con2.jpg';
import './Conference.css';
const imgStyle = {
    height: "200px"
}
const Conference = () => {
    return (
        <div className="conference">
            <h1 className="text-warning m-3">Conference</h1>
            <CardGroup className="mb-5">
                <Card className="mx-4">
                    <Card.Img style={imgStyle} variant="top" src={first} />
                    <Card.Body>
                        <Card.Title>JANU CONFerence</Card.Title>
                        <Card.Text>
                            This is a conference held in newzealand. Which Bangladeshi had a price
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className=" mx-4">
                    <Card.Img style={imgStyle} variant="top" src={second} />
                    <Card.Body>
                        <Card.Title>USA CONFERENCE</Card.Title>
                        <Card.Text>
                            This is a conference held in USA. Which Bangladeshi had a price.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div >
    );
};

export default Conference;