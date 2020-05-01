import React from 'react';
import HeroSlider from '../HeroSlider';
import WebDevIcons from '../WebDevIcons';
import About from '../About';
import HowCanIHelp from '../HowCanIHelp';
import Projects from '../Projects';
import Contact from '../Contact';
import './CssHome.css';
import $ from 'jquery';


const Home = () => {


  // window.onload = function () {
  //   setTimeout(function () {
  //     $(".home-link").css("color", "red");
  //     document.getElementById('home-link').click();
  //     $(".home-link").css("color", "red");
  //   }, 1000);
  // };


  //  $(document).ready(function () {
  //    $(".home-link").trigger('click');
  //  });

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