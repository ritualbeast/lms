import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import imagenLogin from '../../assets/img/loginImagenVeris.jpg';
import '../../styles/login.css';
import LogoVeris from '../../assets/img/LOGO_VERI.jpg';
import { LoginToken } from '../../services/LoginServices';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Login() {

  const [usuario, setUsuario] = React.useState('');
  const [contrasenia, setContrasenia] = React.useState('');

   

  const handleLogin = async () => {
    console.log('entro a la funcion');
    try {
      const token = await LoginToken({ usuario, contrasenia });
      console.log(token);
      if (token.code === 200) {
        localStorage.setItem('tokenLMS', token.data.nombreUsuario);
        console.log('entro al if');
        // window.location.href = '/registros';
      }
      else if (token.code === 400) {
        toast.error(token.message , {
          autoClose : 1000
        });
      }


    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ToastContainer />  
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          
          <Grid 
          
          item xs={12} sm={8} md={5} component={Paper} elevation={6} square
          
          style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}
          >
            <Box
              sx={{
                my: 8,
                display: 'flex',
                flexDirection: 'column',
                width: '60%',
                
                
              }}
            >
              <div>
                  <img src={LogoVeris} alt="Logo Veris" className='logoVerisLogin' />
                  
                  <p className='pLogin2'
                  >
                    ¡Bienvenido!
                  </p>
                  <p className='pLogin3'
                  >
                    Iniciar Sesión
                  </p>
              </div>
                
              <Box  noValidate  sx={{ mt: 1 }}>
                  <p className='pLogin'
                  >Usuario o Correo Electrónico</p>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  style={{margin : '0', marginBottom: '1rem'}}
                  onChange={(e) => setUsuario(e.target.value)}
                />
                  <p className='pLogin'
                  >Contraseña</p>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  style={{margin : '0', marginBottom: '1rem'}}
                  onChange={(e) => setContrasenia(e.target.value)}
                />
                
                <button
                  className='buttonLogin'
                  fullWidth
                  style={{backgroundColor: 'rgba(11, 98, 234, 1)', color: 'white'} }
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleLogin}
                >
                  Continuar
                </button>
                
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: `url(${imagenLogin}) `,
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              
            }}
          />
        </Grid>
      </ThemeProvider>
    </>
  );
}