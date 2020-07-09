import React from 'react';
import './CssAbout.css';
import { Container } from 'reactstrap';
import Fade from 'react-reveal/Fade';





const Acerca = () => {
    return (
        <React.Fragment>


            <div className="about-info-area">
                <Container>
                    <Fade>
                        <h2><strong>Sobre <span>Alfredo Rafael</span></strong></h2>
                    </Fade>
                    <Fade>
                        <img className="curve" src="https://alfredorafael.com/wp-content/uploads/2019/03/circlePicture.png"
                            alt="A photograph of Alfredo Rafael" />
                    </Fade>

                    <Fade>
                        <p>
                            Hola! Soy un <span>programador full-stack</span>, veterano y educador. Desarrollo applicaciones en <span>React.js</span>, 
                            jQuery, <span>Node.js</span> y <span>WordPress</span> para tu negocio u organización. Mi experiencia desarrollando 
                            interfaces de usuario (<span>desde "wireframe" hasta "deployment"</span>), destrezas de comunicación y estilo de trabajo en equipo 
                            son parte integral de mis habilidades. Busco unirme a otros ingenieros en software para conectar de manera profesional. 
                            Bienvenido/a a mi página!
                       </p>
                    </Fade>

                </Container>
            </div>

        </React.Fragment>
    );
}

export default Acerca