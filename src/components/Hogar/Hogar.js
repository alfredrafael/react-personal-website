import React from 'react';
import HeroSliderEspanol from '../HeroSliderEspanol';
import WebDevIcons from '../WebDevIcons';
import Acerca from '../Acerca';
import HowCanIHelp from '../HowCanIHelp';
import Projects from '../Projects';
import Contact from '../Contact';
import Navegacion from '../Navegacion';
import './CssHome.css';


const Hogar = () => {


  return (
    <React.Fragment>
    <Navegacion/>
      <HeroSliderEspanol />
      <WebDevIcons />
      <Acerca />
      <HowCanIHelp />
      <Projects />
      <Contact />

    </React.Fragment>
  )
};


export default Hogar;