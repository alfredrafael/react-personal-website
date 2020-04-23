import React from 'react';
import './CssAbout.css';
import StyledAbout from './StyledAbout';




const About = () => {
return(
    <React.Fragment>


<div className="about-info-area">
<h2><strong>About<span> Alfredo Rafael</span></strong></h2>
        <img className="curve" src="https://alfredorafael.com/wp-content/uploads/2019/03/circlePicture.png" 
        alt="A photograph of Alfredo Rafael" />
        <p>Hi! I’m a US Army veteran, former langauge teacher and a <span>full stack developer</span>.
        I create <span>React.js</span>, jQuery, <span>Node.js</span> and <span>WordPress</span> applications for your business or organization. 
        My experience designing responsive and engaging user interfaces (<span>from wireframe to deployment</span>) and teamwork 
        mindset are my greatest assets. I look forward to joining a collaborative environment with other fellow developers. 
        Welcome to my website!
        </p>
</div>


    </React.Fragment>
)}

export default About