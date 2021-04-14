import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import { useHistory } from 'react-router';

const NavigationBar = () => {
  let history = useHistory();
  const linkNavigate = (linkPath) => {
    history.push(linkPath);
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <div className="container">
        <Navbar.Brand>
          NEXT Level
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => linkNavigate('/home')}>Home</Nav.Link>
            <Nav.Link onClick={() => linkNavigate('/courses')}>Courses</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={() => linkNavigate('/login')}>Login</Nav.Link>
            <Nav.Link eventKey={2} onClick={() => linkNavigate('/login')}>
              Join Now
          </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavigationBar;