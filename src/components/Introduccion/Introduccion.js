import React from 'react';
import './CssIntroText.css'; 
import Typewriter from 'typewriter-effect';
 

const Introduccion = () => {
return(
    <React.Fragment>

     <div className="carousel-overlay-text espanol">
      <div className="bg-transparent container" id="enEspanol">
      <h1 className="display-4">
      {/*  Full-stack Developer  */} 


      <Typewriter className="enEspanol"
      onInit={(typewriter) => {
        typewriter.typeString('Programador Front-End')
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