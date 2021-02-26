import React from "react";
import { Nav } from "react-bootstrap";
import "./style.css";

function Jumbotron() {
  return (
    <main className='jumbotron'>
      <Nav defaultActiveKey='/home' className='justify-content-center'>
        <div>
          <Nav.Link href='/'>James O'Sullivan</Nav.Link>

          <Nav.Link href='/about'>About Me</Nav.Link>

          <Nav.Link href='projects'>Projects</Nav.Link>

          <Nav.Link href='resume'>Resume</Nav.Link>
        </div>
      </Nav>
      <Nav className='justify-content-center'>
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
    </main>
  );
}

export default Jumbotron;
