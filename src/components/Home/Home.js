import React from 'react';
import Fade from 'react-reveal/Fade';
import HeroSlider from '../HeroSlider';
import IntroText from '../IntroText';
import {Container} from 'reactstrap';
import './CssHome.css';

const Home = () => {


  return(
    <React.Fragment>
    <HeroSlider />
    <Container>

    <Fade>
        
    <div style={{height: '100vh'}}>
    
    <h2> Home Content goes here </h2>
    </div>
    
    </Fade>
    </Container>

</React.Fragment>
  )
};


export default Home;