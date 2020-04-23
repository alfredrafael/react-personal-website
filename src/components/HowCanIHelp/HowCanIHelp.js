import React from 'react';
import './CssHowCanIHelp.css';
import {Row, Col} from 'reactstrap';


const HowCanIHelp = () => {
return(
    <React.Fragment>
    
    <div id="how-can-I-help">
    <div className='centralize-content'>

    <h2><strong>How can I Help You?<span></span></strong></h2>


<Row>

<Col>

    How can I help

</Col>


<Col>

          <h3 className="serviceBoxTitle" style={{fontSize: '200%'}}>Web Development</h3>
<div className="hoverEffect serviceDiv" data-toggle="modal" data-target="">
            <img src="https://alfredorafael.com/wp-content/uploads/2019/03/Group22.png" />
                          <p className="">Click to learn more.</p>
        </div>
</Col>



<Col>

    How can I help

</Col>

</Row>
</div>
</div>

    </React.Fragment>
)}

export default HowCanIHelp