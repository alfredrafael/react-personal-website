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
                <div className="project-overlay-div movie-project">
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
                      href="https://github.com/alfredrafael/react-movie-app"
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
              <div className="project-text" style={{ marginLeft: "-20%", marginTop: '-3%' }}>
                <h3>Fetch Movie App<small></small></h3>
                <p>
                  This application fetches data from{" "} <strong>The Movie Database API</strong> (TMDB)
                  with React.js, allowing users to see TMDB's most-popular films
                  + search for specific movies within the TMDB database.
                  Users can select movies and read
                  additional information about them: plot, actors, budget, etc.
                  I built this application with create-react-app,
                  styled-components for CSS styling, @reach/router for routing,
                  prop-types for components' output checking, and{" "}
                  <strong>font-awesome</strong> icons.
                  <br /><p></p>
                  <div className="project-icons" style={{ display: "flex" }}>
                    <div style={{ fontSize: "150%", margin: "1% 5% -3% 0" }}>
                      <i class="devicon-javascript-plain dev-icon-in-description"></i>
                    </div>

                    <div style={{ fontSize: "150%", margin: "1% 5% -3% 0" }}>
                      <i class="devicon-react-original  dev-icon-in-description"></i>
                    </div>

                    <div style={{ fontSize: "150%", margin: "1% 5% -3% 0" }}>
                      <i class="devicon-css3-plain "></i>
                    </div>

                    <div style={{ fontSize: "150%", margin: "1% 5% -3% 0" }}>
                      <i class="devicon-bootstrap-plain"></i>
                    </div>
                  </div>
                </p>
              </div>
            </Col>
          </Row>
        </Fade>

        <hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.9)', width: '70%' }} />
        <br /><br />

        {/*
        <Fade>
          <Row>
            <Col>
              <div class="project-div" style={{ flex: "1" }}>
                <img
                  class="project-div-img"
                  src="https://alfredorafael.com/wp-content/uploads/2019/05/NewsAPI.png"
                  alt="project"
                />
                <div className="project-overlay-div news-project">
                  <div className="inner-overlay-div">
                    <a
                      href="https://alfredrafael.github.io/news-center/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div className="overlay-content visit-website">
                        Visit Website{" "}
                      </div>
                    </a>
                    <a
                      href="https://github.com/alfredrafael/news-center"
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
              <div className="project-text" style={{ marginLeft: "-20%", marginTop: '-3%' }}>
                <h3>React.js News App</h3>

                <p>
                  This application allow users to see <strong>BBC</strong> and{" "}
                  <strong>TechCrunch</strong> most-popular articles, all fetched
                  and dynamically rendered from <strong>The News API</strong>.
                  Users can see their news article by clicking "Read
                  Full Article" or title of the news-article itself. I built
                  this application using create-react-app, material-UI for CSS
                  styling, and React's class-based components. I am currently
                  working on creating a "react hooks" version of this very same
                  project, so... Stay tuned!
                  <br /><br />
                  <div className="project-icons" style={{ display: "flex" }}>

                    <div style={{ fontSize: "150%", margin: "1% 5% -3% 0" }}>
                      <i class="devicon-css3-plain dev-icon-in-description"></i>
                    </div>

                    <div style={{ fontSize: "150%", margin: "1% 5% -3% 0" }}>
                      <i class="devicon-react-original  dev-icon-in-description"></i>
                    </div>

                    <div style={{ fontSize: "150%", margin: "1% 5% -3% 0" }}>
                      <i class="devicon-javascript-plain dev-icon-in-description"></i>
                    </div>

                  </div>
                </p>
              </div>
            </Col>
          </Row>
        </Fade>


        <hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.9)', width: '70%' }} />
        <br />        <br />
*/}

        <Fade>
          <Row>
            <Col>
              <div class="project-div" style={{ flex: "1" }}>
                <img
                  class="project-div-img"
                  src="https://alfredorafael.com/wp-content/uploads/2019/05/ViTOuter.png"
                  alt="project"
                />
                <div className="project-overlay-div vit-project">
                  <div className="inner-overlay-div">
                    <a
                      href="https://alfredrafael.github.io/vets-in-tech/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div className="overlay-content visit-website">
                        Visit Website{" "}
                      </div>
                    </a>
                    <a
                      href="https://github.com/alfredrafael/vets-in-tech"
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
              <div className="project-text" style={{ marginLeft: "-20%", marginTop: '-3%' }}>
                <h3>Vets-In-Tech</h3>
                <br />

                <p>
                  This web application showcases students and faculty members of Vets-in-Tech: First Class,
                  (New England Chapter) by providing users with a view of each cohort member, with his/her
                  bio, and a picture-gallery of the learning process. I took and edited the pictures and
                  videos myself.
                <br />
                  <br />
                  <div className="project-icons" style={{ display: "flex" }}>
                    <div style={{ fontSize: "150%", margin: "1% 5% -3% 0" }}>
                      <i class="devicon-css3-plain "></i>
                    </div>

                    <div style={{ fontSize: "150%", margin: "1% 5% -3% 0" }}>
                      <i class="devicon-react-original  dev-icon-in-description"></i>
                    </div>

                    <div style={{ fontSize: "150%", margin: "1% 5% -3% 0" }}>
                      <i class="devicon-javascript-plain dev-icon-in-description"></i>
                    </div>

                  </div>
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
