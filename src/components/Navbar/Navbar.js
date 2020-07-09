import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,

} from 'reactstrap';
import { Link } from 'react-router-dom';
import { NavBarLogo } from './StyledNavbar';
import './CssNavbar.css';
import $ from 'jquery';


$(".navbar-fading-effect").css("background", "rgba(4, 1, 130, .8)");

// window.history.pushState({}, '', '/') //AMAZING

const Example = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [isSpanish, setSpanish] = useState(false);


  useEffect(() => {

    const currentUrl = document.referrer;


    $(".navbar-fading-effect").css("border-bottom", "1px solid rgba(4, 1, 130, .10)");

    window.onscroll = () => {
      var scrollStatus = $(window).scrollTop();
      if (scrollStatus > 115) {
        $(".navbar-fading-effect").css("background", "rgba(4, 1, 130, .8)"); // changes to...
        $(".navbar-fading-effect").css("transition", "1s");
      } else {
        $(".navbar-fading-effect").css("background", "rgba(4, 1, 130, .15)"); // scrolls back not back to default-color, but this...
      }
    }
  });



  if (Navbar)

    return (
      <React.Fragment>
        <Navbar dark expand="md" className="navbar-fading-effect navbar-border-shadow navbar-css" sticky={'top'}>
          <Container>
            <NavbarBrand href="/">
              <img className="navbar-logo" alt="Alfredo Rafael Logo" src={'https://alfredorafael.com/wp-content/uploads/2019/02/newWhite.png'} style={{ maxWidth: '34%' }} />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar style={{float: 'left'}}>



                <NavItem className="nav-link hovered-link" id="home-link">
                 <a href='/'>
                    Home
                 </a>
                </NavItem>             



                <NavItem className="nav-link hovered-link">
                  <a href='/resume'>
                    Resume
                  </a>
                </NavItem>


                <NavItem className="nav-link hovered-link spanishLogo flag" id="spanishLogo ">
                  <a href='/espanol'>
                  <img src={'https://alfredorafael.com/wp-content/uploads/2020/07/EspanolLogo.png'} 
                  style={
                    {
                      maxWidth: '2.5%', 
                      float: 'right',
                      position: 'absolute',
                      borderBottomRightRadius: '2px',
                      borderBottomLeftRadius: '2px',
                    }
                  }/>  
                  </a>
                  </NavItem>

{/*  
                  <NavItem className="nav-link hovered-link englishLogo" id="englishLogo">
                  <a href='/'>
                  <img src={'https://alfredorafael.com/wp-content/uploads/2020/07/english.png'} 
                  style={
                    {
                      maxWidth: '2.5%', 
                      float: 'right',
                      position: 'absolute',
                      borderBottomRightRadius: '2px',
                      borderBottomLeftRadius: '2px',
                      borderTopLeftRadius: '4px',
                      borderTopRightRadius: '4px'
                    }
                  }/>  
                  </a>
                </NavItem>
*/}



                
                  

                 
  

               

              </Nav>
              {/* <NavbarText>Simple Text</NavbarText> */}
            </Collapse>
          </Container>

        </Navbar>
      </React.Fragment>
    );
}


export default Example;




    // document.querySelector('.flag').addEventListener('click', function () {
    //   if (this.classList.contains('spanishLogo')) {
    //    this.style.display = 'none';
    //    spanishLogo.style.display = 'block';

    //   } else {
    //     this.classList.contains('englishLogo')
    //     englishLogo.style.display = 'block';
    //   }
    // });

    // const spanishLogo = document.querySelector('.spanishLogo');
    // const englishLogo = document.querySelector('.englishLogo');


      // if(currentUrl === 'http://localhost:3000/espanol'){
      // setSpanish(true);
      // } else {
      // setSpanish(false);
      // }