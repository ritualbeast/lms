const LoginToken = async ({ usuario, contrasenia }) => {
    console.log('entro a la funcion')
    console.log(usuario, contrasenia);  
    try {
      const base64 = {
        encode: (text) => {
          return btoa(text);
        }
      };
      const applicationHeader = 'UEhBTlRPTVhfQkFDS0VORA==';
      const token = `Basic ${base64.encode(`${usuario}:${contrasenia}`)}`;
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': token,
        'Application': applicationHeader
      };
      const requestOptions = {
        method: 'POST',
        headers
      };
      // const response = await fetch('https://api-phantomx.veris.com.ec/seguridad/v1/autenticacion/login', requestOptions);
      const response = await fetch('https://api.phantomx.com.ec/seguridad/v1/autenticacion/login', requestOptions);
      // const response = await fetch('https://api-phantomx.veris.com.ec/seguridadtest/v1/autenticacion/login', requestOptions);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
      throw error; 
    }
  };

    export {
        LoginToken
    }