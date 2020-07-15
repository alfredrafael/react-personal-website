import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledTooltip,
} from 'reactstrap';

import { Link } from 'react-router-dom';
import { NavBarLogo } from './StyledNavbar';
import './CssNavbar.css';
import $ from 'jquery';


$(".navbar-fading-effect").css("background", "rgba(4, 1, 130, .8)");

// window.history.pushState({}, '', '/') //AMAZING

const NavResume = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [isSpanish, setSpanish] = useState(false);



  var currentUrl = window.location.href;
  var urlSlug = currentUrl.substr(currentUrl.lastIndexOf('/') + 1);
  
  
  const dynamicUrl = (urlSlug === '/resume-espanol')? '/resume' : '/resume-espanol';


  useEffect(() => {


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
            <NavbarBrand href="/espanol">
              <img className="navbar-logo" alt="Alfredo Rafael Logo" src={'https://alfredorafael.com/wp-content/uploads/2019/02/newWhite.png'} style={{ maxWidth: '34%' }} />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar style={{float: 'left'}}>



                <NavItem className="nav-link hovered-link" id="home-link">
                 <a href='/espanol'>
                    Hogar
                 </a>
                </NavItem>             



                <NavItem className="nav-link hovered-link">
                  <a href={dynamicUrl}>
                    Resumé
                  </a>
                </NavItem>

{/*  
  <NavItem className="nav-link hovered-link spanishLogo flag" id="spanishLogo ">
  <a href='/espanol'>
  <img src={'https://alfredorafael.com/wp-content/uploads/2020/07/espanol.png'} 
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

                <UncontrolledTooltip style={{ backgroundColor: '#040182',}} placement="bottom" target="englishFlagHover" className=''>English</UncontrolledTooltip>
                <NavItem className="nav-link hovered-link englishLogo" id="englishLogo">
                  <a href='/resume'>
                  <img 
                  src={'https://www.alfredorafael.com/wp-content/uploads/2020/07/EnglishLogo.png'} 
                  id='englishFlagHover'
                  style={
                    {
                      maxWidth: '2.5%', 
                      float: 'right',
                      position: 'absolute',
                      borderBottomRightRadius: '1px',
                      borderBottomLeftRadius: '1px',
                      borderTopLeftRadius: '1px',
                      borderTopRightRadius: '1px',
                      paddingBottom: '2%'

                    }
                  }/>  
                  </a>
                </NavItem>




                
                  

                 
  

               

              </Nav>
              {/* <NavbarText>Simple Text</NavbarText> */}
            </Collapse>
          </Container>

        </Navbar>
      </React.Fragment>
    );
}


export default NavResume;




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