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
        <div id="resume" style={{ paddingTop: "10%" }}>
          <img
            src="https://alfredorafael.com/wp-content/uploads/2019/07/FullProfessionalPictureCropped.png"
            alt="James Moriarty"
          />
          <h1>Alfredo R. Pabón</h1>

          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Row style={{ marginBottom: '1.5%' }}>
            <Col style={{}}>
              <Row>
                <i className="fas fa-envelope" style={{ fontSize: "145%", marginLeft: ".20%", marginRight: '1%' }} />{" "}
                <span className="">alfredrafael@gmail.com</span>
              </Row>
            </Col>

            <Col>
              <Row>
                <i className="devicon-github-plain" style={{ fontSize: "155%", marginRight: '1%' }} />{" "}
                <span className="">Linkedin.com/in/alfredo-rafael/</span>
              </Row>
            </Col>
          </Row>

          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}




          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Row style={{ marginBottom: '1.8%' }}>
            <Col style={{}}>
              <Row>
                <i className="fas fa-mobile-alt" style={{ fontSize: "155%", marginLeft: ".70%", marginRight: '1%' }} />{" "}
                <span className="">(617) 580-1400</span>
              </Row>
            </Col>

            <Col>
              <Row>
                <i className="fab fa-linkedin" style={{ fontSize: "155%", marginRight: '1%' }} />{" "}
                <span className="">Linkedin.com/in/alfredo-rafael/</span>
              </Row>
            </Col>
          </Row>

          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}






 {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
 <Row style={{ marginBottom: '1.5%' }}>
            <Col style={{}}>
              <Row>
                <i className="fas fa-file-pdf" style={{ fontSize: "155%", marginLeft: ".70%", marginRight: '1%' }} />{" "}
                <span className="">PDF Version</span>
              </Row>
            </Col>

            <Col>
              <Row>
                <i className="fab fa-linkedin" style={{ fontSize: "155%", marginRight: '1%' }} />{" "}
                <span className="">Linkedin.com/in/alfredo-rafael/</span>
              </Row>
            </Col>
          </Row>

{/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}


          <p id="objective">
            I am a reserved but ambitious young professional seeking a career
            that fits my professional skills, personality, and murderous
            tendencies. My good birth, excellent education and phenomenal
            mathematical faculty have allowed me to advance the prospects of
            several criminal enterprises.
          </p>
          <dl>
            <dt>Education</dt>
            <dd>
              <h2>Oxford University</h2>
              <p>
                <strong>Major:</strong> Applied Mathematics
                <br />
                <strong>Minor:</strong> Romance Languages
              </p>
            </dd>
          </dl>
          <dl>
            <dt>Skills</dt>
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
