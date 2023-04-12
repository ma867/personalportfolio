import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
export default function ContactMeForm({ isVisible,
    domRef }) {

    const form = useRef();
    const [sent, setSent] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(`${process.env.REACT_APP_EMAILJS_SERVICE_KEY}`, `${process.env.REACT_APP_EMAILJS_TEMPLATE_KEY}`, form.current, `${process.env.REACT_APP_EMAILJS_KEY}`)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setSent(true)
    }
    return (

        <Container className="justify-content-center" id="contact-me">
            <Row className='mb-5 p-5 rounded-3 contact-me-card' >
                <Col xl={5} className=" mb-3 contact-me-picture-container" >
                    <Container className=' m-1 p-0 contact-me-picture' >
                        <img src="https://i.imgur.com/NuBUFLz.png" className="prototype" />


                    </Container>

                </Col >
                <Col xl={7} className='rounded-4' >
                    <h1 className='title pb-1'>Write me a message!</h1>
                    <Form ref={form} onSubmit={sendEmail}>

                        <Form.Group className="mb-3" controlId="contact-me-name" >
                            <Form.Label><small>Name:</small></Form.Label>
                            <Form.Control name="from_name" type="text" placeholder="Enter your name." required />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="contact-me-email">
                            <Form.Label><small>Email:</small></Form.Label>
                            <Form.Control name="from_email" type="email" placeholder="Enter your email." required />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="contact-me-message">
                            <Form.Label><small>Message:</small></Form.Label>
                            <Form.Control name="message" as="textarea" placeholder="Enter your message." rows={5} required />
                        </Form.Group>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>


                            <Button
                                type="submit" className="submit-button border-0 p-3" ><small>SEND MESSAGE</small></Button>
                            {
                                sent ?
                                    <p> <FontAwesomeIcon icon={faEnvelopeCircleCheck} /> Your message has been sent!</p>

                                    :
                                    ""

                            }
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>

    )
}