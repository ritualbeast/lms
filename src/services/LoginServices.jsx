const LoginToken = async ({ usuario, contrasenia }) => {
  console.log('entro a la funcion')
  console.log(usuario, contrasenia);  
  try {
    const base64 = {
      encode: (text) => {
        return btoa(text);
      }
    };
    const applicationHeader = 'UEhBTlRPTVhfUElE';
    
    const token = `Basic ${base64.encode(`${usuario}:${contrasenia}`)}`;
    console.log(token);
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': token,
      'Application': applicationHeader
    };
    const requestOptions = {
      method: 'POST',
      headers
    };
     const response = await fetch('https://api-phantomx.veris.com.ec/seguridad/v1/autenticacion/login', requestOptions);
    //const response = await fetch('https://api.phantomx.com.ec/seguridad/v1/autenticacion/login', requestOptions);
    // const response = await fetch('https://api-phantomx.veris.com.ec/seguridadtest/v1/autenticacion/login', requestOptions);
    const data = await response.json();
    console.log(data);
    localStorage.setItem('secuenciaUsuario', data.data.secuenciaUsuario);
    
    
    ConsultarSucursales(data.data.idToken, data.data.secuenciaUsuario);
    return data;
  } catch (error) {
    console.error(error);
    throw error; 
  }
};

const ConsultarSucursales = async ( token, secuenciaUsuario ) => {
  
  try {
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Application': 'UEhBTlRPTVhfUElE',
      'Content-Type': 'application/json'
    };
    
    const requestOptions = {
      method: 'GET',
      headers
    };
    
    const url = `https://api-phantomx.veris.com.ec/seguridad/v1/usuarios/${secuenciaUsuario}/sucursales?tipoSucursal=TODOS`;
    
    const response = await fetch(url, requestOptions);
    
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};






  export {
      LoginToken , ConsultarSucursales
  }