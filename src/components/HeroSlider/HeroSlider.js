import React, { useState } from 'react';
import {
  Row
} from 'reactstrap';
import './CssHeroSlider.css';
import IntroText from '../IntroText';
import WebDevIcons from '../WebDevIcons';



const HeroSlider = () => {
  return (
    <React.Fragment>
      <div className="mobile-hero-picture" style={{ height: '100%' }}>
        <img src="https://alfredorafael.com/wp-content/uploads/2020/05/background.png" style={{ background: 'cover', maxWidth: '100%' }} alt="React.js logo" />
        <IntroText />
      </div>
      <div className='desktop-hero-video' style={{ height: '100%', marginBottom: '-1%' }}>
        <div style={{ background: 'black', }}>
          <video
            autoPlay
            muted
            loop
            style={{
              width: "100%",
              left: 0,
              top: 0,
              opacity: '.7'
            }}
          >
            <source src="https://alfredorafael.com/wp-content/uploads/2020/05/personal-website-clip.mp4" type="video/mp4" />
          </video>
          <IntroText />
        </div>
      </div>
    </React.Fragment>
  )
}

export default HeroSlider