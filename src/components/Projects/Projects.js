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
                        <Col>Description goes here</Col>

                        <Col>
                            <div class="project-div" style={{ margin: "0 auto" }}>
                                <img
                                    class="project-div-img"
                                    src="https://alfredorafael.com/wp-content/uploads/2020/04/movie-app.png"
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
                    </Row>
                </Fade>
                <Fade>
                    <Row>
                        <Col>Description goes here</Col>
                        <Col>
                            <div class="project-div">
                                <img
                                    class="project-div-img"
                                    src="https://alfredorafael.com/wp-content/uploads/2019/05/NewsAPI.png"
                                    alt="project"
                                />
                                <div class="project-overlay-div">
                                    <Button
                                        className="overlay-content btn btn-outline-success"
                                        style={{
                                            fontWeight: "thin",
                                            color: "white",
                                            fontSize: "100%",
                                            padding: "0",
                                        }}
                                    >
                                        Open Website
                  </Button>

                                    <Button
                                        className="overlay-content btn btn-outline-success"
                                        style={{
                                            fontWeight: "thin",
                                            color: "white",
                                            fontSize: "100%",
                                            padding: "0",
                                        }}
                                    >
                                        View Code
                  </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Fade>
                <Fade>
                    <Row>
                        <Col>Description goes here</Col>
                        <Col>
                            <div class="project-div" style={{ margin: "0 auto" }}>
                                <img
                                    class="project-div-img"
                                    src="https://alfredorafael.com/wp-content/uploads/2019/05/ViTOuter.png"
                                    alt="project"
                                />
                                <div class="project-overlay-div">
                                    <Button
                                        className="overlay-content btn btn-outline-success"
                                        style={{
                                            fontWeight: "thin",
                                            color: "white",
                                            fontSize: "100%",
                                            padding: "0",
                                        }}
                                    >
                                        Open Website
                  </Button>

                                    <Button
                                        className="overlay-content btn btn-outline-success"
                                        style={{
                                            fontWeight: "thin",
                                            color: "white",
                                            fontSize: "100%",
                                            padding: "0",
                                        }}
                                    >
                                        View Code
                  </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Fade>
            </Container>
        </React.Fragment>
    );
};

export default Projects;
