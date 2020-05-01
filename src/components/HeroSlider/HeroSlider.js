import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Row
} from 'reactstrap';
import './CssHeroSlider.css';
import IntroText from '../IntroText';
import $ from 'jquery';




const HeroSlider = () => {
  return (
    <React.Fragment>
      <Row className='' style={{ height: '100%', marginBottom: '-1%' }}>
        <div style={{ background: 'black', }}>
          <video
            autoPlay
            muted
            loop
            style={{
              width: "100%",
              left: 0,
              top: 0,
              opacity: '.8'
            }}
          >
            <source src="https://alfredorafael.com/wp-content/uploads/2020/05/personal-website-clip.mp4" type="video/mp4" />
          </video>
          <IntroText />
        </div>
      </Row>
    </React.Fragment>
  )
}

export default HeroSlider