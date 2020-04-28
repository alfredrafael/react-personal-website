import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CssResume.css";
import $ from "jquery";
import Navbar from "../Navbar";

const Exploratory = () => {
  useEffect(() => {
    $(".navbar-fading-effect").css("background", "rgba(4, 1, 130, .8)");

    window.onscroll = () => {
      var scrollStatus = $(window).scrollTop();

      if (scrollStatus > 115) {
        $(".navbar-fading-effect").css("background", "rgba(4, 1, 130, .6)"); // changes to...
        $(".navbar-fading-effect").css("transition", ".5s");
      } else {
        $(".navbar-fading-effect").css("background", "rgba(4, 1, 130, .8)");
      }
    };
  });

  return (
    <React.Fragment>
      <Container>
        <div id="resume" style={{ paddingTop: "12%" }}>
          <img
            src="https://alfredorafael.com/wp-content/uploads/2019/07/FullProfessionalPictureCropped.png"
            alt="Alfredo Pabon"
            className='professional-picture'
          />
          <h1>Alfredo R. Pabón</h1>

          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Row style={{ marginBottom: '1.5%' }}>
            <Col style={{}}>
              <Row>
                <i className="fas fa-envelope" style={{ fontSize: "150%", color: "#464646", marginRight: '3%' }} />{" "}
                <span className="text-in-contact-info">alfredrafael@gmail.com</span>
              </Row>
            </Col>

            <Col>
              <Row>
                <i class="fab fa-github" style={{ fontSize: "175%", marginLeft: ".20%", marginRight: '4%', color: '#464646', }} />{" "}
                <span className="text-in-contact-info">Linkedin.com/in/alfredo-rafael/</span>
              </Row>
            </Col>
          </Row>
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}




          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Row style={{ marginBottom: '1.8%' }}>
            <Col style={{}}>
              <Row>
                <img src="https://alfredorafael.com/wp-content/uploads/2020/04/phone_icon-1.png" alt="phone icon" style={{ maxWidth: '7%', marginLeft: '-.5%', marginRight: '2%' }} />{" "}
                <span className="text-in-contact-info">+1 (617) 580-1400</span>
              </Row>
            </Col>

            <Col>
              <Row>
                <i className="fab fa-linkedin" style={{ fontSize: "180%", marginLeft: ".20%", marginRight: '4%', color: '#464646' }} />{" "}
                <span className="text-in-contact-info">Linkedin.com/in/alfredo-rafael/</span>
              </Row>
            </Col>
          </Row>

          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}






          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Row style={{ marginBottom: '1.5%' }}>
            <Col style={{}}>
              <Row>
                <i className="fas fa-file-pdf" style={{ fontSize: "180%", marginLeft: ".20%", marginRight: '4%', color: 'red', opacity: '.7' }} />{" "}
                <span className="text-in-contact-info">PDF Version</span>
              </Row>
            </Col>

            <Col>

            </Col>
          </Row>

          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}


          <p id="objective">
            Software engineer, educator, and US Army veteran looking forward to joining a rich,
            collaborative environment.
          </p>
          <dl>
            <dt>Skills Set</dt>
            <dd>
              <h2>Software Development</h2><br />

              <Row className="2skillColumns" style={{ display: 'flex' }}>
                <Col className="skillColumn1" style={{ flex: '1', }}>
                  <div><i className="devicon-javascript-plain" style={{ fontSize: '250%', color: 'black' }} /> Javascript</div>
                  <div><i className="devicon-react-plain" style={{ fontSize: '250%', color: 'black' }} /> React</div>
                  <div><i className="devicon-nodejs-plain" style={{ fontSize: '250%' }} /> Node.js;</div>
                  <div><i className="devicon-postgresql-plain" style={{ fontSize: '250%' }} /> PostgreSQL;</div>
                  <div><i className="devicon-wordpress-plain" style={{ fontSize: '250%' }} /> WordPress</div>
                </Col>
                <Col className="skillColumn2" style={{ flex: '1', }}>
                  <p><i className="devicon-jquery-plain" style={{ fontSize: '250%', color: 'black' }} /> jQuery</p>
                  <p><i className="devicon-css3-plain" style={{ fontSize: '250%', color: 'black' }} /> CSS3</p>
                  <p><i className="devicon-github-plain" style={{ fontSize: '250%', color: 'black' }} /> Github</p>
                  <p><i className="devicon-bootstrap-plain" style={{ fontSize: '250%', color: 'black' }} /> Bootstrap</p>
                  <p><i className="devicon-git-plain" style={{ fontSize: '250%', color: 'black' }} /> Git</p>
                </Col>
              </Row>
            </dd>
          </dl>
          <dl>
            <dt>Experience</dt>
            <dd>
              <h2>Office Skills</h2>
              <p>
                Office and records management, database administration, event
                organization, customer support, travel coordination
              </p>
              <h2>Computer skills</h2>
              <p>
                Microsoft productivity software (Word, Excel, etc), Adobe
                Creative Suite, Windows
              </p>
            </dd>
          </dl>
          <dl>
            <dt>Experience</dt>
            <dd>
              <h2>
                Consulting Criminal<span>London 1892 – present</span>
              </h2>
              <ul>
                <li>Development within the criminal underworld</li>
                <li>Conducted negotiations with several rogue governments</li>
              </ul>
              <h2>
                The Coldstream Guards<span>Army Coach, London 1889 – 1888</span>
              </h2>
              <ul>
                <li>Recruiting, training and terrorizing young men.</li>
              </ul>
              <h2>
                Oxford University
                <span>Professor of Mathematics 1885 – 1888</span>
              </h2>
              <ul>
                <li>
                  Published papers in binomials, asteroid dynamics and game
                  theory
                </li>
                <li>Intimidated students</li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>Hobbies</dt>
            <dd>World domination, Social Manipulation, Murder Most Foul</dd>
          </dl>
          <dl>
            <dt>References</dt>
            <dd>Available on request</dd>
          </dl>
          <p className="objective" style={{ marginTop: "2rem" }}>
            (
            <a href="http://thenewcode.com/553/Build-A-Responsive-Web-Résumé">
              Return to the original blog article
            </a>
            .)
          </p>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Exploratory;
