import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import VisualizaRegistros from './VisualizaRegistros';
import Header from '../../components/Header';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../styles/registros.css';

const Registros = () => {
  const [isValidated, setIsValidated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('tokenLMS');
    if (!token) {
      // No hay token, por lo que la validación no pasa
      setIsValidated(false);
      window.location.href = '/';
    } else {
      // La validación pasa
      setIsValidated(true);
    }
  }, []);

  if (!isValidated) {
    // Muestra un mensaje de carga o error si la validación no pasa
    return <div></div>; // Puedes personalizar este mensaje
  }

  return (
    <div className='contenedorPrincipal' style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
    <Row className='rowRegistros' style={{ flex: 1 }}>
      {/* Sidebar ocupa el 20% */}
      <Col className='sideBarPrincipal p-0' xs={2}>
        <Sidebar />
      </Col>
      {/* Contenido ocupa el 80% */}
      <Col xs={10} className='contenidoPrincipal'>
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
  </div>
  );
};

export default Registros;
