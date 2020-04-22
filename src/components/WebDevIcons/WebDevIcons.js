import React, {useState} from 'react';
import { UncontrolledTooltip } from 'reactstrap';
import './CssWebDevIcons.css';


const WebDevIcons = (props) => {

return(
    <React.Fragment> 

<div className="icons-row-container">
<div className="icons-row">


   <div className= "js-div" id="js">
   <div>
   <i className="devicon-javascript-plain dev-icons"></i>

      <UncontrolledTooltip placement="top" target="js" className='test'>
         Hello
      </UncontrolledTooltip>
   
      </div>
   </div>




   <div className="react-div" id="react">
      <div>
         <i className="devicon-react-original-wordmark dev-icons"></i>

      <UncontrolledTooltip placement="top" target="react" className='js-tooltip'>
         world!
      </UncontrolledTooltip>
   
      </div>
   </div>
   <div className= "css-div">
      <div>
         <i className="devicon-css3-plain dev-icons"></i>
      </div>
   </div>
   <div className="jquery-div">
      <div >
         <i className="devicon-jquery-plain-wordmark dev-icons"></i>
      </div>
   </div>
   <div className="wordpress-div">
      <div>
         <i className="devicon-wordpress-plain dev-icons"></i>
      </div>
   </div>
   
   <div className="git-div">
      <div >
         <i className="devicon-git-plain dev-icons"></i>
      </div>
   </div>
   <div className="node-div">
      <div >
         <i className="devicon-nodejs-plain dev-icons"></i>
      </div>
   </div>
   <div className="express-div">
      <div>
         <i className="devicon-express-original dev-icons"></i>
      </div>
   </div>
   <div className="html-div">
      <div>
         <i className="devicon-html5-plain dev-icons"></i>
      </div>
   </div>
   <div className="sql-div">
      <div>
         <i className="devicon-postgresql-plain dev-icons"></i>
      </div>
   </div>
   <div className="bootstrap-div">
      <div >
         <i className="devicon-bootstrap-plain dev-icons"></i>
      </div>
   </div>
   <div className="github-div">
      <div>
         <i className="devicon-github-plain dev-icons"></i>
      </div>
   </div>
   </div>
</div>
</React.Fragment>
)}

export default WebDevIcons