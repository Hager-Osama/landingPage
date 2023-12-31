
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import "./style.css"
import logo from '../../images/Logo.png'
import React, { useState } from "react";
import Countdown from './countdownTimer';

const HeaderComponent = () => {

  const [emailAddress, setEmailAddress] = useState("contact@sciencore.com");

const onClick = () => {
  // Open Gmail with properly encoded email address
  window.open(`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`);
};

  return (
   <div className='allHeader'>
    <Navbar expand="md">
      <Container>
       <Navbar.Brand href="#home">
            <img
              src={logo}
              width="120"
              height="120"
              className="d-inline-block align-top"
              alt="Sciencore logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
           <h5>Contact Us 
           <a  className="icons" href="#gmail" onClick={onClick}><i class="fa-regular fa-envelope"></i></a>
           </h5>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Countdown duration={30*24*60*60*1000}/>
    </div> 
  )
}

export default HeaderComponent
