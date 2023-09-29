import React from 'react';
import Sidebar from '../../components/Sidebar';
import VisualizaRegistros from './VisualizaRegistros';
import Header from '../../components/Header';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../styles/registros.css';


const Registros = () => {
  return (
    <Container fluid>
      <Row className='rowRegistros vh-100'>
        {/* Sidebar ocupa el 20% */}
        <Col className='sideBarPrincipal p-0' xs={3}>            
          <Sidebar />
        </Col>
        {/* Contenido ocupa el 80% */}
        <Col xs={9} className='contenidoPrincipal'>
          <Container>
            <Row>
              <Col>
                <Header />
                <VisualizaRegistros />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Registros;
