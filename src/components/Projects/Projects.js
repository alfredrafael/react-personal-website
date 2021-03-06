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
              <div className="project-div" style={{ flex: "1" }}>
                <img
                  className="project-div-img"
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
                        <i className="devicon-github-plain"></i>&nbsp; See code
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </Col>

            <Col>
              <div className="project-text" style={{ marginLeft: "-20%", marginTop: '-3%' }}>
                <h3>Fetch Movie App<small></small></h3>
                <p> This application fetches data from <span>The Movie Database API (TMDB)</span> with <span>React.js</span>, 
                allowing users to see TMDB's most-popular films + search for specific movies within 
                the TMDB database. Users can select movies and read additional information about them: 
                plot, actors, budget, etc. I built this application with create-react-app, <span>styled-components</span> for
                CSS styling, @reach/router for routing, prop-types for components' output checking, 
                and <span>font-awesome icons</span>.</p>

                  <br />
                  <div className="project-icons" style={{ display: "flex" }}>
                    <div style={{ fontSize: "150%", margin: "1% 5% -3% 0" }}>
                      <p><i className="devicon-javascript-plain dev-icon-in-description"></i></p>
                    </div>

                    <div style={{ fontSize: "150%", margin: "1% 5% -3% 0" }}>
                    <p>  <i className="devicon-react-original  dev-icon-in-description"></i></p>
                    </div>

                    <div style={{ fontSize: "150%", margin: "1% 5% -3% 0" }}>
                    <p>  <i className="devicon-css3-plain "></i></p>
                    </div>

                    <div style={{ fontSize: "150%", margin: "1% 5% -3% 0" }}>
                     <p> <i className="devicon-bootstrap-plain"></i></p>
                    </div>
                  </div>
              </div>
            </Col>
          </Row>
        </Fade>

        <hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.9)', width: '70%' }} />
        <br /><br />

        <Fade>
          <Row>
            <Col>
              <div className="project-div" style={{ flex: "1" }}>
                <img
                  className="project-div-img"
                  src="https://alfredorafael.com/wp-content/uploads/2020/07/BodaThumb.png"
                  alt="project"
                />
                <div className="project-overlay-div news-project">
                  <div className="inner-overlay-div">
                    <a
                      href="https://www.junethe23rd.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div className="overlay-content visit-website">
                        Visti Website{" "}
                      </div>
                    </a>
                    <a
                      href="https://github.com/alfredrafael/boda"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div className="overlay-content view-code">
                        <i className="devicon-github-plain"></i>&nbsp; See Code
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </Col>

            <Col>
              <div className="project-text" style={{ marginLeft: "-20%", marginTop: '-3%' }}>
                <h3>Wedding Anniversary</h3>

                <p>
                This simple application was a present to celebrate the 30-year wedding anniversay of this lovely couple. 
                What originally was "just transfering our wedding pictures to a website" expanded into the creation of 
                other albums they were happy to see online. The tecnologies used in this project
                are <span>React.js, Reactstrap, Material UI and jQuery-React.</span>
                
                </p>
                  <br /><br />
                  <div className="project-icons" style={{ display: "flex" }}>

                    <div style={{ fontSize: "150%", margin: "1% 5% -3% 0" }}>
                  <p>    <i className="devicon-css3-plain dev-icon-in-description"></i> </p>
                    </div>

                    <div style={{ fontSize: "150%", margin: "1% 5% -3% 0" }}>
                    <p>  <i className="devicon-react-original  dev-icon-in-description"></i></p>
                    </div>

                    <div style={{ fontSize: "150%", margin: "1% 5% -3% 0" }}>
                   <p>   <i className="devicon-javascript-plain dev-icon-in-description"></i></p>
                    </div>

                  </div>
              </div>
            </Col>
          </Row>
        </Fade>



        <hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.9)', width: '70%' }} />
        <br />        <br />


        <Fade>
          <Row>
            <Col>
              <div className="project-div" style={{ flex: "1" }}>
                <img
                  className="project-div-img"
                  src="https://alfredorafael.com/wp-content/uploads/2020/07/LintecAuto.png"
                  alt="project"
                />
                <div className="project-overlay-div news-project">
                  <div className="inner-overlay-div">
                    <a
                      href="https://lintecauto.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div className="overlay-content visit-website">
                        Visit Website{" "}
                      </div>
                    </a>

                    <a
                      href="https://wordpress.org/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div className="overlay-content view-code">
                      &nbsp;Powered by <i className="devicon-wordpress-plain"></i>  
                      </div>

                    </a>

                  </div>
                </div>
              </div>
            </Col>

            <Col>
              <div className="project-text" style={{ marginLeft: "-20%", marginTop: '-3%' }}>
                <h3>LintecAuto</h3>

                <p><span>Wordpress</span> is a powerful tool to develop enterprise level applications, 
                allowing clients edit their website's content thru a wysiwyg editor. 
                I fixed it's UI theme with <span>vanilla CSS</span>, added <span>MapPress</span> to its 
                contact information and used <span>Sketch</span> to create a PNG version of its logo.  
                Although this is a business focused application (not exactly a pet-project), 
                I was happy to see the website still up and running! </p>

                  <br /><br />
                  <div className="project-icons" style={{ display: "flex" }}>

                    <div style={{ fontSize: "150%", margin: "1% 5% -3% 0" }}>
<p>                      <i className="devicon-css3-plain dev-icon-in-description"></i> </p>
                    </div>


                    <div style={{ fontSize: "150%", margin: "1% 5% -3% 0" }}>
                    <p>       <i className="devicon-wordpress-plain dev-icon-in-description"></i> </p>
                    </div>

                    <div style={{ fontSize: "150%", margin: "1% 5% -3% 0" }}>
                    <p>  <i className="devicon-html5-plain  dev-icon-in-description"></i></p>
                    </div>
                    

                  </div>
              </div>
            </Col>
          </Row>
        </Fade>


        <hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.9)', width: '70%' }} />
        <br />        <br />

        {/*
        <Fade>
          <Row>
            <Col>
              <div className="project-div" style={{ flex: "1" }}>
                <img
                  className="project-div-img"
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
                      <i className="devicon-css3-plain dev-icon-in-description"></i>
                    </div>

                    <div style={{ fontSize: "150%", margin: "1% 5% -3% 0" }}>
                      <i className="devicon-react-original  dev-icon-in-description"></i>
                    </div>

                    <div style={{ fontSize: "150%", margin: "1% 5% -3% 0" }}>
                      <i className="devicon-javascript-plain dev-icon-in-description"></i>
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
              <div className="project-div" style={{ flex: "1" }}>
                <img
                  className="project-div-img"
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
                      <i className="devicon-css3-plain "></i>
                    </div>

                    <div style={{ fontSize: "150%", margin: "1% 5% -3% 0" }}>
                      <i className="devicon-react-original  dev-icon-in-description"></i>
                    </div>

                    <div style={{ fontSize: "150%", margin: "1% 5% -3% 0" }}>
                      <i className="devicon-javascript-plain dev-icon-in-description"></i>
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
