import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import './CssHeroSlider.css';
import IntroText from '../IntroText';
// import $ from 'jquery';

// $(document).ready(function () {
//   $("#home-link").click();
// });

const items = [
  {
    video: 'https://alfredorafael.com/wp-content/uploads/2020/05/personal-website-clip.mp4',
    id: 3,
    src: 'not applies (picture would be here)'
  },
  {
    src: 'https://images.opencollective.com/react-firebase-starter/c636859/background.png',//'https://placekitten.com/1375/700', //'https://via.placeholder.com/1400x700.png/0000FF/808080',
    // altText: 'Slide 1',
    // caption: 'Slide 1'
    id: 2
  },
  // {
  //   src: 'https://alfredorafael.com/wp-content/uploads/2019/02/atCove.png', //'https://placekitten.com/1350/700', //'https://via.placeholder.com/1400x700.png',
  //   // altText: 'Slide 1',
  //   // caption: 'Slide 1'
  //   id: 1,
  // },
];

const HeroSlider = (props) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
        video={item.video}
        controls={false}
        autoPlay={true}
      >

        {
          item.video

            ? <div className='slider-video' style={{ boxShadow: '0 1em 1em -1em rgba(0, 0, 0, .25)' }}
            >
              <video autoPlay={true} loop style={{ maxWidth: '100%', backgroundColor: 'black' }} className="video-container video-container-overlay">
                <source src={item.video} type="video/mp4" />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
              </video>
            </div>

            : <div className="parallax slider-picture" style={{ backgroundColor: 'black' }}>
              <img src={item.src} alt={item.altText} style={{ width: '100%', backgroundSize: 'auto', backgroundColor: 'black' }} />
              <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </div>

        }

      </CarouselItem>

    );
  });

  return (
    <React.Fragment>

      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        className="carousel-fade"
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        {/*
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    */}
      </Carousel>

      <div style={{ overflow: 'hidden' }}>
        <IntroText />
      </div>

    </React.Fragment>
  );
}

export default HeroSlider;