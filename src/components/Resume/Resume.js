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
          <section className="contact-information" style={{ background: 'rgba(173, 216, 230, .5)', padding: '1% 0 .01% 1%', borderRadius: '5px' }}>
            <Row style={{ marginBottom: '1.5%' }}>
              <Col style={{}}>
                <Row>
                  <a href="https://alfredorafael.com/wp-content/uploads/2020/05/Resume_Alfredo_Rafael.pdf" target="_blank" rel="noreferrer noopener">
                    <i className="fas fa-file-pdf" style={{ fontSize: "180%", marginLeft: ".20%", marginRight: '3.5%', color: '#464646' }} />{" "}
                  </a>

                  &nbsp; &nbsp;


                  <a href="https://www.linkedin.com/in/alfredo-rafael/" target="_blank" rel="noreferrer noopener">
                    <h2 className="text-in-contact-info" style={{ fontSize: '120%', marginTop: '1%' }}>PDF version</h2>
                  </a>
                </Row>
              </Col>

              <Col>
                <Row>
                  <a href="tel:+16175801400" rel="noopener noreferrer" target="_blank">
                    <i className="fas fa-envelope" style={{ fontSize: "150%", color: "#464646", marginRight: '3%' }} />{" "}
                  </a>

                  &nbsp; &nbsp;


                  <a href="tel:+16175801400" rel="noopener noreferrer" target="_blank">
                    <h2 className="text-in-contact-info">alfredrafael@gmail.com</h2>
                  </a>
                </Row>
              </Col>
            </Row>
            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}



            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row style={{ marginBottom: '1.4%' }}>
              <Col style={{}}>
                <Row>
                  <i class="fas fa-phone-square-alt" style={{ fontSize: "170%", marginLeft: ".10%", marginRight: '3%', color: '#464646' }}></i>
                  <span className="text-in-contact-info" style={{ fontSize: '115%' }}>(617) &nbsp;580 - 1400</span>
                </Row>
              </Col>

              <Col>
                <Row>
                  <a href="https://www.linkedin.com/in/alfredo-rafael/" target="_blank" rel="noreferrer noopener">
                    <i className="fab fa-linkedin" style={{ fontSize: "180%", marginLeft: ".20%", marginRight: '4%', color: '#464646' }} />{" "}
                  </a>

                  &nbsp; &nbsp;

                  <a href="https://www.linkedin.com/in/alfredo-rafael/" target="_blank" rel="noreferrer noopener">
                    <h2 className="text-in-contact-info">linkedin.com/alfredo-rafael/</h2>
                  </a>
                </Row>
              </Col>
            </Row>
            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}






            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}

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
                  <p><i className="devicon-git-plain" style={{ fontSize: '250%', color: 'black' }} /> Git;</p>
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
                  I design and code our clients user interface, improve legacy websites and optimize for responsiveness, load times, user-experience and cross-browser compatibility                </li>
              </ul>
              <hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.3)', marginTop: '5%', width: '70%' }} />
              {/* // Experience 2 //////////////////////////////////////////////////////////////////////////////////////////////////// */}
              <h2><strong>Software Developer</strong><span>Waltham, MA Fall – 2019</span></h2>
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
              <h2><strong>Freelance Developer</strong><span>Boston, MA 2017-2019</span></h2>
              <span style={{ fontStyle: 'italic', fontSize: '115%' }}>AR Web-Communications</span><br />
              <br />
              <ul>
                <li>
                  Built and redisigned WordPress platforms meeting my clients' UXD specififications
                  <br /><br />
                </li>
                <li>Created wireframes to clarify clients need and guide web-development processes</li>
              </ul>
              <hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.3)', marginTop: '5%', width: '70%' }} />
              {/* // Experience 3 //////////////////////////////////////////////////////////////////////////////////////////////////// */}
              <h2><strong>Teacher</strong><span>Boston, MA 2013 – 2017</span></h2>
              <span style={{ fontStyle: 'italic', fontSize: '115%' }}>Boston Public Schools</span><br />
              <br />
              <ul>
                <li>
                  Instructed Spanish as a foreign language to students ranging from high school to elementary school<br /><br />
                </li>
                <li>Developed and implemented a humanities curriculum for bilingual students across several inner-city schools</li>
              </ul>
              <hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.5)', marginTop: '5%' }} />
              {/* // END Experiences ///////////////////////////////////////////////////////////////////////////////////////////////// */}
              <h2><strong>Chemical Operations NCOIC</strong><span>1-296 C/Co Inf IN, 2004 – 2011</span></h2>
              <span style={{ fontStyle: 'italic', fontSize: '115%' }}>US Army National Guard</span><br />
              <br />
              <ul>
                <li>
                  Provided training on chemical-defense readiness as Sergeant E-5, NCOIC. Experienced in tactical movement,
                strategic firearms use and security operations. Overseas deployments as follows:<br /><br />
                </li>
                <ul>
                  <li>
                    <strong>Multinational Force and Observers –   Egypt;   2006</strong><br /><br />
                    <ul>
                      <li>Ensured implementation of Egypt and Israel Peace Treaty’s security provisions</li><br />
                      <li>Patrolled the Egyptian-Israel’s northern border, providing surveillance across MFO observation posts. </li><br />
                    </ul>
                  </li>

                  <li>
                    <strong>NATO KFOR: Camp Bondsteel –         Kosovo;   2009</strong><br /><br />
                    <ul>
                      <li>Patrolled Serbian-Kosovo border in NATO-led peacekeeping operation responsible for establishing Kosovo’s secure environment</li><br />
                    </ul>
                  </li>
                </ul>
              </ul>
              <hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.5)', marginTop: '5%' }} />
            </dd>
          </dl>
          <dl>


            <dt>EDUCATION</dt>
            <dd>
              <h2><strong>Undergraduate Certificate in Web Development</strong><span>2017</span></h2>
              <span style={{ fontStyle: 'italic', fontSize: '115%' }}>Antioch University; Los Angeles, CA</span><br />
              <span><a href="https://alfredorafael.com/wp-content/uploads/2020/04/Antioch.png" target="_blank" rel="noreferrer noopener" className="creds">Credentials</a></span>



              <hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.5)', marginTop: '5%' }} />
              <h2><strong>Web Development Immersive</strong><span>2019</span></h2>
              <span style={{ fontStyle: 'italic', fontSize: '115%' }}>General Assembly; Boston, MA</span><br />
              <span><a href="https://alfredorafael.com/wp-content/uploads/2020/04/WDI.png" target="_blank" rel="noreferrer noopener" className="creds">Credentials</a></span>
              <hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.5)', marginTop: '5%' }} />

              <h2><strong>Front-End Web Development</strong><span>2018</span></h2>
              <span style={{ fontStyle: 'italic', fontSize: '115%' }}>General Assembly; Boston, MA</span><br />
              <span><a href="https://alfredorafael.com/wp-content/uploads/2020/04/Screen-Shot-2020-04-30-at-3.26.05-PM.png" target="_blank" rel="noreferrer noopener" className="creds">Credentials</a></span>

              <hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.5)', marginTop: '5%' }} />

              <h2><strong>Masters in Education and Globalization</strong><span>2013</span></h2>
              <span style={{ fontStyle: 'italic', fontSize: '115%' }}>Oulu University; Finland, Oulu</span><br />
              <span><a href="https://alfredorafael.com/wp-content/uploads/2020/05/Oulu-Transcript-Screenshot.png" target="_blank" rel="noreferrer noopener" className="creds">Credentials</a></span>

              <hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.5)', marginTop: '5%' }} />

              <h2><strong>US Army Chemical School</strong><span>2005</span></h2>
              <span style={{ fontStyle: 'italic', fontSize: '115%' }}>Fort Leonard Wood; Big Piney, MO</span><br />
              <span><a href="https://alfredorafael.com/wp-content/uploads/2020/05/DiplomaArmy-scaled.jpeg" target="_blank" rel="noreferrer noopener" className="creds">Credentials</a></span>
              <hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.5)', marginTop: '5%' }} />

              <h2><strong>Bachellors in Health Education</strong><span>2009</span></h2>
              <span style={{ fontStyle: 'italic', fontSize: '115%' }}>Inter-American University; San Germán, PR</span><br />
              <span><a href="https://alfredorafael.com/wp-content/uploads/2020/05/Diploma-Inter-scaled.jpeg" target="_blank" rel="noreferrer noopener" className="creds">Credentials</a></span>
              <hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.5)', marginTop: '5%' }} />
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

{/*Return to the original blog article: "http://thenewcode.com/553/Build-A-Responsive-Web-Résumé"> */ }
