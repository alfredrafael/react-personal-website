import React from "react";
import "./CssHowCanIHelp.css";
import { Row, Col, Container, Button, CardFooter, CardBody, CardText } from "reactstrap";
import Modali, { useModali } from "modali";
import Fade from 'react-reveal/Fade';

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
              <Fade>
                <strong>
                  <span>How Can </span>I Help You?<span></span>
                </strong>
              </Fade>
            </h2>
            <Fade>
              <Row>




                <Col>
                  <div class="service-div" style={{ margin: "0 auto" }}>
                    <img
                      class="service-div-img"
                      src="https://alfredorafael.com/wp-content/uploads/2019/03/WebDes3.png"
                      alt="Project Screenshot"
                    />
                    <div class="overlay-div" onClick={toggleDesignModal}>
                      <h1
                        style={{
                          marginTop: "34%",
                          fontWeight: "thin",
                          color: "white",
                          fontSize: "200%",
                        }}
                      >
                        Web Design
                    </h1>
                    </div>
                  </div>

                  <Modali.Modal {...designModal}>
                    <Row>
                      <div
                        className="modali-header"
                        style={{
                          margin: "-7% 0 0 0",
                          background: "transparent",
                          fontWeight: "bold",
                        }}
                      >
                        Web Design
                    </div>
                    </Row>

                    <CardBody>
                      <CardText>
                        {" "}


                        <h5 className="title-in-modal" style={{ marginLeft: '7%', zIndex: '99', position: 'relative', }}> My Web Design Tools</h5>

                        <Row>
                          <Col className="col-pic-in-modal">
                            <img className='pic-in-modal' alt="UXD Process" src="https://alfredorafael.com/wp-content/uploads/2020/04/UXD-Logo.png"
                              style={{ marginTop: '-15%' }}
                            />
                          &nbsp;

                        </Col>

                          <Col className="col-text-in-modal">
                            Wireframes are an incredibly clarifying way of identifying how
                            different parts of a website will interact with all the others.
                            My wireframing tools are <strong>Figma</strong> and <strong>Sketch</strong>.
                            Additionally, I create customized icons like the ones you see on these modal windows.
                            Do you have an app, an icon or a logo you would like to bring to life? How can I help you?
                        </Col>

                        </Row>


                      </CardText>
                      {/* <Button>Go somewhere</Button> */}
                    </CardBody>
                    <CardFooter>&nbsp;</CardFooter>
                  </Modali.Modal>
                </Col>







                <Col>
                  <div class="service-div" style={{ margin: "0 auto" }}>
                    <img
                      class="service-div-img"
                      src="https://alfredorafael.com/wp-content/uploads/2019/03/Group22.png"
                      alt="hello"
                    />
                    <div class="overlay-div" onClick={toggleWebDevModal}>
                      <h1 className="overlay-text">Web Development</h1>
                    </div>
                  </div>

                  <Modali.Modal {...webDevModal} id="webDevModal">

                    <Row>
                      <div
                        className="modali-header"
                        style={{
                          margin: "-7% 0 0 0",
                          background: "transparent",
                          fontWeight: "bold",
                        }}
                      >
                        Web Development
                    </div>
                    </Row>

                    <CardBody>
                      <CardText>
                        {" "}
                        <h5 className="title-in-modal" style={{ marginLeft: '3%' }}> My Programing Languages</h5>
                        <Row>
                          <Col className="col-pic-in-modal">

                            <img className='pic-in-modal' alt="JS langauges" src="https://alfredorafael.com/wp-content/uploads/2020/04/JS_stack.png" />

                          </Col>

                          <Col className="col-text-in-modal">

                            My programming language is Javascript, and I specialize in the <strong>React.js</strong> library
                            because of its reusability features. I am proficient on <strong>jQuery</strong> (everybody's
                            first JS library!) and I build my APIs routes with <strong>Node.js</strong> and <strong>Express</strong>.<br />
                            Do you need a Javascript developer? <br /> How can I help you?

                          </Col>

                        </Row>


                      </CardText>
                      {/* <Button>Go somewhere</Button> */}
                    </CardBody>
                    <CardFooter>&nbsp;</CardFooter>
                  </Modali.Modal>
                </Col>







                <Col>
                  <div class="service-div" style={{ margin: "0 auto" }}>
                    <img
                      class="service-div-img"
                      src="https://alfredorafael.com/wp-content/uploads/2019/03/Group24.png"
                      alt="Project Screenshot"
                    />
                    <div class="overlay-div" onClick={toggleInstructionalModal}>
                      <h1
                        style={{
                          marginTop: "25%",
                          fontWeight: "thin",
                          color: "white",
                          fontSize: "200%",
                        }}
                      >

                        UI <br /> Development
                    </h1>
                    </div>
                  </div>

                  <Modali.Modal {...instructionalModal}>
                    <Row>
                      <div
                        className="modali-header"
                        style={{
                          margin: "-7% 0 0 0",
                          background: "transparent",
                          fontWeight: "bold",
                        }}
                      >
                        UI Develoment
                    </div>
                    </Row>

                    <CardBody>
                      <CardText>
                        {" "}
                        <h5 className="title-in-modal" style={{ marginLeft: '9%' }}> My Styling Tools</h5>
                        <Row>
                          <Col className="col-pic-in-modal">

                            <img className='pic-in-modal' alt="JS langauges" src="https://alfredorafael.com/wp-content/uploads/2020/04/Styling.png" />
                          &nbsp;

                        </Col>

                          <Col className="col-text-in-modal">
                            I build <strong>user-friendly</strong> interfaces that allow users to intutively find the
                            information they need, because displaying data from an API is simply not enough:
                            users need to be able to make sense of it. The <strong>CSS</strong> libraries I use
                            to achieve this goal are <strong>Bootstrap</strong>, <strong>Reactstrap</strong>, <strong>Material UI</strong> (for
                            dynamic properties), and <strong>Styled Components</strong>. Do you need a UI developer? How can I help you?
                          </Col>

                        </Row>


                      </CardText>
                      {/* <Button>Go somewhere</Button> */}
                    </CardBody>
                    <CardFooter> &nbsp; </CardFooter>
                  </Modali.Modal>
                </Col>



              </Row>
            </Fade>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HowCanIHelp;
