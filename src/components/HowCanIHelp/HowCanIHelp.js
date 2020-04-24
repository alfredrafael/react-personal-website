import React, { useState } from "react";
import "./CssHowCanIHelp.css";
import { Row, Col, Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";


const HowCanIHelp = (props) => {

  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);



  return (
    <React.Fragment>
      <div id="how-can-I-help">
        <div className="centralize-content">
          <Container>
            <h2>
              <strong>
                <span>How Can </span>I Help You?<span></span>
              </strong>
            </h2>

            <Row>

              <Col>
                <div class="service-div" style={{ margin: '0 auto' }}>
                  <img class="service-div-img" src="https://alfredorafael.com/wp-content/uploads/2019/03/Group22.png"
                    style={{
                      borderRadius: '25px',
                      maxWidth: '85%',
                    }}
                    alt='hello'
                  />
                  <div class="overlay-div"
                    style={{
                      borderRadius: '25px',
                      maxWidth: '85%',
                      maxHeight: '110%',
                      left: '7.5%',
                      height: '31.25vh'
                    }}
                    onClick={() => alert('hello')}

                  ><h1 className="overlay-text" style={{ marginTop: '25%', fontWeight: 'thin', color: 'white', fontSize: '200%' }}>Web Development</h1></div>
                </div>
              </Col>


              <Col>
                <div class="service-div" style={{ margin: '0 auto' }}>
                  <img class="service-div-img" src="https://alfredorafael.com/wp-content/uploads/2019/03/Group24.png"
                    style={{
                      borderRadius: '25px',
                      maxWidth: '85%',

                    }}
                    alt='hello'
                  />
                  <div class="overlay-div"
                    style={{
                      borderRadius: '25px',
                      maxWidth: '85%',
                      maxHeight: '109%',

                      left: '7.5%',
                      top: '.5%',
                      height: '31.25vh'
                    }}
                    onClick={() => alert('hello')}

                  ><h1 style={{ marginTop: '25%', fontWeight: 'thin', color: 'white', fontSize: '200%' }}>Instructional Design</h1></div>
                </div>
              </Col>



              <Col>
                <div class="service-div" style={{ margin: '0 auto' }}>
                  <img class="service-div-img" src="https://alfredorafael.com/wp-content/uploads/2019/03/WebDes3.png"
                    style={{
                      borderRadius: '25px',
                      maxWidth: '85%',

                    }}
                    alt='hello'
                  />
                  <div class="overlay-div"
                    style={{
                      borderRadius: '25px',
                      maxWidth: '85%',
                      maxHeight: '110%',
                      left: '7.5%',
                      height: '31.25vh',
                    }}
                    onClick={() => alert('hello')}

                  ><h1 style={{ marginTop: '34%', fontWeight: 'thin', color: 'white', fontSize: '200%' }}>Web Design</h1></div>
                </div>
              </Col>







            </Row>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HowCanIHelp;
