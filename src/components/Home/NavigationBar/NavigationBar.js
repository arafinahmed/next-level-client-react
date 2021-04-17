import React, { useContext, useEffect, useState } from 'react';
import { Nav, Navbar } from "react-bootstrap";
import { useHistory } from 'react-router';
import { ContextApi } from '../../../App';

import './NavigationBar.css';

const NavigationBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(ContextApi);
  const [active, setActive]  = useState(false);
  useEffect(() => {
    if(loggedInUser.email){
      setActive(true);
    }
    else{
      setActive(false);
    }
  }, [loggedInUser])
  console.log("Navbar active", active);
  let history = useHistory();
  const linkNavigate = (linkPath) => {
    history.push(linkPath);
  }
  // #e2e6ea
  return (
    <Navbar className="navigation-bg" collapseOnSelect expand="lg"  variant="light">
      <div className="container">
        <Navbar.Brand>
          NEXT Level
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => linkNavigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => linkNavigate('/courses')}>Courses</Nav.Link>
            <Nav.Link onClick={() => linkNavigate('/dashboard')}>Dashboard</Nav.Link>
          </Nav>
          <Nav>
            {
              active ? <> <Nav.Link onClick={() => setLoggedInUser({})}>Logout</Nav.Link> </> :
              <>
              <Nav.Link onClick={() => linkNavigate('/account/login')}>Login</Nav.Link>
            <Nav.Link eventKey={2} onClick={() => linkNavigate('/account/join')}>
              Join Now
          </Nav.Link>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavigationBar;