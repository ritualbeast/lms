import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import '../../styles/ModalVisualizarRegistros.css';
import svgManager from '../../assets/img/svg';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from "react-select";
import Menu from '@mui/material/Menu';
import { getEstadoDetalle } from '../../services/ConsultarServices';


const xSVG = svgManager.getSVG('x');

const ModalVisualizarRegistros = ({open, onClose}) => {
  const [selectedValue, setSelectedValue] = useState(""); 
  const [listarEstado, setListarEstado] = useState([]);

  useEffect(() => {
    listarEstados();
}, []);


  const handleOutsideClick = (e) => {
    e.stopPropagation(); 
  };

  const handleSelectChange = (selectedOption) => {
    // Utiliza selectedOption.value para obtener el valor seleccionado

    console.log(selectedOption);
    setSelectedValue(selectedOption.value);
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

    const listarEstados = async () => {
      try {
          const response = await getEstadoDetalle();
          
          setListarEstado(response.data.listEstadosLeadsDetalle);
          return response.data.listEstadosLeadsDetalle;
      } catch (error) {
          console.error(error);
          throw error;
      }
  }

  const RowModalContent = ({ data, handleSelectChange, selectedValue }) => {


    const customStyles = {
      control: (provided) => ({
        ...provided,
        backgroundColor: '#ffffff', // Color de fondo normal
        textAlign: 'left',
        fontSize: '12px',
        fontWeight: '400',
        fontFamily: 'Open Sans',
        color: '#8b97a3',
      }),
      option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#f0f0f0' : '#fff', // Color de fondo cuando la opción está seleccionada
        ':hover': {
          backgroundColor: '#43b3751a', // Color de fondo cuando pasas el cursor
          borderRadius: '10px',
        },
        textAlign: 'left',
        textAlign: 'left',
        fontSize: '12px',
        fontWeight: '400',
        fontFamily: 'Public Sans',
        color: '#8b97a3',
      }),
      
    };

    return (
      <table style={{ margin: '0 auto', textAlign: 'center', width: '70%' }}>
        <tbody className="tableBody">
          {data.map((item, index) => (
            <tr key={index} className="rows">
              <td className="label">{item.label}</td>
              <td className="content">{item.content}</td>
            </tr>
          ))}
          <tr>
            <td className="label">Estado <span className="required-asterisk">*</span></td>

            <td>
              <Select 
                options={listarEstado.map((obj) => ({ value: obj.idEstadoLMSDetalle, label: obj.nombre }))}
                onChange={handleSelectChange} 
                value={
                  
                  listarEstado.map((obj) => ({ value: obj.idEstadoLMSDetalle, label: obj.nombre })).find((obj) => obj.value === selectedValue)
                  
                }
                styles={customStyles}
                placeholder="Seleccionar"
                />
                

            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  const verdata = () => {
    console.log(selectedValue);  
    console.log(listarEstado);
  }




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
            <span dangerouslySetInnerHTML={{ __html: xSVG }} onClick={handleSaveClick} className='closeModal' />
            <div className="modalVisualizarRegistros" onClick={handleOutsideClick}>
              <div className="tituloModal">   
                <p>Información del Cliente</p>
              </div>
              <div className="containerModal">
                    <RowModalContent data={data} handleSelectChange={handleSelectChange} selectedValue={selectedValue} />
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


    
    
    

export default ModalVisualizarRegistros
