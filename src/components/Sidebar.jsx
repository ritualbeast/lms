
import React from 'react';
import logoVeris from '../assets/img/logo-verisReg.png';
import '../styles/sidebar.css';

import { Container, Row, Col, Button, Navbar, Nav
 } from 'react-bootstrap';

const Sidebar = () => {
  return (
    
    <Col className="sidebar">
        <img src={logoVeris} alt="Logo Veris"  />
        
        <Navbar bg="dark" variant="dark">
        <Nav className="ml-auto navCentrar">
            <Button variant="primary" style={{ backgroundColor: 'lightblue', marginLeft: 'auto', marginRight: 'auto' }}>
            Botón Centrado
            </Button>
        </Nav>
        </Navbar>
    </Col>
    
  );
};

export default Sidebar;
