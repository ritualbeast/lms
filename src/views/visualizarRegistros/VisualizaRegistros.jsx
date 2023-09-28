import React, {useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import '../../styles/visualizaRegistros.css';
import { Box , Checkbox} from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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

    return (
        <>
            <div className="container" style={{backgroundColor : 'blue', marginTop: '1rem', padding: '1rem', borderRadius: '10px'}}>
                <p>Registros</p>
                <div className='filtrosRegistros'>
                    <div>
                        <p>Fecha de registro</p>
                        <DatePicker
                            selected={startDate}
                            startDate={startDate}
                            endDate={endDate}
                            onChange={(update) => {
                                setDateRange(update);
                            }}
                            selectsRange
                            withPortal
                            
                        />
                    </div>
                    <div>
                        <p>Estado</p>
                        <select>
                            <option value="">Seleccione</option>
                            <option value="1">No Contesta</option>
                            <option value="2">Lista Gris</option>
                            <option value="3">Contactado</option>
                            <option value="4">Venta Concretada</option>
                            <option value="5">Por Contactar</option>
                        </select>
                    </div>

                </div>
                
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
            
        </>
        
    );
}
