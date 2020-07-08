import React from 'react';
import HeroSliderEspanol from '../HeroSliderEspanol';
import WebDevIcons from '../WebDevIcons';
import About from '../About';
import HowCanIHelp from '../HowCanIHelp';
import Projects from '../Projects';
import Contact from '../Contact';
import Navegacion from '../Navegacion';
import './CssHome.css';


const Casa = () => {


  return (
    <React.Fragment>
    <Navegacion/>
      <HeroSliderEspanol />
      <WebDevIcons />
      <About />
      <HowCanIHelp />
      <Projects />
      <Contact />

    </React.Fragment>
  )
};


export default Casa;