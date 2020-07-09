import React from 'react';
import HeroSliderEspanol from '../HeroSliderEspanol';
import WebDevIcons from '../WebDevIcons';
import Acerca from '../Acerca';
import HelpEspanol from '../HelpEspanol';
import Projectos from '../Projectos';
import Contacto from '../Contacto';
import Navegacion from '../Navegacion';
import './CssHome.css';


const Hogar = () => {


  return (
    <React.Fragment>
    <Navegacion/>
      <HeroSliderEspanol />
      <WebDevIcons />
      <Acerca />
      <HelpEspanol />
      <Projectos />
      <Contacto />

    </React.Fragment>
  )
};


export default Hogar;