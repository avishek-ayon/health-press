import React from 'react';
import { Badge, ListGroup } from 'react-bootstrap';
import './Doctors.css';


const Doctors = () => {
    return (
        <div className='list-container'>
            <h2 style={{ marginTop: '60px', marginBottom: '40px', textDecoration: 'underline' }} className="text-warning">This is doctors</h2>
            <ListGroup as="ol" >
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start main-content"
                >
                    <div className="ms-2 me-auto ">
                        <div className="fw-bold ">Cardiologist</div>
                        1.John Doe
                    </div>
                    <Badge variant="primary" pill>
                        Time: 6:00-7:00 GST
                    </Badge>
                </ListGroup.Item>

                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start main-content"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Cardiologist</div>
                        2.Jack Oliver
                    </div>
                    <Badge variant="primary" pill>
                        Time: 6:00-7:00 GST
                    </Badge>
                </ListGroup.Item>

                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start main-content"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Cardiologist</div>
                        3.Daniel Weber
                    </div>
                    <Badge variant="primary" pill>
                        Time: 6:00-7:00 GST
                    </Badge>
                </ListGroup.Item>
            </ListGroup>
            <ListGroup as="ol">
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start main-content"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Diabetic expert</div>
                        4. Lily Thompson
                    </div>
                    <Badge variant="primary" pill>
                        Time: 8:00-9:00 GST
                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start main-content"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Diabetic expert</div>
                        5.Freddy Williams
                    </div>
                    <Badge variant="primary" pill>
                        Time: 8:00-9:00 GST
                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start main-content"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Diabetic expert</div>
                        6.Michael Johnston
                    </div>
                    <Badge variant="primary" pill>
                        Time: 8:00-9:00 GST
                    </Badge>
                </ListGroup.Item>
            </ListGroup>
            <   ListGroup as="ol" >
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start main-content"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Arthritis</div>
                        7. A.Kelly
                    </div>
                    <Badge variant="primary" pill>
                        Time: 14:00-15:00 GST
                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start main-content"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Arthritis</div>
                        8.Boris Tames
                    </div>
                    <Badge variant="primary" pill>
                        Time: 14:00-15:00 GST
                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start main-content"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Arthritis</div>
                        9.Cradle Weber
                    </div>
                    <Badge variant="primary" pill>
                        Time: 14:00-15:00 GST
                    </Badge>
                </ListGroup.Item>
            </ListGroup>
            <ListGroup as="ol" >
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start main-content"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Arthritis</div>
                        10.Patrick Shaun
                    </div>
                    <Badge variant="primary" pill>
                        Time: 14:00-15:00 GST
                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start main-content"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Pregnancy Consultant </div>
                        11.Mrs. Draxler
                    </div>
                    <Badge variant="primary" pill>
                        Time: 16:00-18:00 GST
                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start main-content"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Pregnancy Consultant</div>
                        12.Portia Thompson
                    </div>
                    <Badge variant="primary" pill>
                        Time: 16:00-18:00 GST
                    </Badge>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default Doctors;



