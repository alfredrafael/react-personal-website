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
                        <span className="title-in-modal">My Programming Languages</span>
                        <Row>
                          <Col className="col-pic-in-modal">

                            <img className='pic-in-modal' alt="JS langauges" src="https://alfredorafael.com/wp-content/uploads/2020/04/JS_stack.png" />

                          </Col>

                          <Col className="col-text-in-modal">

                            My programming language is Javascript, and the library I specialize in
                            is <strong>React.js</strong>. I am highly experienced on <strong>jQuery</strong> (Javascript
                            most beloved child) and I build my APIs using <strong>Node.js</strong> I would be happy to add
                            Angular.js to my belt, as well! Need a Javascript developer? How can I help you?

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
                        <span className="title-in-modal" style={{ marginLeft: '9%' }}> My Styling Tools</span>
                        <Row>
                          <Col className="col-pic-in-modal">

                            <img className='pic-in-modal' alt="JS langauges" src="https://alfredorafael.com/wp-content/uploads/2020/04/Styling.png" />
                          &nbsp;

                        </Col>

                          <Col className="col-text-in-modal">
                            Rendering data from an API is essential, but building an <strong>user-friendly</strong> interface
                            where clients can navigate and intuitively find + make sense of our data is paramount!
                            I use <strong>CSS</strong> libraries such as <strong>Bootstrap</strong>, <strong>Reactstrap</strong>
                            , <strong>Material UI</strong> (for dynamic properties), and <strong>Styled Components</strong> to create
                            engaging, user-friendly interfaces. Do you need a UI developer? How can I help you?
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
                        <Row>
                          <Col className="col-pic-in-modal">

                            <img className='pic-in-modal' alt="UXD Process" src="https://alfredorafael.com/wp-content/uploads/2020/04/UXD-Logo.png" />
                          &nbsp;

                        </Col>

                          <Col className="col-text-in-modal">
                            If your website idea needs to be fleshed-out <strong>before</strong> going
                            into full-blown development, my experience developing <strong>wireframes</strong> adds clarity
                            to how different parts of a website will interact with the others. My wireframing tools
                            are <strong>Figma</strong> and <strong>Sketch</strong>. Do you like the JS, CSS,
                            and Design icons on these modals? I created those using Sketch. Do you have an app, icon
                            or logo you would like to bring to life? How can I help you?
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
