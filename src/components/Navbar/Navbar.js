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

$(".navbar-fading-effect").css("background", "rgba(4, 1, 130, .8)"); // changes to...



// window.history.pushState({}, '', '') //AMAZING
// window.history.pushState({}, '', '/') //AMAZING


const Example = (props) => {


  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {

    // if (window.location.href === "http://localhost:3000") {
    //   window.history.pushState("http://localhost:3000/resume", "resume");
    // }

    // window.onload = function () {
    //   setTimeout(function () {
    //     document.getElementById('home-link').click();
    //     $("#home-link").trigger('click');
    //  window.location.replace("/"); //interesting
    //   $("#home-link").css("display", "none");
    //   }, 1000);
    // };


    // window.onload = function () {
    //   setTimeout(function () {
    //     document.getElementById('home-link').click();
    //   }, 1000);
    // };
    // $(document).ready(function () {
    //   $("#home-link").trigger('click');
    // });



    $(".navbar-fading-effect").css("border-bottom", "1px solid rgba(4, 1, 130, .10)"); // changes to...

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
      <div className="navbar-css sticky" >
        <Navbar light expand="md" className="navbar-fading-effect">
          <Container>
            <NavbarBrand href="/">
              <NavBarLogo class="navbar-logo" src={'https://alfredorafael.com/wp-content/uploads/2019/02/newWhite.png'} />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>

                <NavItem className="nav-link" id="home-link">
                  <a href='/'>
                    Home
            </a>
                </NavItem>

                <NavItem className="nav-link">
                  <a href='https://alfredorafael.com/wp-content/uploads/2020/04/Resume_Alfredo_Rafael.pdf' target="_blank" rel="noopener noreferrer">
                    Resume
            </a>
                </NavItem>

              </Nav>
              {/* <NavbarText>Simple Text</NavbarText> */}
            </Collapse>
          </Container>

        </Navbar>
      </div>
    );
}


export default Example;