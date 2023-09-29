import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/header.css';

const Header = () => {
  return (
    <div>
        <Row className="header">
            <Col md={10} >
                <p className="tituloHeader"
                >Leads Management System</p>
            </Col>
            <Col md={2}>
                <p>Logout</p>
            </Col>
        </Row>
        
      
    </div>
  )
}

export default Header
