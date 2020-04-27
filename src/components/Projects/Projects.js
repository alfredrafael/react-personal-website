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
              <div class="project-div" style={{ flex: "1" }}>
                <img
                  class="project-div-img"
                  src="https://alfredorafael.com/wp-content/uploads/2020/04/movie-app.png"
                  alt="project"
                />
                <div className="project-overlay-div">
                  <div className="inner-overlay-div">
                    <a
                      href="https://alfredo-movie-app-with-react.netlify.app/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div className="overlay-content visit-website">
                        Visit Website{" "}
                      </div>
                    </a>
                    <a
                      href="https://alfredo-movie-app-with-react.netlify.app/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div className="overlay-content view-code">
                        <i className="devicon-github-plain"></i>&nbsp; View Code
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </Col>

            <Col>
              <div style={{ marginLeft: "-20%" }}>
                <h3>React.js Movie App</h3>

                <p>
                  Bacon ipsum dolor amet shoulder pork chop buffalo, ham t-bone
                  spare ribs leberkas turducken pork belly. Pastrami chislic
                  short loin burgdoggen ball tip cow. Picanha drumstick sausage
                  flank pork chop tail fatback bacon. Turkey turducken salami
                  ball tip, corned beef pork loin porchetta burgdoggen tri-tip
                  prosciutto meatloaf strip steak sausage buffalo pork belly.
                </p>
              </div>
            </Col>
          </Row>
        </Fade>
        <Fade>
          <Row>
            <Col>
              <div class="project-div" style={{ flex: "1" }}>
                <img
                  class="project-div-img"
                  src="https://alfredorafael.com/wp-content/uploads/2019/05/NewsAPI.png"
                  alt="project"
                />
                <div className="project-overlay-div">
                  <div className="inner-overlay-div">
                    <a
                      href="https://alfredo-movie-app-with-react.netlify.app/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div className="overlay-content visit-website">
                        Visit Website{" "}
                      </div>
                    </a>
                    <a
                      href="https://alfredo-movie-app-with-react.netlify.app/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div className="overlay-content view-code">
                        <i className="devicon-github-plain"></i>&nbsp; View Code
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </Col>

            <Col>
              <div style={{ marginLeft: "-20%" }}>
                <h3>React.js News App</h3>

                <p>
                  Bacon ipsum dolor amet shoulder pork chop buffalo, ham t-bone
                  spare ribs leberkas turducken pork belly. Pastrami chislic
                  short loin burgdoggen ball tip cow. Picanha drumstick sausage
                  flank pork chop tail fatback bacon. Turkey turducken salami
                  ball tip, corned beef pork loin porchetta burgdoggen tri-tip
                  prosciutto meatloaf strip steak sausage buffalo pork belly.
                </p>
              </div>
            </Col>
          </Row>
        </Fade>
        <Fade>
          <Row>
            <Col>
              <div class="project-div" style={{ flex: "1" }}>
                <img
                  class="project-div-img"
                  src="https://alfredorafael.com/wp-content/uploads/2019/05/ViTOuter.png"
                  alt="project"
                />
                <div className="project-overlay-div">
                  <div className="inner-overlay-div">
                    <a
                      href="https://alfredo-movie-app-with-react.netlify.app/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div className="overlay-content visit-website">
                        Visit Website{" "}
                      </div>
                    </a>
                    <a
                      href="https://alfredo-movie-app-with-react.netlify.app/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div className="overlay-content view-code">
                        <i className="devicon-github-plain"></i>&nbsp; View Code
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </Col>

            <Col>
              <div style={{ marginLeft: "-20%" }}>
                <h3>Vets-In-Tech</h3>

                <p>
                  Bacon ipsum dolor amet shoulder pork chop buffalo, ham t-bone
                  spare ribs leberkas turducken pork belly. Pastrami chislic
                  short loin burgdoggen ball tip cow. Picanha drumstick sausage
                  flank pork chop tail fatback bacon. Turkey turducken salami
                  ball tip, corned beef pork loin porchetta burgdoggen tri-tip
                  prosciutto meatloaf strip steak sausage buffalo pork belly.
                </p>
              </div>
            </Col>
          </Row>
        </Fade>
      </Container>
    </React.Fragment>
  );
};

export default Projects;
