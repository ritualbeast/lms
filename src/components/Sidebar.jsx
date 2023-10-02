
import React from 'react';
import logoVeris from '../assets/img/logo-verisReg.png';
import '../styles/sidebar.css';
import { Container, Row, Col, Button, Navbar, Nav
 } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import svgManager from '../assets/img/svg';

const homeSVG = svgManager.getSVG('home'); 
const userSVG = svgManager.getSVG('users');
const Sidebar = () => {
  return (
    
    <Col className="sidebar">
        <img src={logoVeris} alt="Logo Veris"  />
        
        <div className="sidebarMenu">
          
          <Accordion defaultActiveKey="0" className='accordionSidebar'>
            
            <Accordion.Item eventKey="0">

              <Accordion.Header> <span dangerouslySetInnerHTML={{ __html: homeSVG }} />
                <span className='accordionHeaderText'>
                  Leads Management System
                </span>
             </Accordion.Header>
                

              <Accordion.Body className='accordionBody'>

                <Nav.Link href="/registros"> 
                  <span dangerouslySetInnerHTML={{ __html: userSVG }} />
                  <span className='accordionBodyText'>
                    Registros
                  </span>
                  </Nav.Link>

              </Accordion.Body>

            </Accordion.Item>
          </Accordion>
        </div>

    </Col>
    
  );
};

export default Sidebar;
