import React, { useState, useEffect} from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { NavBarLogo } from './StyledNavbar';
import './CssNavbar.css';


const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  useEffect(() => {  

    $(".navbar-fading-effect").css("border-bottom", "1px solid rgba(4, 1, 130, .10)"); // changes to...

    window.onscroll = () => {
      var scrollStatus = $(window).scrollTop();
      if (scrollStatus > 115) {
        $(".navbar-fading-effect").css("background" , "rgba(4, 1, 130, .8)"); // changes to...
        $(".navbar-fading-effect").css("transition" , "1s");
      } else {
        $(".navbar-fading-effect").css("background", "rgba(4, 1, 130, .15)"); // scrolls back not back to default-color, but this...
        }
      }
   });


  if(Navbar)

  return (
    <div className="navbar-css sticky" >
      <Navbar light expand="md" className="navbar-fading-effect">
      <Container>
        <NavbarBrand href="/">
          <NavBarLogo class="navbar-logo" src={'https://alfredorafael.com/wp-content/uploads/2019/02/newWhite.png'}/>
          </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          
           <NavItem className="nav-link">
           <a href='/'>
              Home
            </a>
           </NavItem> 

           <NavItem className="nav-link">
           <a href='/exploratory'>
              Resume
            </a>
           </NavItem> 

           <NavItem className="nav-link">
           <a href='/exploratory'>
              Contact
            </a>
           </NavItem> 


          {/* <Link to="/contact">
           <NavItem className="nav-link" >
              Contact
            </NavItem> 
          </Link> */}
          
{/* 
           <UncontrolledDropdown nav inNavbar> 
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
              <Link to="/countries">
                <DropdownItem>
                  Fetching
                </DropdownItem>
              </Link>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
*/}
          </Nav>
         {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
        </Container>

      </Navbar>
    </div>
  );
}

  
export default Example;