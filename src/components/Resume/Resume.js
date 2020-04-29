import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CssResume.css";
import $ from "jquery";

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
          <section style={{ background: 'rgba(173, 216, 230, .5)', padding: '1% 0 .01% 1%', borderRadius: '5px' }}>
            <Row style={{ marginBottom: '1.5%' }}>
              <Col style={{}}>
                <Row>
                  <i className="fas fa-envelope" style={{ fontSize: "150%", color: "#464646", marginRight: '3%' }} />{" "}
                  <h2 className="text-in-contact-info">alfredrafael@gmail.com</h2>
                </Row>
              </Col>

              <Col>
                <Row>
                  <i class="fab fa-github" style={{ fontSize: "175%", marginLeft: ".20%", marginRight: '4%', color: '#464646', }} />{" "}
                  <h2 className="text-in-contact-info">github.com/alfredrafael/</h2>
                </Row>

              </Col>
            </Row>
            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}



            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row style={{ marginBottom: '1.4%' }}>
              <Col style={{}}>
                <Row>
                  {/* <img src="https://alfredorafael.com/wp-content/uploads/2020/04/phone_icon-1.png" alt="phone icon" style={{ maxWidth: '7%', marginLeft: '-.5%', marginRight: '2%' }} />{" "} */}
                  <i class="fas fa-phone-square-alt" style={{ fontSize: "170%", marginLeft: ".10%", marginRight: '3%', color: '#464646' }}></i>
                  <span className="text-in-contact-info" style={{ fontSize: '115%' }}>(617) &nbsp;580 - 1400</span>
                </Row>
              </Col>

              <Col>
                <Row>
                  <i className="fab fa-linkedin" style={{ fontSize: "180%", marginLeft: ".20%", marginRight: '4%', color: '#464646' }} />{" "}
                  <h2 className="text-in-contact-info">linkedin.com/in/alfredo-rafael/</h2>
                </Row>
              </Col>
            </Row>
            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}






            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row style={{ marginBottom: '1%' }}>
              <Col style={{}}>
                <Row>
                  <i className="fas fa-file-pdf" style={{ fontSize: "180%", marginLeft: ".20%", marginRight: '3.5%', color: '#464646' }} />{" "}
                  <h2 className="text-in-contact-info" style={{ fontSize: '120%', marginTop: '1%' }}>PDF version</h2>
                </Row>
              </Col>

              <Col>
                {/* Nothing Here yet */}
              </Col>
            </Row>
          </section>

          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}


          <br />

          <dl>
            <dt>SKILLS SET</dt>
            <dd>
              <h2><strong>Software Development</strong></h2><br />

              <Row className="2skillColumns" style={{ display: 'flex' }}>

                <Col className="skillColumn1" style={{ flex: '1', }}>
                  <div><i className="devicon-javascript-plain" style={{ fontSize: '250%', color: 'black' }} /> Javascript;</div>
                  <div><i className="devicon-react-plain" style={{ fontSize: '250%', color: 'black' }} /> React;</div>
                  <div><i className="devicon-nodejs-plain" style={{ fontSize: '250%' }} /> Node.js;</div>
                  <div><i className="devicon-postgresql-plain" style={{ fontSize: '250%' }} /> PostgreSQL;</div>
                  <div><i className="devicon-wordpress-plain" style={{ fontSize: '250%' }} /> WordPress;</div>
                </Col>

                <Col className="skillColumn2" style={{ flex: '1', }}>
                  <p><i className="devicon-css3-plain" style={{ fontSize: '250%', color: 'black' }} /> CSS3;</p>
                  <p><i className="devicon-jquery-plain" style={{ fontSize: '250%', color: 'black' }} /> jQuery;</p>
                  <p><i className="devicon-github-plain" style={{ fontSize: '250%', color: 'black' }} /> Github;</p>
                  <p><i className="devicon-bootstrap-plain" style={{ fontSize: '250%', color: 'black' }} /> Bootstrap;</p>
                  <p><i className="devicon-git-plain" style={{ fontSize: '250%', color: 'black' }} /> $Git</p>
                </Col>

              </Row>
              <hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.5)' }} />
            </dd>
          </dl>

          <dl>
            <dt>EXPERIENCE</dt>
            <dd>

              {/* // Experience 1 //////////////////////////////////////////////////////////////////////////////////////////////////// */}
              <h2><strong>Front-End Developer</strong><span>Malden, MA 2019 – present</span></h2>
              <span style={{ fontStyle: 'italic', fontSize: '115%' }}>Softworld Consulting & Solutions</span><br />
              <br />
              <ul>
                <li>
                  I design and code our clients’ user interface, improve their legacy websites and write code to optimize for responsiveness, load times, user-experience and cross-browser compatibility                </li>
              </ul>
              <hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.3)', marginTop: '5%', width: '70%' }} />
              {/* // Experience 2 //////////////////////////////////////////////////////////////////////////////////////////////////// */}
              <h2><strong>Software Developer</strong><span>Malden, MA Fall – 2019</span></h2>
              <span style={{ fontStyle: 'italic', fontSize: '115%' }}>Commonwealth Financial</span><br />
              <br />
              <ul>
                <li>
                  Developed and styled React.js UI applications, leveraging the power of React.js hooks and functional components for internal web application
                </li><br />
                <li>Created and edited webpages using OpenText CMS, ServiceNow for task-tracking, and Microsoft TFS for version control</li>
              </ul>
              <hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.3)', marginTop: '5%', width: '70%' }} />
              {/* // Experience 3 //////////////////////////////////////////////////////////////////////////////////////////////////// */}
              <h2><strong>Freelance Developer</strong><span>Boston, MA 2017</span></h2>
              <span style={{ fontStyle: 'italic', fontSize: '115%' }}>AR Web-Communications</span><br />
              <br />
              <ul>
                <li>
                  Published papers in binomials, asteroid dynamics and game theory
                  <br /><br />
                </li>
                <li>Intimidated students</li>
              </ul>
              <hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.3)', marginTop: '5%', width: '70%' }} />
              {/* // Experience 3 //////////////////////////////////////////////////////////////////////////////////////////////////// */}
              <h2><strong>Teacher</strong><span>Boston, MA 2013 – 2017</span></h2>
              <span style={{ fontStyle: 'italic', fontSize: '115%' }}>Boston Public Schools</span><br />
              <br />
              <ul>
                <li>
                  Published papers in binomials, asteroid dynamics and game
                  theory<br /><br />
                </li>
                <li>Intimidated students</li>
              </ul>
              <hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.5)', marginTop: '5%' }} />
              {/* // END Experiences ///////////////////////////////////////////////////////////////////////////////////////////////// */}
            </dd>
          </dl>
          <dl>


            <dt>EDUCATION</dt>
            <dd>
              <h2><strong>Certificate in Web Development</strong><span>Army Coach, London 1889 – 1888</span></h2><br />
              <p>
                Office and records management, database administration, event
                organization, customer support, travel coordination
              </p><hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.5)', marginTop: '5%' }} />

              <h2><strong>Web Develoment Immersive</strong><span>Army Coach, London 1889 – 1888</span></h2><br />
              <p>
                Office and records management, database administration, event
                organization, customer support, travel coordination
              </p><hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.5)', marginTop: '5%' }} />

              <h2><strong>Education and Globalization</strong><span>Army Coach, London 1889 – 1888</span></h2><br />
              <p>
                Office and records management, database administration, event
                organization, customer support, travel coordination
              </p>              <hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.5)', marginTop: '5%' }} />

              <h2><strong>Health Education</strong><span>Army Coach, London 1889 – 1888</span></h2><br />
              <p>
                Office and records management, database administration, event
                organization, customer support, travel coordination
              </p><br />


            </dd>
          </dl>
          {/* <dl>
            <dt>Hobbies</dt>
            <dd>Lorem ipsum</dd>
          </dl> */}
         
          {/* <dl>
            <dt>References</dt>
            <dd>Available on request</dd>
          </dl> 
        */}
        
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Exploratory;

{/*Return to the original blog article: "http://thenewcode.com/553/Build-A-Responsive-Web-Résumé"> */}
