import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src='./src/image/almnd.png'
              alt="Your Logo"
              style={{ width: '150px' }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item href="#home">Home</NavDropdown.Item>
                <NavDropdown.Item href="#fullstack">Full-Stack</NavDropdown.Item>
                <NavDropdown.Item href="#frontend">Front-End</NavDropdown.Item>
                <NavDropdown.Item href="#backend">Back-End</NavDropdown.Item>
                <NavDropdown.Item href="#mobile">Mobile Application</NavDropdown.Item>
                <NavDropdown.Item href="#graphicdesign">Graphic Design</NavDropdown.Item>
                <NavDropdown.Item href="#manualtesting">Manual Testing</NavDropdown.Item>
                <NavDropdown.Item href="#contact">Contact Us</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#workshop">Free Workshop</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#enroll">Enroll Now</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
