import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Fade } from "react-reveal";
import "./CssProjects.css";

const Projectos = () => {
  return (
    <React.Fragment>
      <Container id="projects-component">
        <h2> Projectos Creativos </h2>
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
                        Ir a website{" "}
                      </div>
                    </a>
                    <a
                      href="https://github.com/alfredrafael/react-movie-app"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div className="overlay-content view-code">
                        <i className="devicon-github-plain"></i>&nbsp; Mostar en Github
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
                  Programé esta applicación con datos a traves de{" "} <span>The Movie Database API</span> (TMDB)
                  y <span>React.js</span>. El usuario puede ver las películas más populares en TMDB, 
                  así como buscar películas en específico dentro del banco de datos de TMDB.
                  El usuario puede seleccionar películas y leer información adicional sobre ellas: artístas, presupuesto,
                  y descripción del filme. Construí esta aplicación por diversión con create-react-app, <span>Styled-Components</span>, @reach/router,
                  e íconos de{" "} <span>font-awesome</span>.
                  <br /></p>
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
                        Ir a Website{" "}
                      </div>
                    </a>
                    <a
                      href="https://github.com/alfredrafael/boda"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div className="overlay-content view-code">
                        <i className="devicon-github-plain"></i>&nbsp; Ver en Github
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
                  Esta simple aplicación fue un presente como celebración de 
                  los 30 años de matrimonio de esta hermosa pareja. 
                  Lo que comenzó como "solo fotos de nuestra boda" terminó incluyendo
                  fotos de varios de sus viajes por el mundo. Las tecnologias utilizadas
                  en esta página son React.js, <span>ReactStrap</span>, <span>Material UI</span>, y <span>jQuery</span>.</p>
              
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
                        Ir a Website{" "}
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

                <p><span>Wordpress</span> es una poderosa herramienta para páginas 
                a nivel empresarial. Le permite a los clientes editar el contenido 
                sin necesitad de escribir "code". Customizé esta interface de usuario con <span>vanilla CSS</span>, 
                añadí <span>MapPress</span> a su "información de contacto" y usé  <span>Sketch</span> para
                crear su logo en versión PNG. Aunque esta aplicación es más un projecto de trabajo que un "projecto
                creativo", me sentí feliz de verlo todavía en línea!</p>

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
                        Ir a website{" "}
                      </div>
                    </a>
                    <a
                      href="https://github.com/alfredrafael/vets-in-tech"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div className="overlay-content view-code">
                        <i className="devicon-github-plain"></i>&nbsp; Mostrar en Github
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
                  Esta aplicación muestra a los estudiantes y facultad de Vets-in-Tech: First Class,
                  (Capítulo de New England) proveyendo al usuario con una galería de todos los estudiantes en el curso, foto, 
                   y descripción de cada uno, así como fotos durante el proceso de aprendizaje.
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

export default Projectos;
