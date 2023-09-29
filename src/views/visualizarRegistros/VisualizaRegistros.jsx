import React, {useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import '../../styles/visualizaRegistros.css';
import { Box , Checkbox} from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button , Container, Row, Col
} from 'react-bootstrap';
import limpiar from '../../assets/img/limpiar.jpg';
import ModalVisualizarRegistros from './ModalVisualizarRegistros';

const columns = [
  { field: 'id', headerName: 'N° Identificación', flex: 1,  headerClassName: 'super-app-theme--header' },
  { field: 'nombres', headerName: 'Nombres', flex: 1, headerClassName: 'super-app-theme--header' },
  { field: 'apellidos', headerName: 'Apellidos', flex: 1 , headerClassName: 'super-app-theme--header'},
  {
    field: 'telefono',
    headerName: 'Teléfono',
    type: 'number',
    flex: 1,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'correo',
    headerName: 'Correo electrónico',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    flex: 1,
    headerClassName: 'super-app-theme--header',
  },
    {
    //estado
    field: 'estado',
    headerName: 'Estado',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    flex: 1,
    headerClassName: 'super-app-theme--header',
    }
];

const rows = [
    { id: 1, nombres: 'Snow', apellidos: 'Jon', telefono: 35, correo: ', Jon', estado: 'activo' },

];


export default function VisualizaRegistros() {

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [showModalVisualizarRegistros, setShowModalVisualizarRegistros] = useState(false);

    const openModalVisualizarRegistros = () => {
        setShowModalVisualizarRegistros(true);
    }



    return (
        <>
            <div className="container" style={{backgroundColor : 'white', padding: '3rem', borderRadius: '10px'}}>
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
                            placeholderText='Seleccionar rango de fechas'
                            className='datePicker'
                            
                        />
                    </Col>
                    <Col md={4}>
                        <p className='estado'
                        >Estado</p>
                        <select className='selectEstado' >
                            <option value="">Seleccionar</option>
                            <option value="1">No Contesta</option>
                            <option value="2">Lista Gris</option>
                            <option value="3">Contactado</option>
                            <option value="4">Venta Concretada</option>
                            <option value="5">Por Contactar</option>
                        </select>
                    </Col>
                    <Col md={4}> 
                        <Button variant="success">Buscar</Button>{' '}
                        
                        <Button variant="success" onClick={openModalVisualizarRegistros}
                         >Limpiar
                        </Button>{' '}
                    </Col>

                </Row>
                
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
                            rows={rows}
                            columns={columns}
                            initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                            }}
                            pageSizeOptions={[5, 10]}
                            components={{
                                Checkbox: (props) => (
                                <Checkbox
                                    {...props}
                                    style={{ borderRadius: '20px' }} // Ajusta el radio aquí según tus preferencias
                                />
                                ),
                            }}
                            checkboxSelection
                            autoHeight
                            headerClassName="custom-header-class"
                            
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
