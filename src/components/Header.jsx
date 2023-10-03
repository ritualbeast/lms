import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/header.css';
import svgManager from '../assets/img/svg';
import UserIcon from '../assets/img/userIconn.png';
const bellSVG = svgManager.getSVG('bell');
const Header = () => {
  return (
    <div>
        <Row className="header">
            <Col md={10} >
                <p className="tituloHeader"
                >Leads Management System</p>
            </Col>
            <Col md={2}>
              
              <div className="headerIcons">
                
                <span dangerouslySetInnerHTML={{ __html: bellSVG }} />
                <img src={UserIcon} alt="User Icon" className="userIcon sameHeight" width={30} height={30} />

              </div>
            </Col>
        </Row>
        
      
    </div>
  )
}

export default Header
