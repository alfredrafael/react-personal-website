import React from 'react';
import './CssIntroText.css'; 
import Typewriter from 'typewriter-effect';
 

const IntroText = () => {
return(
    <React.Fragment>

     <div className="carousel-overlay-text">
		  <div className="bg-transparent container">
      <h1 className="display-4">
      {/*  Full-stack Developer  */}

      <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString('Full-Stack Developer')
          .callFunction(() => {
          //  console.log('String typed out!');
          })
          .pauseFor(700)
          .callFunction(() => {
       //     console.log('All strings were deleted');
          })
          .start();
      }}
    />

    </h1>


	    </div>
    </div>

</React.Fragment>
)}

export default IntroText