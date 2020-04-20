import React from 'react';
import Fade from 'react-reveal/Fade';
import HeroSlider from '../HeroSlider';
import {HeroText} from './StyledHome';
import {Container} from 'reactstrap';
import './CssHome.css';

const Home = () => {


  return(
    <React.Fragment>
    <HeroSlider />
    <Container>

    <Fade>

      <h1 className="main-title">
       
       
        React<span style={{fontSize: '70%'}}>.js</span> Developer
      
      
      </h1>

    
    <div style={{height: '100vh'}}>
    
    <h2>  </h2>
    </div>
    
    </Fade>
    </Container>

</React.Fragment>
  )
};


export default Home;