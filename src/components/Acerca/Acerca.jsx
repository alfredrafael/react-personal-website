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
                            Hola! Soy un <span>ingeniero full-stack</span>, educador y veterano con .
                            I create <span>React.js</span>, jQuery, <span>Node.js</span> and <span>WordPress</span> applications for your business or organization.
                            My experience coding responsive and engaging user interfaces (<span>from wireframe to deployment</span>) and teamwork
                            attitude are my greatest assets. I look forward to joining a collaborative environment with other fellow developers.
                            Welcome to my website!
                       </p>
                    </Fade>

                </Container>
            </div>

        </React.Fragment>
    );
}

export default Acerca