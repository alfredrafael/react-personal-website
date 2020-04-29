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
            <Fade top>
              <Row>
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
                        <h5 className="title-in-modal">My Programming Languages</h5>
                        <Row>
                          <Col className="col-pic-in-modal">

                            <img className='pic-in-modal' alt="JS langauges" src="https://alfredorafael.com/wp-content/uploads/2020/04/JS_stack.png" />

                          </Col>

                          <Col className="col-text-in-modal">


                            My programming language is Javascript, and the library I specialize in
                            is <strong>React.js</strong> because of its rehusability features. I am highly experienced on <strong>jQuery</strong> (everybody's
                            first JS library!) and I build my APIs routes using <strong>Node.js</strong> and <strong>Express</strong>.
                            Need a Javascript developer? How can I help you?

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
                            Rendering data from an API is essential, but we also want to build
                            an <strong>user-friendly</strong> interface where clients can intutively find the data they need.
                            My <strong>CSS</strong> libraries to achieve this goal
                            are <strong>Bootstrap</strong>, <strong>Reactstrap</strong>, <strong>Material UI</strong> (for
                            dynamic properties), and <strong>Styled Components</strong>. Do you need a UI developer? How can I help you?
                          </Col>

                        </Row>


                      </CardText>
                      {/* <Button>Go somewhere</Button> */}
                    </CardBody>
                    <CardFooter> &nbsp; </CardFooter>
                  </Modali.Modal>
                </Col>

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
                        <h5 className="title-in-modal" style={{ marginLeft: '9%', zIndex: '99', position: 'relative' }}> My Styling Tools</h5>
                        <Row>
                          <Col className="col-pic-in-modal">
                            <img className='pic-in-modal' alt="UXD Process" src="https://alfredorafael.com/wp-content/uploads/2020/04/UXD-Logo.png"
                              style={{ marginTop: '-15%' }}
                            />
                          &nbsp;

                        </Col>

                          <Col className="col-text-in-modal">
                            In the web-design process, when identifying how different parts of a new website will
                            interact with the others, <strong>wireframes</strong> are an incredibly clarifying tool. My wireframing
                            tools are <strong>Figma</strong> and <strong>Sketch</strong>. I also use these to create unique, customized
                            icons like the ones you see on these modals. Do you have an app, an icon or logo you would like to
                            to bring to life? How can I help you?
                        </Col>

                        </Row>


                      </CardText>
                      {/* <Button>Go somewhere</Button> */}
                    </CardBody>
                    <CardFooter>&nbsp;</CardFooter>
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
