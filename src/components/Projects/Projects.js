import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Fade } from "react-reveal";
import "./CssProjects.css";

const Projects = () => {
    return (
        <React.Fragment>
            <Container id="projects-component">
                <h2> Pet Projects </h2>
                <Fade>
                <Row>
                    <Col>
                        <div class="project-div" style={{flex: '1'}}>
                            <img
                                class="project-div-img"
                                src="https://alfredorafael.com/wp-content/uploads/2020/04/movie-app.png"
                                alt="project"
                            />
                            <div class="project-overlay-div">
                                <div style={{ display: 'block' }}>

                                    <Button
                                        className="overlay-content"  color="secondary"
                                        style={{
                                            fontWeight: "thin",
                                            color: "white",
                                            fontSize: "150%",
                                            padding: "0",
                                            marginTop: "25%",
                                        }}
                                    >
                                        View the Website
                                        </Button>


                                </div>
                                <div style={{ display: 'block' }}>


                                    <Button
                                        className="overlay-content" color="secondary"
                                        style={{
                                            fontWeight: "thin",
                                            color: "white",
                                            fontSize: "100%",
                                            padding: "0",
                                        }}
                                    >

                                        <i className="devicon-github-plain"></i>
                                        View Code

                                    </Button>
                                </div>
                            </div>
                        </div>

                    </Col>

                    <Col>
                        <div style={{marginLeft: '-20%'}}>

                            <h3>React.js Movie App</h3>

                            <p>Bacon ipsum dolor amet shoulder pork chop buffalo, ham t-bone spare ribs leberkas turducken pork belly.
                            Pastrami chislic short loin burgdoggen ball tip cow. Picanha drumstick sausage flank pork chop tail
                            fatback bacon. Turkey turducken salami ball tip, corned beef pork loin porchetta burgdoggen tri-tip
                            prosciutto meatloaf strip steak sausage buffalo pork belly.</p>
                        </div>
                    </Col>
                </Row>
                </Fade>
                <Fade>
                <Row>
                    <Col>
                        <div class="project-div" style={{flex: '1'}}>
                            <img
                                class="project-div-img"
                                src="https://alfredorafael.com/wp-content/uploads/2019/05/NewsAPI.png"
                                alt="project"
                            />
                            <div class="project-overlay-div">
                                <div style={{ display: 'block' }}>

                                    <Button
                                        className="overlay-content btn btn-outline-primary"
                                        style={{
                                            fontWeight: "thin",
                                            color: "white",
                                            fontSize: "100%",
                                            padding: "0",
                                        }}
                                    >
                                        Open Website
                                        </Button>


                                </div>
                                <div style={{ display: 'block' }}>


                                    <Button
                                        className="overlay-content btn-outline-primary"
                                        style={{
                                            fontWeight: "thin",
                                            color: "white",
                                            fontSize: "100%",
                                            padding: "0",
                                        }}
                                    >

                                        <i className="devicon-github-plain"></i>
                                        View Code

                                    </Button>
                                </div>
                            </div>
                        </div>

                    </Col>

                    <Col>
                        <div style={{marginLeft: '-20%'}}>

                            <h3>React.js News App</h3>

                            <p>Bacon ipsum dolor amet shoulder pork chop buffalo, ham t-bone spare ribs leberkas turducken pork belly.
                            Pastrami chislic short loin burgdoggen ball tip cow. Picanha drumstick sausage flank pork chop tail
                            fatback bacon. Turkey turducken salami ball tip, corned beef pork loin porchetta burgdoggen tri-tip
                            prosciutto meatloaf strip steak sausage buffalo pork belly.</p>
                        </div>
                    </Col>
                </Row>
                </Fade>
                <Fade>
                <Row>
                    <Col>
                        <div class="project-div" style={{flex: '1'}}>
                            <img
                                class="project-div-img"
                                src="https://alfredorafael.com/wp-content/uploads/2019/05/ViTOuter.png"
                                alt="project"
                            />
                            <div class="project-overlay-div">
                                <div style={{ display: 'block' }}>

                                    <Button
                                        className="overlay-content btn btn-outline-primary"
                                        style={{
                                            fontWeight: "thin",
                                            color: "white",
                                            fontSize: "100%",
                                            padding: "0",
                                        }}
                                    >
                                        Open Website
                                        </Button>


                                </div>
                                <div style={{ display: 'block' }}>


                                    <Button
                                        className="overlay-content btn-outline-primary"
                                        style={{
                                            fontWeight: "thin",
                                            color: "white",
                                            fontSize: "100%",
                                            padding: "0",
                                        }}
                                    >

                                        <i className="devicon-github-plain"></i>
                                        View Code

                                    </Button>
                                </div>
                            </div>
                        </div>

                    </Col>

                    <Col>
                        <div style={{marginLeft: '-20%'}}>

                            <h3>Vets-In-Tech</h3>

                            <p>Bacon ipsum dolor amet shoulder pork chop buffalo, ham t-bone spare ribs leberkas turducken pork belly.
                            Pastrami chislic short loin burgdoggen ball tip cow. Picanha drumstick sausage flank pork chop tail
                            fatback bacon. Turkey turducken salami ball tip, corned beef pork loin porchetta burgdoggen tri-tip
                            prosciutto meatloaf strip steak sausage buffalo pork belly.</p>
                        </div>
                    </Col>
                </Row>
                </Fade>
            </Container>
        </React.Fragment>
    );
};

export default Projects;
