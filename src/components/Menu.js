import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";

function Menu() {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Navbar.Brand href='/'>James O'Sullivan</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='/about'>About Me</Nav.Link>

          <Nav.Link href='projects'>Projects</Nav.Link>

          <Nav.Link href='projects'>Resume</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href='https://github.com/jamesosull16'>
            <i className='fab fa-github' sz='3x'></i>
          </Nav.Link>
          <Nav.Link
            eventKey={2}
            href='https://www.linkedin.com/in/james-o-sullivan-5081b941/'
          >
            <i className='fab fa-linkedin'></i>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
