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
    { id: 1, nombres: 'Snow', apellidos: 'Jon', telefono: 9061051732, correo: ', Jon', estado: 'Contactado' },
    { id: 2, nombres: 'Lannister', apellidos: 'Cersei', telefono: 9061051732, correo: ', Cersei', estado: 'Por Contactar' },
    { id: 3, nombres: 'Lannister', apellidos: 'Jaime', telefono: 9061051732, correo: ', Jaime', estado: 'Lista Gris' },
    { id: 4, nombres: 'Stark', apellidos: 'Aryasdfsdfsdsfdfsdssdsdsssssssssssssssssdsdsd', telefono: 9061051732, correo: ', Arya', estado: 'No Contesta' },
    { id: 5, nombres: 'Targaryen', apellidos: 'Daenerys', telefono: null, correo: ', Daenerys', estado: 'Venta Concretada' },
    { id: 6, nombres: 'Snow', apellidos: 'Jon', telefono: 9061051732, correo: ', Jon', estado: 'Contactado' },
    { id: 7, nombres: 'Lannister', apellidos: 'Cersei', telefono: 9061051732, correo: ', Cersei', estado: 'Por Contactar' },
    { id: 8, nombres: 'Lannister', apellidos: 'Jaime', telefono: 9061051732, correo: ', Jaime', estado: 'Lista Gris' },
    { id: 0, nombres: 'Stark', apellidos: 'Aryasdfsdfsdsfdfsdssdsdsssssssssssssssssdsdsd bermeo', telefono: 9061051732, correo: ', Arya', estado: 'No Contesta' },
    { id: 9, nombres: 'Targaryen', apellidos: 'Daenerys', telefono: null, correo: ', Daenerys', estado: 'Venta Concretada' },
    
];




export default function VisualizaRegistros() {

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [showModalVisualizarRegistros, setShowModalVisualizarRegistros] = useState(false);

    const openModalVisualizarRegistros = () => {
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
        const totalPages = Math.ceil(rows.length / 2);

        return (
            <>
                <div className='divVisualizarRegistrosCont'>
                    <div className='divVisualizarRegistros'>
                        <span className='spanVisualizar'
                        >Mostrar</span>
                        <select className='selectVisualizarRegistros'>
                            <option value="1" className='optionVisualizar'>5</option>
                            <option value="2" className='optionVisualizar'>10</option>
                            <option value="3" className='optionVisualizar'>20</option>
                            <option value="4" className='optionVisualizar'>50</option>
                        </select>
                        <span className='spanVisualizar2'>
                            Mostrando 1 a 10 de 100 entradas
                        </span>
                        
                    </div>
                    <div className='divVisualizarRegistros2'>
                        <Pagination
                            count={totalPages}
                            hidePrevButton
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
          
    
   

      
    
    return (
        <>
            <div className="container" style={{
                backgroundColor : 'white', padding: '3rem', borderRadius: '10px', border: '0.75px solid rgba(0, 0, 0, 0.1)'
                }}>
                <p className="tituloRegistros"
                >Registros</p>
                <br />
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
                        <select className='selectEstado' >
                            <option value="" className='optionVisualizar'>Seleccionar</option>
                            <option value="1" className='optionVisualizar'>No Contesta</option>
                            <option value="2" className='optionVisualizar'>Lista Gris</option>
                            <option value="3" className='optionVisualizar'>Contactado</option>
                            <option value="4" className='optionVisualizar'>Venta Concretada</option>
                            <option value="5" className='optionVisualizar'>Por Contactar</option>
                        </select>
                    </Col>
                    <Col md={4} className='colBuscar' style={{ position: 'relative' }}>
                        <button className='btnBuscar'>Buscar</button>
                        <button className='btnLimpiar' onClick={openModalVisualizarRegistros}>
                            <span dangerouslySetInnerHTML={{ __html: nofilterSVG }} />
                        </button>
                    </Col>


                </Row>
                <br />
                <br />
                
                <div style={{ height: 400, width: '100%', backgroundColor: 'white' }}>
                    <Box
                        sx={{
                            height: 300,
                            width: '100%',
                            '& .super-app-theme--header': {
                            backgroundColor: 'rgba(67, 179, 117, 1)',

                            },
                        }}
                        >
                            <DataGrid
                                rows={redactedRows}
                                columns={columns}
                                components={{
                                    Checkbox: CustomCheckbox,
                                    Pagination: customPagination,
                                }}
                                initialState={{
                                    pagination: {
                                        paginationModel: { page: 0, pageSize: 5 },
                                    },
                                }}
                                pageSizeOptions={[5, 10]}
                                checkboxSelection disableRowSelectionOnClick 

                                autoHeight
                                headerClassName="esuper-app-theme--headr"
                                getRowClassName={getRowClassName}
                                disableColumnMenu
                                
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
