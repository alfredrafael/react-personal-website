import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './CssContact.css';


const Contact = () => {
    return (
        <React.Fragment>
            <div id="contact-component">
                <Container>
                    <Row>
                        <Col>
                            <h2>Contact</h2>
                        </Col>


                        <Col className="contact-linkedin-icon">
                            <a href="https://www.linkedin.com/in/alfredo-rafael/" rel="noopener noreferrer" target="_blank">
                                <img src="https://alfredorafael.com/wp-content/uploads/2020/04/Linkeding-logo-full.png" alt="LinkedIn Icon" />
                            </a>
                        </Col>



                        <Col className="contact-email-icon">
                            <a href="mailto:alfredrafael@gmail.com?Subject=Regarding%20your%20web-development%20services" rel="noopener noreferrer" target="_blank">
                                <img src="https://alfredorafael.com/wp-content/uploads/2020/04/Mail-Logo-Full.png" alt="Email Icon" />
                            </a>
                        </Col>


                        <Col className="contact-phone-icon">
                            <a href="tel:+16175801400" rel="noopener noreferrer" target="_blank">
                                <img src="https://alfredorafael.com/wp-content/uploads/2020/04/Phone-Logo-Full.png" alt="Phone Icon" />
                            </a>
                        </Col>

                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Contact
