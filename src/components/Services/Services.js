import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h2 className="text-primary mt-5">Our Service</h2>
            <div className="service-container row" style={{ marginBottom: "100px" }}>

                <Row xs={1} md={2} className="g-4">
                    {services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                    }
                </Row>

            </div>
        </div>

    );
};

export default Services;