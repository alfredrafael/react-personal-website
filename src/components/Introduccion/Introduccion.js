import React from 'react';
import './CssIntroText.css'; 
import Typewriter from 'typewriter-effect';
 

const Introduccion = () => {
return(
    <React.Fragment>

     <div className="carousel-overlay-text espanol" id="enEspanol">
      <div className="bg-transparent container">
      <h1 className="display-4">
      {/*  Full-stack Developer  */} 


      <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString('Programador Full-Stack')
          .callFunction(() => {
          //  console.log('String typed out!');
          })
          .pauseFor(700)
          .callFunction(() => {
          //  console.log('All strings were deleted');
          })
          .start();
      }}
    />

    </h1>


	    </div>
    </div>

</React.Fragment>
)}

export default Introduccion