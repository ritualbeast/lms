import React, {useState, useEffect} from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Select from "react-select";
import '../../styles/visualizaRegistros.css';
import { Box } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button , Container, Row, Col
} from 'react-bootstrap';
import limpiar from '../../assets/img/limpiar.jpg';
import ModalVisualizarRegistros from './ModalVisualizarRegistros';
import svgManager from '../../assets/img/svg';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Checkbox from '@mui/material/Checkbox';
import DataRow from '../../components/DataRow';
import { render } from '@testing-library/react';
import { getEstadoDetalle, getListarPersonal, getBitacora } from '../../services/ConsultarServices';



const nofilterSVG = svgManager.getSVG('nofilter');
const calendarSVG = svgManager.getSVG('calendar');
const columns = [
  { field: 'id', headerName: 'N° Identificación', flex: 1,  headerClassName: 'super-app-theme--header', sortable: false },
  { field: 'nombres', headerName: 'Nombres', flex: 1, headerClassName: 'super-app-theme--header', sortable: false },
  { field: 'apellidos', headerName: 'Apellidos', flex: 1 , headerClassName: 'super-app-theme--header', sortable: false},
  {
    field: 'telefono',
    headerName: 'Teléfono',
    flex: 1,
    headerClassName: 'super-app-theme--header',
    sortable: false
  },
  {
    field: 'correo',
    headerName: 'Correo electrónico',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    flex: 1,
    headerClassName: 'super-app-theme--header',
    sortable: false
  },
    {
    //estado
    field: 'estado',
    headerName: 'Estado',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    flex: 1,
    headerClassName: 'super-app-theme--header',
    sortable: false,
    renderCell: (params) => {
        return <DataRow row={params.row} />;
      }
    },
];

