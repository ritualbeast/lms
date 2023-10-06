const ConsultaUsuarios = async (filterName='T', checkedItems='E', pagina=1, size=10) => {
    try {
  
      const tokenUsuario = localStorage.getItem('token');
     
     
      const canales = process.env.REACT_APP_CANALES;
      const token = `Bearer ${tokenUsuario}`;
      const headers = {
        'Content-Type': 'application/json',
        Authorization: token,
        Canal: canales
      };
      const requestOptions = {
        method: 'GET',
        headers,
      };
      const response = await fetch(`${process.env.REACT_APP_CONSULTAR_USUARIOS_URL}/${checkedItems}/${filterName}/?pagina=${pagina}&size=${size}`, requestOptions);
      console.log(response); 
      const data = await response.json();
      return data; // Devolver los datos obtenidos
  
    } catch (error) {
      console.error(error);
      throw error; // Lanzar el error para que sea capturado en el lugar donde se llama a la función
    }
  };

  export {
    ConsultaUsuarios
  }
