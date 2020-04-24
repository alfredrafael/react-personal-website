import React, { useState } from "react";
import "./CssHowCanIHelp.css";
import { Row, Col, Container, Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from "reactstrap";
import Modali, { useModali } from 'modali';



const HowCanIHelp = () => {

  const [webDevModal, toggleWebDevModal] = useModali({
    animated: true,
    large: true,
  });
  const [designModal, toggleDesignModal] = useModali({
    animated: true,
    large: true,
  });
  const [instructionalModal, toggleInstructionalModal] = useModali({
    animated: true,
    large: true,
  });


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
                    onClick={toggleWebDevModal}
                  ><h1 className="overlay-text" style={{ marginTop: '25%', fontWeight: 'thin', color: 'white', fontSize: '200%' }}>Web Development</h1></div>
                </div>

                <Modali.Modal {...webDevModal} id="webDevModal">
                  <Row>
                    <div className="modali-header" style={{ margin: '-7% 0 0 0', background: 'transparent', fontWeight: 'bold' }}>
                      Web Development
                  </div>
                  </Row>

                  <CardBody>
                    <CardText>  Hi, I'm the first Modali!
                    With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button>
                  </CardBody>
                  <CardFooter>Footer</CardFooter>


                </Modali.Modal>

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
                    onClick={toggleInstructionalModal}

                  ><h1 style={{ marginTop: '25%', fontWeight: 'thin', color: 'white', fontSize: '200%' }}>Instructional Design</h1></div>
                </div>


                <Modali.Modal {...instructionalModal}>
                  <Row>
                    <div className="modali-header" style={{ margin: '-7% 0 0 0', background: 'transparent', fontWeight: 'bold' }}>
                      Instructional Design
                  </div>
                  </Row>

                  <CardBody>
                    <CardText>  Hi, I'm the first Modali!
                    With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button>
                  </CardBody>
                  <CardFooter>Footer</CardFooter>

                </Modali.Modal>

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
                    onClick={toggleDesignModal}

                  ><h1 style={{ marginTop: '34%', fontWeight: 'thin', color: 'white', fontSize: '200%' }}>Web Design</h1></div>
                </div>

                <Modali.Modal {...designModal}>
                  <Row>
                    <div className="modali-header" style={{ margin: '-7% 0 0 0', background: 'transparent', fontWeight: 'bold' }}>
                      Web Design
                  </div>
                  </Row>

                  <CardBody>
                    <CardText>  Hi, I'm the first Modali!
                    With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button>
                  </CardBody>
                  <CardFooter>Footer</CardFooter>

                </Modali.Modal>

              </Col>







            </Row>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HowCanIHelp;
