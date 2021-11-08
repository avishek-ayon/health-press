import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
    return (
        <div id='blog' className="blog mx-5 mb-4">
            <h1 style={{ marginTop: '60px', marginBottom: '40px', textDecoration: 'underline' }} className="text-warning">BLOGS</h1>
            <Accordion >
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Why should people wear masks?</Accordion.Header>
                    <Accordion.Body>
                        Masks are a key measure to suppress transmission and save lives.

                        Masks should be used as part of a comprehensive ‘Do it all!’ approach including physical distancing, avoiding crowded, closed and close-contact settings, good ventilation, cleaning hands, covering sneezes and coughs, and more.

                        Depending on the type, masks can be used for either protection of healthy persons or to prevent onward transmission.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Who should wear what kind os mask?</Accordion.Header>
                    <Accordion.Body>
                        Medical masks are recommended for:

                        Health workers in clinical settings. See our guidance for more information on the use of personal protective equipment by health care workers.
                        Anyone who is feeling unwell, including people with mild symptoms, such as muscle aches, slight cough, sore throat or fatigue.
                        Anyone awaiting COVID-19 test results or who has tested positive.
                        People caring for someone who is a suspected or confirmed case of COVID-19 outside of health facilities.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>How to put on and wear a fabric mask?</Accordion.Header>
                    <Accordion.Body>
                        How to put on and wear a fabric mask:

                        Before touching the mask, clean your hands with an alcohol-based hand rub or soap and water.
                        Inspect the mask for tears or holes, do not use a mask that is damaged.
                        Adjust the mask to cover your mouth, nose, and chin, leaving no gaps on the sides.
                        Place the straps behind your head or ears. Do not cross the straps because this can cause gaps on the side of your face.
                        Avoid touching the mask while wearing it. If you touch it, clean your hands.
                        Change your mask if it gets dirty or wet.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Who should wear what kind os mask?</Accordion.Header>
                    <Accordion.Body>
                        Medical masks are recommended for:

                        Health workers in clinical settings. See our guidance for more information on the use of personal protective equipment by health care workers.
                        Anyone who is feeling unwell, including people with mild symptoms, such as muscle aches, slight cough, sore throat or fatigue.
                        Anyone awaiting COVID-19 test results or who has tested positive.
                        People caring for someone who is a suspected or confirmed case of COVID-19 outside of health facilities.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Who should wear what kind os mask?</Accordion.Header>
                    <Accordion.Body>
                        Medical masks are recommended for:

                        Health workers in clinical settings. See our guidance for more information on the use of personal protective equipment by health care workers.
                        Anyone who is feeling unwell, including people with mild symptoms, such as muscle aches, slight cough, sore throat or fatigue.
                        Anyone awaiting COVID-19 test results or who has tested positive.
                        People caring for someone who is a suspected or confirmed case of COVID-19 outside of health facilities.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Who should wear what kind os mask?</Accordion.Header>
                    <Accordion.Body>
                        Medical masks are recommended for:

                        Health workers in clinical settings. See our guidance for more information on the use of personal protective equipment by health care workers.
                        Anyone who is feeling unwell, including people with mild symptoms, such as muscle aches, slight cough, sore throat or fatigue.
                        Anyone awaiting COVID-19 test results or who has tested positive.
                        People caring for someone who is a suspected or confirmed case of COVID-19 outside of health facilities.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;