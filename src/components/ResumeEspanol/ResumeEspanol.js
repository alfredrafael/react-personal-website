import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavResume from '../NavResume';
import "./CssResume.css";
import $ from "jquery";

const ResumeEspanol = () => {
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
    <NavResume />

      <div id="resume-container">
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

              <div style={{ display: 'flex', marginBottom: '1.5%' }}>

                <div style={{ minWidth: '52%' }}>
                  <div style={{ display: 'flex' }}>
                    <a href="https://alfredorafael.com/wp-content/uploads/2020/07/Alfredo_Espanol_Resume.pdf" target="_blank" rel="noreferrer noopener">
                      <i className="fas fa-file-pdf" style={{ fontSize: "160%", marginLeft: ".20%", marginRight: '3.5%', color: '#464646' }} />{" "}
                    </a>

                  &nbsp; &nbsp;

                  <a href="https://alfredorafael.com/wp-content/uploads/2020/07/Alfredo_Espanol_Resume.pdf" target="_blank" rel="noreferrer noopener">
                      <h2 className="text-in-contact-info" style={{ fontSize: '110%', marginTop: '1%' }}>Resume en PDF</h2>
                    </a>
                  </div>
                </div>


                <div style={{ maxWidth: '52%' }}>
                  <div style={{ display: 'flex' }}>
                    <a href="mailto:alfredrafael@gmail.com?Subject=Regarding%20your%20web-development%20services" rel="noopener noreferrer" target="_blank">
                      <i className="fas fa-envelope" style={{ fontSize: "150%", color: "#464646", marginRight: '3%' }} />{" "}
                    </a>

                  &nbsp; &nbsp;


                  <a href="mailto:alfredrafael@gmail.com?Subject=Regarding%20your%20web-development%20services" rel="noopener noreferrer" target="_blank">
                      <h2 style={{ fontSize: '110%', marginTop: '1%' }} className="text-in-contact-info">alfredrafael@gmail.com</h2>
                    </a>
                  </div>
                </div>
              </div>




              <div style={{ display: 'flex', marginBottom: '1.5%' }}>
                <div style={{ minWidth: '52%' }}>
                  <div style={{ display: 'flex' }}>
                    <a href="tel:+16175801400" rel="noopener noreferrer" target="_blank">
                      <i className="fas fa-phone-square-alt" style={{ fontSize: "160%", marginLeft: ".20%", marginRight: '3.5%', color: '#464646' }} />{" "}
                    </a>

    &nbsp;


    <a href="tel:+16175801400" rel="noopener noreferrer" target="_blank">
                      <h2 className="text-in-contact-info" style={{ fontSize: '110%', marginTop: '1%' }}> &nbsp;(617) 580-1400 &nbsp;</h2>
                    </a>
                  </div>
                </div>


                <div style={{ maxWidth: '52%' }}>
                  <div style={{ display: 'flex' }}>
                    <a href="https://www.linkedin.com/in/alfredo-rafael/" rel="noopener noreferrer" target="_blank">
                      <i className="fab fa-linkedin" style={{ fontSize: "160%", color: "#464646", marginRight: '3%' }} />{" "}
                    </a>

    &nbsp; &nbsp;


            <a href="https://www.linkedin.com/in/alfredo-rafael/" rel="noopener noreferrer" target="_blank">
            <h2 style={{ fontSize: '110%', marginTop: '1%' }} className="text-in-contact-info">linkedin/alfredo-rafael</h2>
                    </a>
                  </div>
                </div>


              </div>







            </section>
            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}


            <br />

            <dl id="skillset">
              <dt>HABILIDADES</dt>
              <dd>
                <h2><strong>Programación</strong></h2><br />


                <div className="2skillColumns" style={{ display: 'flex' }}>

                  <Col className="skillColumn1" style={{ flex: '1', }}>
                    <p><i className="devicon-javascript-plain" style={{ fontSize: '250%', color: 'black' }} /> Javascript</p>
                    <p><i className="devicon-react-plain" style={{ fontSize: '250%', color: 'black' }} /> React;</p>
                    <p><i className="devicon-nodejs-plain" style={{ fontSize: '250%' }} /> Node.js;</p>
                    <p><i className="devicon-postgresql-plain" style={{ fontSize: '250%' }} /> PostgreSQL;</p>
                    <p><i className="devicon-wordpress-plain" style={{ fontSize: '250%' }} /> WordPress;</p>
                  </Col>

                  <Col className="skillColumn2" style={{ flex: '1', }}>
                    <p><i className="devicon-css3-plain" style={{ fontSize: '250%', color: 'black' }} /> CSS3;</p>
                    <p><i className="devicon-jquery-plain" style={{ fontSize: '250%', color: 'black' }} /> jQuery;</p>
                    <p><i className="devicon-github-plain" style={{ fontSize: '250%', color: 'black' }} /> Github;</p>
                    <p><i className="devicon-bootstrap-plain" style={{ fontSize: '250%', color: 'black' }} /> Bootstrap;</p>
                    <p><i className="devicon-git-plain" style={{ fontSize: '250%', color: 'black' }} /> Git;</p>
                  </Col>

                </div>

                <hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.5)' }} />
              </dd>
            </dl>

            <dl>
              <dt>EXPERIENCIA</dt>
              <dd>

                {/* // Experience 1 //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <h2><strong>Programador Front-End</strong><span>Dic. 2019 – Junio 2020</span></h2>
                <span className='company-name' style={{ fontStyle: 'italic', fontSize: '100%' }}>Softworld Consulting & Solutions</span><br />
                <br />
                <ul>
                  <li>
                  Optimicé la aplicación interna de la compañía con jQuery, añadiendo responsividad, mejoras al UI/UX y compatibilidad a lo largo de varias plataformas de navegación (browsers)
                  </li>
                </ul>
                <hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.3)', marginTop: '5%', width: '70%' }} />
                {/* // Experience 2 //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <h2><strong>Desarrollador de Web</strong><span>Ago-Diciembre – 2019</span></h2>
                <span className='company-name' style={{ fontStyle: 'italic', fontSize: '100%' }}>Beacon Hill Staffing Group</span><br />
                <br />
                <ul>
                  <li>
                  Construcción de componentes funcionales con React.js moderno (hooks + redux) en proyecto SaaS con data proveniente de APIs privados de la compañía
                </li><br />
                  <li>
                  Desarrollé eficientes interfaces de usuario (UI) con React-Bootstrap y Styled-Components, adaptativas a lo largo de varias plataformas de navegación (browsers)
                  
                  </li>
                  <br/>
                  <li>
                     Experiencia con OpenText CMS, Microsoft TFS and GIT para control de varias versiones
                  </li>
                </ul>
                <hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.3)', marginTop: '5%', width: '70%' }} />
                {/* // Experience 3 //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <h2><strong>Programador Independiente</strong><span>Dic. 2017 – Agosto 2019</span></h2>
                <span className='company-name' style={{ fontStyle: 'italic', fontSize: '100%' }}>AR Web-Communications</span><br />
                <br />
                <ul>
                  <li>
                  Desarrollé wireframes y páginas-web en WordPress manteniendo tanto las preferencias estéticas de mis clientes como las necesidades técnicas de cada proyecto                  </li>
                </ul>
                <hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.3)', marginTop: '5%', width: '70%' }} />
                {/* // Experience 3 //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <h2><strong>Maestro de Español</strong><span>Dic 2013 – Junio 2017</span></h2>
                <span style={{ fontStyle: 'italic', fontSize: '100%' }}>Boston Public Schools</span><br />
                <br />
                <ul>
                  <li>
                  Enseñé español como segundo idioma a estudiantes tanto en escuela elemental como superior, adaptando cada material a las necesidades específicas de cada grupo y estudiante<br /><br />
                  </li>
                  <li>Desarrollé e impartí un currículo enfocado en humanidades para estudiantes bilingües en varias escuelas a lo largo del distrito de Boston</li>
                </ul>
                <hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.5)', marginTop: '5%' }} />
                {/* // END Experiences ///////////////////////////////////////////////////////////////////////////////////////////////// */}
                <h2><strong>Sargento en CBRN</strong><span>1-296 C/Co, 2004 – 2011</span></h2>
                <span style={{ fontStyle: 'italic', fontSize: '100%' }}>US Army National Guard</span><br />
                <br />
                <ul>
                  <li>
                    Proveí entrenamiento para defensa en ataques bio-químicos como Sargento E-5 a cargo del CBRN. 
                    Mi posición incluye experiencia en movimiento táctico, manejo de armas de fuego y operaciones de seguridad. 
                    A continuación, información sobre mis operaciones de ultramar:<br /><br />
                  </li>
                  <ul>
                    <li>
                      <strong>Multinational Force & Observers –   Egipto;   2006</strong><br /><br />
                      <div className="deployment-details">
                        <ul>
                          <li>Presencia para asegurar el Tratado de Paz entre Egipto e Israel</li><br />
                          <li>Patrullaje de la frontera Egipcio-Israelí, proveyendo observacion a lo largo 
                          de varios puestos de observacion de la MFO</li><br />
                        </ul>
                      </div>
                    </li>

                    <li>
                      <strong>NATO KFOR: Camp Bondsteel –         Kosovo;   2009</strong><br /><br />
                      <div className="deployment-details">
                        <ul>
                          <li>Patrullaje de la frontera Serbio-Kosovar en misión dirigida por la OTAN
                              para mantener paz en Kosovo y asegurar la seguridad de sus ciudadanos</li><br />
                        </ul>
                      </div>
                    </li>
                  </ul>
                </ul>
                <hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.5)', marginTop: '5%' }} />
              </dd>
            </dl>
            <dl>


              <dt id="education">EDUCACIÓN</dt>
              <dd>
                <h2><strong>Certificado en Programación de Redes</strong><span>2017</span></h2>
                <span style={{ fontStyle: 'italic', fontSize: '100%' }}>Antioch University; Los Angeles, CA</span><br />
                <span><a href="https://alfredorafael.com/wp-content/uploads/2020/04/Antioch.png" target="_blank" rel="noreferrer noopener" className="creds">Credenciales</a></span>



                <hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.5)', marginTop: '5%' }} />
                <h2><strong>Programa Immersivo en Programación</strong><span>2019</span></h2>
                <span style={{ fontStyle: 'italic', fontSize: '100%' }}>General Assembly; Boston, MA</span><br />
                <span><a href="https://alfredorafael.com/wp-content/uploads/2020/04/WDI.png" target="_blank" rel="noreferrer noopener" className="creds">Credenciales</a></span>
                <hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.5)', marginTop: '5%' }} />

                <h2><strong>Programación en Front-End</strong><span>2018</span></h2>
                <span style={{ fontStyle: 'italic', fontSize: '100%' }}>General Assembly; Boston, MA</span><br />
                <span><a href="https://alfredorafael.com/wp-content/uploads/2020/04/Screen-Shot-2020-04-30-at-3.26.05-PM.png" target="_blank" rel="noreferrer noopener" className="creds">Credenciales</a></span>

                <hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.5)', marginTop: '5%' }} />

                <h2><strong>Maestría en Educación y Globalización</strong><span>2013</span></h2>
                <span style={{ fontStyle: 'italic', fontSize: '100%' }}>Universidad de Oulu; Finlandia, Oulu</span><br />
                <span><a href="https://alfredorafael.com/wp-content/uploads/2020/05/Oulu-Transcript-Screenshot.png" target="_blank" rel="noreferrer noopener" className="creds">Credenciales</a></span>

                <hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.5)', marginTop: '5%' }} />

                <h2><strong>Bachillerato en Educación & Salud Escolar</strong><span>2009</span></h2>
                <span style={{ fontStyle: 'italic', fontSize: '100%' }}>Universidad Interamericana; San Germán, PR</span><br />
                <span><a href="https://alfredorafael.com/wp-content/uploads/2020/05/Diploma-Inter-scaled.jpeg" target="_blank" rel="noreferrer noopener" className="creds">Credenciales</a></span>
                
                <hr style={{ height: '1px', border: 'none', backgroundColor: 'rgba(105, 186, 213, 0.5)', marginTop: '5%' }} />

                <h2><strong>US Army Chemical School</strong><span>2005</span></h2>
                <span style={{ fontStyle: 'italic', fontSize: '100%' }}>Fort Leonard Wood; Big Piney, MO</span><br />
                <span><a href="https://alfredorafael.com/wp-content/uploads/2020/05/DiplomaArmy-scaled.jpeg" target="_blank" rel="noreferrer noopener" className="creds">Credenciales</a></span>
                
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
      </div>
    </React.Fragment>
  );
};

export default ResumeEspanol;

{/*Return to the original blog article: "http://thenewcode.com/553/Build-A-Responsive-Web-Résumé"> */ }
