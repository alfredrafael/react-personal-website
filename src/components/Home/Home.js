import React from 'react';
import Fade from 'react-reveal/Fade';
import {Container} from 'reactstrap';
import HeroSlider from '../HeroSlider';
import WebDevIcons from '../WebDevIcons';
import About from '../About';
import HowCanIHelp from '../HowCanIHelp';
import './CssHome.css';

const Home = () => {


  return(
    <React.Fragment>
    <HeroSlider />
    <WebDevIcons/>

    <Container>
        <About />
    </Container>
    
    
      
    <HowCanIHelp/>

</React.Fragment>
  )
};


export default Home;