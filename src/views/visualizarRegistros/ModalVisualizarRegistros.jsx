import React, {useState} from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import '../../styles/ModalVisualizarRegistros.css';
import svgManager from '../../assets/img/svg';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const xSVG = svgManager.getSVG('x');

const ModalVisualizarRegistros = ({open, onClose}) => {
  const [selectedValue, setSelectedValue] = useState(""); 

  const handleOutsideClick = (e) => {
    e.stopPropagation(); 
  };

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleSaveClick = () => {
    if (selectedValue !== "") {
      onClose();
    }
    else {
      toast.error('Debe seleccionar un estado para poder salir de la pantalla', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      });
    }

  };

    const data = [
        {
          label: 'N° identificación',
          content: 'Valor 1',
        },
        {
          label: 'Nombres',
          content: 'Valor 2',
        },
        {
          label: 'Apellidos',
          content: 'Valor 3',
        },
        {
          label: 'Teléfono',
          content: 'Valor 4',
        },
        {
          label: 'Correo electrónico',
          content: 'Valor 5',
        },
        {
          label: 'Periodo',
          content: 'Valor 6',
        },
      ];


    return (
        <>
          <ToastContainer
            toastStyle={{ backgroundColor: "  rgba(234, 84, 85, 0.16)", color: "#EA5455" }}

           />
          <Modal
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={open}
            onHide={onClose}
            backdrop="static"
            backdropClassName="custom-opacity" // Añade esta línea
          >
            <span dangerouslySetInnerHTML={{ __html: xSVG }} onClick={onClose} className='closeModal' />
            <div className="modalVisualizarRegistros" onClick={handleOutsideClick}>
              <div className="tituloModal">   
                <p>Información del Cliente</p>
              </div>
              <div className="containerModal">
                <Row className="justify-content-center">
                <Col sm={6} className="colModals">
                  <RowModalContent data={data} handleSelectChange={handleSelectChange} selectedValue={selectedValue} />
                </Col>

                </Row>
              </div>
              <br />
                <div className="botonModal">
                    <button className='buttonModal' onClick={handleSaveClick}>
                        Guardar
                    </button>
                </div>
                <br />
            </div>    
            

          </Modal>
        </>
      );
    };


    
    const RowModalContent = ({ data, handleSelectChange, selectedValue }) => {
      return (
        <table style={{ margin: '0 auto', textAlign: 'center' }}>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="label">{item.label}</td>
                <td className="content">{item.content}</td>
              </tr>
            ))}
            <tr>
              <td className="label">Estado <span className="required-asterisk">*</span></td>
              <td>
                <select className="selectEstado" value={selectedValue} onChange={handleSelectChange}>
                  <option value="">Seleccionar</option>
                  <option value="1">No Contesta</option>
                  <option value="2">Lista Gris</option>
                  <option value="3">Contactado</option>
                  <option value="4">Venta Concretada</option>
                  <option value="5">Por Contactar</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      );
    };
    

export default ModalVisualizarRegistros