const rows = [
    { id: 1, nombres: 'Snow', apellidos: 'Jon', telefono: 9061051732, correo: ', Jon', estado: 'Contactado' },
    { id: 2, nombres: 'Lannister', apellidos: 'Cersei', telefono: 9061051732, correo: ', Cersei', estado: 'Por Contactar' },
    { id: 3, nombres: 'Lannister', apellidos: 'Jaime', telefono: 9061051732, correo: ', Jaime', estado: 'Lista Gris' },
    { id: 4, nombres: 'Stark', apellidos: 'Aryasdfsdfsdsfdfsdssdsdsssssssssssssssssdsdsd', telefono: 9061051732, correo: ', Arya', estado: 'No Contesta' },
    { id: 5, nombres: 'Targaryen', apellidos: 'Daenerys', telefono: null, correo: ', Daenerys', estado: 'Venta Concretada' },
    { id: 6, nombres: 'Snow', apellidos: 'Jon', telefono: 9061051732, correo: ', Jon', estado: 'Contactado' },
    { id: 7, nombres: 'Lannister', apellidos: 'Cersei', telefono: 9061051732, correo: ', Cersei', estado: 'Por Contactar' },
    { id: 8, nombres: 'Lannister', apellidos: 'Jaime', telefono: 9061051732, correo: ', Jaime', estado: 'Lista Gris' },
    { id: 0, nombres: 'Stark', apellidos: 'Aryasdfsdfsdsfdfsdssdsdsssssssssssssssssdsdsd', telefono: 9061051732, correo: ', Arya', estado: 'No Contesta' },
    { id: 9, nombres: 'Targaryen', apellidos: 'Daenerys', telefono: null, correo: ', Daenerys', estado: 'Venta Concretada' },
    { id: 10, nombres: 'Snow', apellidos: 'Jon', telefono: 9061051732, correo: ', Jon', estado: 'Contactado' },
    { id: 20, nombres: 'Lannister', apellidos: 'Cersei', telefono: 9061051732, correo: ', Cersei', estado: 'Por Contactar' },
    { id: 30, nombres: 'Lannister', apellidos: 'Jaime', telefono: 9061051732, correo: ', Jaime', estado: 'Lista Gris' },
    { id: 40, nombres: 'Stark', apellidos: 'Aryasdfsdfsdsfdfsdssdsdsssssssssssssssssdsdsd', telefono: 9061051732, correo: ', Arya', estado: 'No Contesta' },
    { id: 50, nombres: 'Targaryen', apellidos: 'Daenerys', telefono: null, correo: ', Daenerys', estado: 'Venta Concretada' },
    { id: 60, nombres: 'Snow', apellidos: 'Jon', telefono: 9061051732, correo: ', Jon', estado: 'Contactado' },
    { id: 70, nombres: 'Lannister', apellidos: 'Cersei', telefono: 9061051732, correo: ', Cersei', estado: 'Por Contactar' },
    { id: 80, nombres: 'Lannister', apellidos: 'Jaime', telefono: 9061051732, correo: ', Jaime', estado: 'Lista Gris' },
    { id: 11, nombres: 'Stark', apellidos: 'Aryasdfsdfsdsfdfsdssdsdsssssssssssssssssdsdsd bermeo', telefono: 9061051732, correo: ', Arya', estado: 'No Contesta' },
    { id: 90, nombres: 'Targaryen', apellidos: 'Daenerys', telefono: null, correo: ', Daenerys', estado: 'Venta Concretada' },
    { id: 1, nombres: 'Snow', apellidos: 'Jon', telefono: 9061051732, correo: ', Jon', estado: 'Contactado' },
    { id: 2, nombres: 'Lannister', apellidos: 'Cersei', telefono: 9061051732, correo: ', Cersei', estado: 'Por Contactar' },
    { id: 3, nombres: 'Lannister', apellidos: 'Jaime', telefono: 9061051732, correo: ', Jaime', estado: 'Lista Gris' },
    { id: 4, nombres: 'Stark', apellidos: 'Aryasdfsdfsdsfdfsdssdsdsssssssssssssssssdsdsd', telefono: 9061051732, correo: ', Arya', estado: 'No Contesta' },
    { id: 5, nombres: 'Targaryen', apellidos: 'Daenerys', telefono: null, correo: ', Daenerys', estado: 'Venta Concretada' },
    { id: 6, nombres: 'Snow', apellidos: 'Jon', telefono: 9061051732, correo: ', Jon', estado: 'Contactado' },
    { id: 7, nombres: 'Lannister', apellidos: 'Cersei', telefono: 9061051732, correo: ', Cersei', estado: 'Por Contactar' },
    { id: 8, nombres: 'Lannister', apellidos: 'Jaime', telefono: 9061051732, correo: ', Jaime', estado: 'Lista Gris' },
    { id: 0, nombres: 'Stark', apellidos: 'Aryasdfsdfsdsfdfsdssdsdsssssssssssssssssdsdsd', telefono: 9061051732, correo: ', Arya', estado: 'No Contesta' },
    { id: 9, nombres: 'Targaryen', apellidos: 'Daenerys', telefono: null, correo: ', Daenerys', estado: 'Venta Concretada' },
    { id: 10, nombres: 'Snow', apellidos: 'Jon', telefono: 9061051732, correo: ', Jon', estado: 'Contactado' },
    { id: 20, nombres: 'Lannister', apellidos: 'Cersei', telefono: 9061051732, correo: ', Cersei', estado: 'Por Contactar' },
    { id: 30, nombres: 'Lannister', apellidos: 'Jaime', telefono: 9061051732, correo: ', Jaime', estado: 'Lista Gris' },
    { id: 40, nombres: 'Stark', apellidos: 'Aryasdfsdfsdsfdfsdssdsdsssssssssssssssssdsdsd', telefono: 9061051732, correo: ', Arya', estado: 'No Contesta' },
    { id: 50, nombres: 'Targaryen', apellidos: 'Daenerys', telefono: null, correo: ', Daenerys', estado: 'Venta Concretada' },
    { id: 60, nombres: 'Snow', apellidos: 'Jon', telefono: 9061051732, correo: ', Jon', estado: 'Contactado' },
    { id: 70, nombres: 'Lannister', apellidos: 'Cersei', telefono: 9061051732, correo: ', Cersei', estado: 'Por Contactar' },
    { id: 80, nombres: 'Lannister', apellidos: 'Jaime', telefono: 9061051732, correo: ', Jaime', estado: 'Lista Gris' },
    { id: 11, nombres: 'Stark', apellidos: 'Aryasdfsdfsdsfdfsdssdsdsssssssssssssssssdsdsd bermeo', telefono: 9061051732, correo: ', Arya', estado: 'No Contesta' },
    { id: 90, nombres: 'Targaryen', apellidos: 'Daenerys', telefono: null, correo: ', Daenerys', estado: 'Venta Concretada' },
    
    
];




