import React, {useState} from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import '../../styles/ModalVisualizarRegistros.css';

const ModalVisualizarRegistros = ({open, onClose}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);



    return (
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={open}
          onHide={onClose}
        >
          <div className="tituloModal">
            <div>Información del Cliente</div>
          </div>
          <div className="containerModal">
            <Row className="justify-content-center">
              <Col sm={6}> {/* Cambia el valor de sm según tu necesidad para ocupar el 50% */}
                <RowModalContent />
              </Col>
            </Row>
          </div>
          <Modal.Footer>
            <Button onClick={onClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    };
    
    const RowModalContent = () => {
      return (
        <table>
          <tbody>
            <tr>
              <td>Contenido 1</td>
              <td>Contenido 2</td>
            </tr>
            <tr>
              <td>Contenido 3</td>
              <td>Contenido 4</td>
            </tr>
            <tr>
              <td>Contenido 5</td>
              <td>Contenido 6</td>
            </tr>
            <tr>
              <td>Contenido 7</td>
              <td>Contenido 8</td>
            </tr>
            <tr>
              <td>Contenido 9</td>
              <td>Contenido 10</td>
            </tr>
            <tr>
              <td>Contenido 11</td>
              <td>Contenido 12</td>
            </tr>
            <tr>
              <td>Contenido 13</td>
              <td>Contenido 14</td>
            </tr>
          </tbody>
        </table>
      );
    
}

export default ModalVisualizarRegistros
