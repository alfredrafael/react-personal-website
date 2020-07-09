import React from "react";
import "./CssHowCanIHelp.css";
import { Row, Col, Container, Button, CardFooter, CardBody, CardText } from "reactstrap";
import Modali, { useModali } from "modali";
import Fade from 'react-reveal/Fade';

const HelpEspanol = () => {
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
                  <span>¿Cómo </span>puedo servirle?<span></span>
                </strong>
              </Fade>
            </h2>
            <Fade>
              <Row>




                <Col>
                  <div className="service-div" style={{ margin: "0 auto" }}>
                    <img
                      className="service-div-img"
                      src="https://alfredorafael.com/wp-content/uploads/2019/03/WebDes3.png"
                      alt="Project Screenshot"
                    />
                    <div className="overlay-div" onClick={toggleDesignModal}>
                      <h2
                        style={{
                          marginTop: "34%",
                          fontWeight: "thin",
                          color: "white",
                          fontSize: "150%",
                        }}
                      >
                      Diseño Web

                    </h2>
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
                      Diseño Web
                    </div>
                    </Row>

                    <CardBody>
                      <CardText>
                        {" "}


                        <h5 className="title-in-modal" style={{ marginLeft: '3%', zIndex: '99', position: 'relative', }}> Mis herramientas de diseño</h5>

                        <Row>
                          <Col className="col-pic-in-modal">
                            <img className='pic-in-modal' alt="UXD Process" src="https://alfredorafael.com/wp-content/uploads/2020/04/UXD-Logo.png"
                              style={{ marginTop: '-15%' }}
                            />
                          &nbsp;

                        </Col>

                          <Col className="col-text-in-modal">
                            Hace años aprendí a desarrollar <a href="https://es.wikipedia.org/wiki/Wireframe_(dise%C3%B1o_web)">wireframes</a> porque son una excelente forma de 
                            clarificar e identificar cómo diferentes partes de un projecto-web interactuará con otras partes del mísmo.                             
                            Mis herramientas para desarrollar wireframes son <strong>Figma</strong> y <strong>Sketch</strong>.
                            También creo íconos como los que ve en estos "modals". ¿Tienes, una aplicación o ícono/logo 
                            que te gusaría traer a la realidad? <br/>¿Cómo le puedo ayudar?
                        </Col>

                        </Row>


                      </CardText>
                      {/* <Button>Go somewhere</Button> */}
                    </CardBody>
                    <CardFooter>&nbsp;</CardFooter>
                  </Modali.Modal>
                </Col>







                <Col>
                  <div className="service-div" style={{ margin: "0 auto" }}>
                    <img
                      className="service-div-img"
                      src="https://alfredorafael.com/wp-content/uploads/2019/03/Group22.png"
                      alt="hello"
                    />
                    <div className="overlay-div" onClick={toggleWebDevModal}>
                      <h2 className="overlay-text">Programación</h2>
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
                        Programación
                    </div>
                    </Row>

                    <CardBody>
                      <CardText>
                        {" "}
                        <h5 className="title-in-modal" style={{ marginLeft: '.5%' }}> Mis Lenguages de Programación</h5>
                        <Row>
                          <Col className="col-pic-in-modal">

                            <img className='pic-in-modal' alt="JS langauges" src="https://alfredorafael.com/wp-content/uploads/2020/04/JS_stack.png" />

                          </Col>

                          <Col className="col-text-in-modal">

                            Mi lenguage de programación es Javascript, y me especializo en su biblioteca de <strong>React.js</strong> por sus 
                            capacidades de reusabilidad. Soy proficiente en <strong>jQuery</strong> (la biblioteca más antigua de Javascript!) y 
                            programo mis rutas de APIs con <strong>Node.js</strong> y <strong>Express.js</strong>.<br /> ¿Necesitas
                            un programador en Javascript? <br />¿Cómo puedo ayudarle?

                          </Col>

                        </Row>

                      </CardText>
                      {/* <Button>Go somewhere</Button> */}
                    </CardBody>
                    <CardFooter>&nbsp;</CardFooter>
                  </Modali.Modal>
                </Col>







                <Col>
                  <div className="service-div" style={{ margin: "0 auto" }}>
                    <img
                      className="service-div-img"
                      src="https://alfredorafael.com/wp-content/uploads/2019/03/Group24.png"
                      alt="Project Screenshot"
                    />
                    <div className="overlay-div" onClick={toggleInstructionalModal}>
                      <h2> Interfaces </h2>
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
                            Programo <strong>interfaces de usuario (UI)</strong> que le permiten a mis clientes encontrar la información que necesitan 
                            , porque poner información en una pantalla no es suficiente: el usuario/a necesita ser capaz de navegar y encontrar
                            la información que él o ella necesita. La bibliotecas de <strong>CSS</strong> que uso son para lograr esto son <strong>Bootstrap</strong>, 
                            <strong>Reactstrap</strong>, <strong>Material UI</strong>, y <strong>Styled Components</strong>. ¿Necesitas un desarrollador de UI? 
                            ¿Cómo le puedo ayudar?
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

export default HelpEspanol;