export default function VisualizaRegistros() {

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [showModalVisualizarRegistros, setShowModalVisualizarRegistros] = useState(false);
    const [optionVisualizar, setOptionVisualizar] = useState('5');
    const [dataGridKey, setDataGridKey] = useState(0);
    const [paginaActual, setPaginaActual] = useState(1);
    const [listarEstado, setListarEstado] = useState([]);
    const [selectedValue, setSelectedValue] = useState("");

    useEffect(() => {
        if (startDate && endDate) {
            console.log('startDate', startDate);
            console.log('endDate', endDate);
        }
         listarEstados();
        // listarPersonal();
        listarBitacora();
         

    }, [optionVisualizar, startDate, endDate]);


    const openModalVisualizarRegistros = (id) => {
        console.log(id);
        setShowModalVisualizarRegistros(true);
    }

    const getRowClassName = (params) => {
        if (params.row.estado === 'activo') {
          return 'super-app-theme--activo'; // Aplica la clase para filas activas
        }
        if (params.row.estado === 'inactivo') {
          return 'super-app-theme--inactivo'; // Aplica la clase para filas inactivas
        }
        return '';
      };

    const CustomCheckbox = ({ checked, isFirstCheckbox }) => {
    const checkboxStyle = {
        cursor: 'pointer',
        color: isFirstCheckbox ? 'white' : 'green', // Cambia el color según sea el primer checkbox o no
        };
    <span style={{ cursor: 'pointer' }}>
        {checked ? <Checkbox  style={{backgroundColor: 'green', color: 'white'}} inputProps={{ 'aria-label': 'controlled' }} icon={<CheckCircleOutlineIcon style={{color: 'white'}}/>} checkedIcon={<CheckCircleOutlineIcon style={{color: 'white'}}/>} /> : <Checkbox />}
        
        
    </span>
    };
    
    const handleChange = (e) => {
        console.log(e.target.value);
        setOptionVisualizar(e.target.value);
        setDataGridKey(dataGridKey + 1);
        };
    const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    
    <div>
        <button className='datePicker' onClick={onClick} ref={ref}>
            <div className='divDatepicker'>
                
                {value || "Seleccionar"} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </div>
            <div style={{ position: 'absolute', height: '50%', width: '20%', top: '5px', right: '10px' }}>
                <span dangerouslySetInnerHTML={{ __html: calendarSVG }} />
            </div>
        </button>
        
    </div>
    ));

    const customPagination = () => {
    const totalPages = Math.ceil(rows.length / optionVisualizar);


    const ver = () => {
        console.log(optionVisualizar);
    }

    const cambiarPagina = (event, page) => {
        console.log('Cambio de página', page);
        // Realiza cualquier acción que necesites con el número de página (page).
    }


    return (
        <>
            <div className='divVisualizarRegistrosCont'>
            <div className='divVisualizarRegistros'>
                <span className='spanVisualizar'>Mostrar</span>
                <select className='selectVisualizarRegistros' onChange={handleChange} value={optionVisualizar}>
                    <option value={5} className='optionVisualizar'>5</option>
                    <option value={10} className='optionVisualizar'>10</option>
                    <option value={20} className='optionVisualizar'>20</option>
                </select>
                <span className='spanVisualizar2'>
                    Mostrando {optionVisualizar} a {Math.min(optionVisualizar, rows.length)} de {rows.length} entradas
                </span>
            </div>
                <div className='divVisualizarRegistros2'>
                    <Pagination
                        count={totalPages}
                        hidePrevButton
                        onChange={cambiarPagina}
                        renderItem={(item) => (
                            <PaginationItem
                            components={{
                                last: (props) => <button {...props}>Last</button>,
                                next: (props) => <button {...props}>Siguiente &gt;</button>,
                                first: (props) => <button {...props}>First</button>,
                                previous: (props) => <button {...props}>Previous</button>
                            }}
                            className='customPaginationItem2'
                            style={{ 
                                fontSize: '16px', 
                                color: 'black',
                                fontFamily: 'Open Sans',
                                fontWeight: '600',
                            }}
                            {...item }
                            />
                        )}
                    
                    />

                </div>
            </div>
            
                
        </>
        
    
    ); 
    };

    const redactData = (data) => {
        
        
        return data.map(item => {
            const redactedCorreo = item.correo ? '*'.repeat(item.correo.length) : null;
            const redactedTelefono = item.telefono ? '*'.repeat(item.telefono.toString().length) : null;
            
            return {
            ...item,
            correo: redactedCorreo,
            telefono: redactedTelefono,
            }
        });
        };
          
    const redactedRows = redactData(rows);
          
    const listarEstados = async () => {
        try {
            const response = await getEstadoDetalle();
            console.log(response);
            setListarEstado(response.data.listEstadosLeadsDetalle);
            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    const listarPersonal = async () => {
        try {
            const response = await getListarPersonal('66');
            console.log(response);
            // setListarEstado(response.data.listEstadosLeadsDetalle);
            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    const onChange = (valor) => {
        console.log(valor);
        setSelectedValue(valor.value);
    }

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
          backgroundColor: 'white',
        }),
        singleValue: (provided, state) => ({
            ...provided,
            color: '#8b97a3',
            fontSize: '12px',
        }),

        
      };


      const listarBitacora = async () => {
        try {
            const response = await getBitacora();
            console.log(response);
            // setListarEstado(response.data.listEstadosLeadsDetalle);
            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    
    return (
        <>
            <div className="container" style={{
                backgroundColor : 'white',  padding: '3rem', borderRadius: '10px', border: '0.75px solid rgba(0, 0, 0, 0.1)'
                }}>
                <p className="tituloRegistros"
                >Registros</p>
                <Row className='filtrosRegistros'>
                    <Col md={4}>
                        <p className='periodo'
                        >Periodo</p>
                        <DatePicker
                            selected={startDate}
                            startDate={startDate}
                            endDate={endDate}
                            onChange={(update) => {
                                setDateRange(update);
                            }}
                            selectsRange
                            withPortal
                            className='datePicker'
                            customInput={<CustomInput />}
                            
                            placeholderText="Seleccionar"
                        ></DatePicker>
                    </Col>
                    <Col md={4}>
                        <p className='estado'
                        >Estado</p>
                        {/* <select className='selectEstado'  onChange={onChange}>
                            {listarEstado.map((item) => (
                                <option value={item.idEstadoLMSDetalle} className='optionEstado'>{item.descripcion}</option>
                            ))

                            }
                        </select> */}
                        <Select 
                            options={listarEstado.map((obj) => ({ value: obj.idEstadoLMSDetalle, label: obj.nombre }))}
                            onChange={onChange}
                            value={listarEstado.map((obj) => ({ value: obj.idEstadoLMSDetalle, label: obj.nombre })).find((obj) => obj.value === selectedValue)}
                            styles={customStyles}
                            placeholder="Seleccionar"
                        />
                    </Col>
                    <Col md={4} className='colBuscar' style={{ position: 'relative' }}>
                        <button className='btnBuscar'>Buscar</button>
                        <button className='btnLimpiar'>
                            <span dangerouslySetInnerHTML={{ __html: nofilterSVG }} />
                        </button>
                    </Col>


                </Row>
                <br />
                <br />
                
                <div style={{ height: '100%', width: '100%', backgroundColor: 'white' }}>
                    <Box
                        sx={{
                        height: '100%', // Esto establece una altura máxima del 100% del contenedor principal
                        width: '100%',
                        overflowY: 'auto', // Esto permite que el contenido sea desplazable si se sale del contenedor
                        '& .super-app-theme--header': {
                            backgroundColor: 'rgba(67, 179, 117, 1)',
                        },
                        }}
                    >
                            <DataGrid
                                key={dataGridKey}
                                rows={redactedRows}
                                columns={columns}
                                components={{
                                    Checkbox: CustomCheckbox,
                                    Pagination: customPagination,
                                }}
                                initialState={{
                                    pagination: {
                                        paginationModel: { page: 0, pageSize: optionVisualizar },
                                    },
                                }}
                                pageSizeOptions={[5, 10]}
                                checkboxSelection disableRowSelectionOnClick 

                                autoHeight
                                headerClassName="esuper-app-theme--headr"
                                getRowClassName={getRowClassName}
                                disableColumnMenu
                                onCellDoubleClick={(params, event) => {
                                    console.log(params);
                                    console.log(event);
                                    openModalVisualizarRegistros(params.row.id);
                                }
                                }
                                className='dataGrid'
                            />
                    </Box>
                
                </div>

            </div>
            {showModalVisualizarRegistros &&
            <ModalVisualizarRegistros
                open={showModalVisualizarRegistros}
                onClose={() => setShowModalVisualizarRegistros(false)}
            /> 
            }
        </>
        
    );
}
