import React from 'react';
import Fade from 'react-reveal/Fade';
import HeroSlider from '../HeroSlider';
import WebDevIcons from '../WebDevIcons';
import About from '../About';
import {Container} from 'reactstrap';
import './CssHome.css';

const Home = () => {


  return(
    <React.Fragment>
    <HeroSlider />
    <WebDevIcons/>

    <Container>
     <Fade>
        

        <About />

    
     </Fade>
    </Container>

</React.Fragment>
  )
};


export default Home;