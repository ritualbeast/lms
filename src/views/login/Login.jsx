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
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
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
              
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
              />
              
              <button
                className='buttonLogin'
                type="submit"
                fullWidth
                style={{backgroundColor: 'rgba(11, 98, 234, 1)', color: 'white'} }
                sx={{ mt: 3, mb: 2 }}
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
  );
}