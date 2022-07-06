import React from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Link} from 'react-router-dom';
//import Login from './pages/login'
import './Navb.css';
function Navb() {
 
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/home">
          <img
          src={require("./grouplogo.png")}
          width="30"
              height="30"
              className="d-inline-block align-top"
          alt="group logo"
           />  </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="justify-content-end">
              <Nav.Link href="/home">Home</Nav.Link>
              
              <Nav.Link href="/login">Login</Nav.Link>
             
              <Nav.Link href="/register">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        
        </Container>
      </Navbar>

    )
};
export default Navb;