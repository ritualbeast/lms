
const getEstadoDetalle = async () => {
  try {
    const url = 'http://desa.goitsa.me:2810/lms/lead/listar_estados_x_lead_detalle';
    
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    
    const response = await fetch(url, requestOptions);
    
    
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getListarPersonal = async () => {
  try {

    const codigoPersonal = localStorage.getItem('secuenciaUsuario');
    const url = `http://desa.goitsa.me:2810/lms/lead/listar_lead_x_personal?codigoPersonal=${codigoPersonal}`;
    
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Puedes agregar otros encabezados si es necesario
      },
    };
    
    const response = await fetch(url, requestOptions);
    
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


const getBitacora = async () => {
  try {
    const codigoPersonal = localStorage.getItem('secuenciaUsuario');
    const url = `http://desa.goitsa.me:2810/lms/bitacora/consulta-bitacora-leads?idDetLeads=1,2&codigoPersonal=${codigoPersonal}`;

    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Puedes agregar otros encabezados si es necesario
      },
    };
    
    const response = await fetch(url, requestOptions);
    
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};




export {
    getEstadoDetalle, getListarPersonal, getBitacora
    };
