import React, {useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CssResume.css";
import $ from 'jquery';
import Navbar from '../Navbar';


const Exploratory = () => {


  useEffect(() => {    

  $(".navbar-fading-effect").css("background" , "rgba(4, 1, 130, .8)");

    window.onscroll = () => {

      var scrollStatus = $(window).scrollTop();

      if (scrollStatus > 115) {
        $(".navbar-fading-effect").css("background" , "rgba(4, 1, 130, .6)"); // changes to...
        $(".navbar-fading-effect").css("transition" , ".5s");
      } else {
        $(".navbar-fading-effect").css("background" , "rgba(4, 1, 130, .8)");
      }
    }
  })

  return (
    <React.Fragment>
      <Container>
        <div id="resume" style={{ paddingTop: "10%" }}>
          <img
            src="https://alfredorafael.com/wp-content/uploads/2019/07/FullProfessionalPictureCropped.png"
            alt="Alfredo R. Pabón"
            className="resumePic"
            style={{ zIndex: -1 }}
          />
          <p />
          <h1 style={{ color: "#464646" }}>
            Alfredo R. Pabon{" "}
            <a href="https://linkedin.com/in/alfredo-rafael/">
              <i
                className="fab fa-linkedin"
                style={{ fontSize: "100%", color: "#464646", marginLeft: "3%" }}
              />
            </a>
            <a href="https://github.com/alfredrafael">
              <i
                className="devicon-github-plain"
                style={{ fontSize: "105%", color: "#464646", marginLeft: "1%" }}
              />
            </a>
          </h1>
          <div
            className="contactInfoContiner"
            style={{ fontSize: "100%", marginBottom: "3%" }}
          >
            <div style={{ marginBottom: "1%" }}>
              <i
                className="fas fa-mobile-alt"
                style={{ fontSize: "155%", marginLeft: ".30%" }}
              />{" "}
              &nbsp;(617) 580-1400
            </div>
            <div
              className="contactInfoContainer"
              style={{ marginBottom: "1%" }}
            >
              <i className="fas fa-envelope" style={{ fontSize: "130%" }}>
                <a alt="email address" href="mailto:alfredrafael@gmail.com" />
              </i>
              <a href="mailto:alfredrafael@gmail.com">
                {" "}
                &nbsp; alfredrafael@gmail.com{" "}
              </a>
            </div>
            <div
              className="contactInfoContainer"
              style={{ marginBottom: "1%" }}
            >
                <a
                  href="https://alfredorafael.com/wp-content/uploads/2020/04/Resume_Alfredo_Rafael.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="PDF version of my resume"
                >
                              <i className="fas fa-file-pdf" style={{ fontSize: "148%", color:"black" }}>

              </i>
              </a>
              <a
                href="https://alfredorafael.com/wp-content/uploads/2020/04/Resume_Alfredo_Rafael.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                &nbsp; Resume PDF{" "}
              </a>
            </div>
            <p />
          </div>
          <p id="objective">
            Software engineer, educator, and US Army veteran looking forward to
            joining a rich, collaborative environment.
          </p>
          <dl>
            <dt>
              <p style={{ color: "black" }}>Skills</p>
            </dt>
            <dd>
              <h2 style={{ marginBottom: "7%" }}>
                <p>Web Development</p>
              </h2>
              <div className="skillColumns">
                <div className="skillColumn1">
                  <p>
                    <i
                      className="devicon-javascript-plain"
                      style={{ fontSize: "160%", color: "black" }}
                    />{" "}
                    Javascript
                  </p>
                  <p>
                    <i
                      className="devicon-react-plain"
                      style={{ fontSize: "160%", color: "black" }}
                    />{" "}
                    React
                  </p>
                  <p>
                    <i
                      className="devicon-nodejs-plain"
                      style={{ fontSize: "160%" }}
                    />{" "}
                    Node.js;
                  </p>
                  <p>
                    <i
                      className="devicon-postgresql-plain"
                      style={{ fontSize: "160%" }}
                    />{" "}
                    PostgreSQL;
                  </p>
                  <p>
                    <i
                      className="devicon-wordpress-plain"
                      style={{ fontSize: "160%" }}
                    />{" "}
                    WordPress
                  </p>
                  <p />
                </div>
                <div className="skillColumn2">
                  <p>
                    <i
                      className="devicon-css3-plain"
                      style={{ fontSize: "160%", color: "black" }}
                    />{" "}
                    CSS3
                  </p>
                  <p>
                    <i
                      className="devicon-jquery-plain"
                      style={{ fontSize: "160%", color: "black" }}
                    />{" "}
                    jQuery
                  </p>
                  <p>
                    <i
                      className="devicon-github-plain"
                      style={{ fontSize: "160%", color: "black" }}
                    />{" "}
                    Github
                  </p>
                  <p>
                    <i
                      className="devicon-bootstrap-plain"
                      style={{ fontSize: "160%", color: "black" }}
                    />{" "}
                    Bootstrap
                  </p>
                  <p>
                    <i
                      className="devicon-git-plain"
                      style={{ fontSize: "160%", color: "black" }}
                    />{" "}
                    Git
                  </p>
                </div>
                <p />
              </div>
            </dd>
          </dl>
          <dl>
            <dt>
              <p style={{ color: "black" }}>Experience</p>
            </dt>
            <dd>
              <h2>
                <p>Front-End Developer</p>
                <p>
                  <span>Malden, MA – 2019-present</span>
                </p>
              </h2>
              <h2
                style={{
                  fontStyle: "italic",
                  fontWeight: 100,
                  marginBottom: "-2%",
                }}
              >
                <img
                  src="https://alfredorafael.com/wp-content/uploads/2020/03/softworld_logo.png"
                  style={{
                    maxWidth: "7%",
                    verticalAlign: "middle",
                    marginBottom: ".5%",
                    marginLeft: ".3",
                    opacity: "0.7",
                  }}
                />{" "}
                Softworld Consulting &amp; Solutions{" "}
              </h2>
              <ul style={{ margin: "3%" }}>
                <li style={{ marginBottom: "3%" }}>
                  <p>
                    I design and code our clients' user interface, improve their
                    legacy websites + write code to optimize for responsiveness,
                    load times, user-experience and cross-browser compatibility
                  </p>
                </li>
              </ul>
              <p />
              <h2>
                <p>Software Developer</p>
                <p>
                  <span>Waltham, MA – fall 2019</span>
                </p>
              </h2>
              <h2
                style={{
                  fontStyle: "italic",
                  fontWeight: 100,
                  marginBottom: "-2%",
                }}
              >
                <img
                  src="https://alfredorafael.com/wp-content/uploads/2019/10/CFN.jpg"
                  style={{
                    maxWidth: "6.3%",
                    verticalAlign: "middle",
                    marginBottom: ".5%",
                    opacity: "0.7",
                  }}
                />{" "}
                Commonwealth Financial Network{" "}
              </h2>
              <ul style={{ margin: "3%" }}>
                <li style={{ marginBottom: "3%" }}>
                  <p>
                    Developed and styled React.js UI applications, leveraging
                    the power of React.js hooks and functional components for
                    internal web application
                  </p>
                </li>
                <li style={{ marginBottom: "3%" }}>
                  <p>
                    Created and edited webpages using OpenText CMS, ServiceNow
                    for task-tracking, and Microsoft TFS for version control{" "}
                  </p>
                </li>
              </ul>
              <p />
              <h2>
                <p>Web Development Fellowship</p>
                <p>
                  <span>Boston, MA – 2018</span>
                </p>
              </h2>
              <h2
                style={{
                  fontStyle: "italic",
                  fontWeight: 100,
                  marginBottom: "-2%",
                }}
              >
                <img
                  src="https://alfredorafael.com/wp-content/uploads/2019/03/ga-logo.png"
                  style={{
                    maxWidth: "7%",
                    verticalAlign: "middle",
                    marginBottom: ".5%",
                    opacity: "0.7",
                  }}
                />{" "}
                General Assembly
              </h2>
              <ul style={{ margin: "3%" }}>
                <li style={{ marginBottom: "3%" }}>
                  <p>
                    Developed and styled full-stack web applications in
                    individual and group settings, and on time sensitive
                    schedules
                  </p>
                </li>
                <li style={{ marginBottom: "3%" }}>
                  <p>
                    Pair-programing experience and mastery of Github and GIT for
                    version control
                  </p>
                </li>
              </ul>
              <p />
              <h2>
                <p>Spanish Teacher</p>
                <p>
                  <span>Boston, MA – 2013-2017</span>
                </p>
              </h2>
              <h2
                style={{
                  fontStyle: "italic",
                  fontWeight: 100,
                  marginBottom: "-2%",
                }}
              >
                <img
                  src="https://alfredorafael.com/wp-content/uploads/2019/03/bpsLogo2.png"
                  style={{
                    maxWidth: "6.5%",
                    verticalAlign: "middle",
                    marginBottom: ".5%",
                    background: "#dee4ed",
                    borderRadius: "50%",
                    opacity: "0.9",
                  }}
                />{" "}
                Boston Public Schools
              </h2>
              <ul style={{ margin: "3%" }}>
                <li style={{ marginBottom: "3%" }}>
                  <p>
                    Instructed Spanish as a foreign language to students ranging
                    from high school to elementary school
                  </p>
                </li>
                <li style={{ marginBottom: "3%" }}>
                  <p>
                    Developed and implemented a humanities curriculum for
                    bilingual students across several inner-city schools
                  </p>
                </li>
              </ul>
              <p />
              <h2 style={{ marginTop: "3%" }}>
                <p>Chemical Operations Specialist</p>
                <p>
                  <span>C/Co 1-296 – 2005-2011</span>
                </p>
              </h2>
              <h2
                style={{
                  fontStyle: "italic",
                  fontWeight: 100,
                  marginBottom: "-2%",
                }}
              >
                <img
                  src="https://alfredorafael.com/wp-content/uploads/2019/03/ARNG-logo.png"
                  style={{
                    maxWidth: "7%",
                    verticalAlign: "middle",
                    marginBottom: ".5%",
                    opacity: "0.8",
                  }}
                />{" "}
                US Army National Guard
              </h2>
              <ul style={{ margin: "3%" }}>
                <li>
                  <p>
                    Provided training on chemical-defense readiness as Sergeant
                    E-5, NCOIC. Experienced in tactical movement, strategic
                    firearms use and security operations. Overseas deployments
                    as follows:{" "}
                  </p>
                </li>
                <p />
                <ul
                  className="dashed"
                  style={{ color: "#464646", fontSize: "120%" }}
                >
                  <li
                    className="dashed"
                    style={{ listStylePosition: "inside" }}
                  >
                    <strong style={{ fontSize: "100%" }}>
                      Multinational Force and Observers – &nbsp; Egypt; &nbsp;
                      2006
                    </strong>
                    <p />
                    <ul style={{ fontSize: "100%" }}>
                      <li
                        className
                        style={{
                          listStylePosition: "inside",
                          fontSize: "100%",
                        }}
                      >
                        Ensured implementation of Egypt and Israel Peace
                        Treaty’s security provisions.
                      </li>
                      <p />
                      <li
                        className="dashed"
                        style={{
                          listStylePosition: "inside",
                          fontSize: "100%",
                        }}
                      >
                        Patrolled the Egyptian-Israel’s northern border,
                        providing surveillance across MFO observation posts.
                      </li>
                    </ul>
                  </li>
                  <br />
                  <li
                    className="dashed"
                    style={{ listStylePosition: "inside", color: "#464646" }}
                  >
                    <strong style={{ color: "#464646", fontSize: "99%" }}>
                      NATO KFOR: Camp Bondsteel – &nbsp; &nbsp; &nbsp; &nbsp;
                      Kosovo; &nbsp; 2009
                    </strong>
                    <p />
                    <ul style={{ fontSize: "100%" }}>
                      <li
                        className
                        style={{
                          listStylePosition: "inside",
                          fontSize: "100%",
                        }}
                      >
                        Patrolled Serbian-Kosovo border in NATO-led peacekeeping
                        operation responsible for establishing Kosovo’s secure
                        environment.
                      </li>
                    </ul>
                  </li>
                  <dl>
                    <dt>
                      <p style={{ color: "black" }}>Education</p>
                    </dt>
                    <dd>
                      <p />
                      <h2 style={{ marginTop: "-4%", marginBottom: "1.5%" }}>
                        <p>Front-End Web Development</p>
                        <p>
                          <span>Boston, MA – 2018 </span>
                        </p>
                      </h2>
                      <h2
                        style={{
                          fontStyle: "italic",
                          fontWeight: 100,
                          marginTop: "-1%",
                          fontSize: "150%",
                          marginBottom: "5%",
                        }}
                      >
                        <img
                          src="https://alfredorafael.com/wp-content/uploads/2019/03/ga-logo.png"
                          style={{
                            maxWidth: "5%",
                            verticalAlign: "middle",
                            marginBottom: ".5%",
                          }}
                        />{" "}
                        General Assembly{" "}
                      </h2>
                      <h2 style={{ marginTop: "5%", marginBottom: "1.5%" }}>
                        <p>Web Development</p>
                        <p>
                          <span>Los Angeles, CA – 2017 </span>
                        </p>
                      </h2>
                      <h2
                        style={{
                          fontStyle: "italic",
                          fontWeight: 100,
                          marginTop: "-1%",
                          fontSize: "150%",
                          marginBottom: "5%",
                        }}
                      >
                        <img
                          src="https://alfredorafael.com/wp-content/uploads/2019/03/antioch-logo.png"
                          style={{
                            maxWidth: "5%",
                            verticalAlign: "middle",
                            marginBottom: ".5%",
                          }}
                        />{" "}
                        Antioch University
                      </h2>
                      <p> </p>
                      <h2>
                        <p>Master of Arts in Education</p>
                        <p>
                          <span>Oulu, Finland – 2013</span>
                        </p>
                      </h2>
                      <h2
                        style={{
                          fontStyle: "italic",
                          fontSize: "150%",
                          fontWeight: "lighter",
                          marginBottom: "5%",
                        }}
                      >
                        <img
                          src="https://alfredorafael.com/wp-content/uploads/2019/03/oulu-unversity-logo.png"
                          style={{
                            maxWidth: "4%",
                            verticalAlign: "middle",
                            marginBottom: ".5%",
                          }}
                        />{" "}
                        University of Oulu
                      </h2>
                      <p> </p>
                      <h2>
                        <p>Bachellor of Arts in Education</p>
                        <p>
                          <span>Puerto Rico – 2009</span>
                        </p>
                      </h2>
                      <h2
                        style={{
                          fontStyle: "italic",
                          fontSize: "150%",
                          fontWeight: 100,
                          marginBottom: "5%",
                        }}
                      >
                        <img
                          src="https://alfredorafael.com/wp-content/uploads/2019/03/univ-interamericana-logo.gif"
                          style={{
                            maxWidth: "6%",
                            verticalAlign: "middle",
                            marginBottom: ".5%",
                          }}
                        />{" "}
                        Inter-American University
                      </h2>
                      <p> </p>
                      <h2>
                        <p>Chemical Defense</p>
                        <p>
                          <span>Ft Leonard Wood, MO – 2005</span>
                        </p>
                      </h2>
                      <h2
                        style={{
                          fontStyle: "italic",
                          fontSize: "150%",
                          fontWeight: 100,
                          marginBottom: "5%",
                        }}
                      >
                        <img
                          src="https://alfredorafael.com/wp-content/uploads/2019/03/us-army-logo.png"
                          style={{
                            maxWidth: "4.8%",
                            verticalAlign: "middle",
                            marginBottom: ".5%",
                          }}
                        />{" "}
                        US Army Chemical School
                      </h2>
                    </dd>
                  </dl>
                  <dl>
                    <dt>
                      <p style={{ color: "black" }}>Aditional Skills</p>
                    </dt>
                    <dd>
                      <h2 style={{ marginTop: "5%" }}>
                        <p>Web Design</p>
                      </h2>
                      <p style={{ marginLeft: "2%" }}>
                        Experienced with both Sketch and Figma for icon
                        development, picture manipulation and wireframes
                        creation
                      </p>
                      <h2>
                        <p>Video Editing</p>
                      </h2>
                      <p style={{ marginLeft: "2%" }}>
                        From recording and embedding video into a website, to
                        explaining complex concepts in an audio-visual format,
                        video editing is one of my areas of expertise
                      </p>
                      <p />
                      <h2>
                        <p>Communication</p>
                      </h2>
                      <p style={{ marginLeft: "2%" }}>
                        Native Fluency in Spanish, excellent presentation skills
                      </p>
                      <p></p>
                    </dd>
                  </dl>
                  <p className="objective" style={{ marginTop: "2rem" }}>
                    (
                    <a
                      href="https://alfredorafael.com/wp-content/uploads/2020/04/Resume_Alfredo_Rafael.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Need a printed version of my resume? Click here!
                    </a>
                    .)
                  </p>
                  <p />
                </ul>
              </ul>
            </dd>
          </dl>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Exploratory;
