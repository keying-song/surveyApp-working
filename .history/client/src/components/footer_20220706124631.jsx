import React from 'react';
import { Navbar, Container, Nav,NavDropdown } from 'react-bootstrap';
import './Foot.css';
function Foot() {
    return (
        <Navbar id="footer" fixed="bottom" bg="light" variant="dark" expand="lg">
        <Container className="justify-content-center">
             Copyright 2022 by group 5. All Rights Reserved.
        </Container>
      </Navbar>   
    
    )
};
    export default Foot;
