import React from 'react';
import './Gallary.css';
import first from '../../images/rounded.jpg';
import second from '../../images/rounded-mana.jpg';
import third from '../../images/rund-picnix.jpg';

const Gallary = () => {
    return (
        <div>
            <h1 className="text-success mb-4">Photo Gallary</h1>
            <div className="gallary  mx-auto d-block">
                <img className="mx-5" src={first} alt="" />
                <img className="mx-5" src={second} alt="" />
                <img className="mx-5" src={third} alt="" />
            </div>
        </div>
    );
};

export default Gallary;