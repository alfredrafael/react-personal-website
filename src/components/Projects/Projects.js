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
                This application fetches data from <strong>The Movie Database API</strong> (TMDB), allowing users
                to see TMDB's most-popular movies + search for specific movies within the TMDB database. Users can select
                movies and read additional information about them: plot, actors, budget, etc. I built this 
                application with create-react-app, styled-components for CSS styling, @reach/router for routing, 
                prop-types for components' output checking, and <strong>font-awesome</strong> icons.
                
                  

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
                This is a fully responsive web-application using React.js to dynamically render data 
                from several news sources. Feel free to explore its code-source at the options below, 
                available at my personal page at github.com 
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
                This is a fully responsive web-application using React.js, incorporating 
                modern web-design styles such as video-backgrounds, carousel galleries, 
                responsive modals and reveal-on-scroll animations. I created this website not
                only to showcase our cohort of US veterans, but also to show our appreciation 
                to the organizations that made it possible: “Vets In Tech” and “Draft kings”.
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
