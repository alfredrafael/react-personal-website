import React from 'react';
import HeroSlider from '../HeroSlider';
import WebDevIcons from '../WebDevIcons';
import About from '../About';
import HowCanIHelp from '../HowCanIHelp';
import Projects from '../Projects';
import Contact from '../Contact';
import './CssHome.css';

const Home = () => {

  return (
    <React.Fragment>

      <HeroSlider />
      <WebDevIcons />
      <About />
      <HowCanIHelp />
      <Projects />
      <Contact />

    </React.Fragment>
  )
};


export default Home;