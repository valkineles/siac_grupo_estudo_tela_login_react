import { Button, FormControl, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, Paper, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';
import React from 'react';
import { FaFacebookF, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';

const useStyles = makeStyles({
  app: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    flexBasis: 450,
    padding: '15px',
  },
  titulo: {
    marginBottom: 0,
    fontSize: '50px',
    fontWeight: 300,
    textAlign: 'center',
  },
  subTitulo: {
    textAlign: 'center',
    fontWeight: 600,
    color: '#c4c8cc',
    marginTop: '10px',
    marginBottom: '30px',
  },
  textField: {
    width: '50ch',
    marginTop: '4px',
    marginBottom: '4px',
  },
  redesSociais: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    marginBottom: '20px',
  },
  GoogleIcon: {
    color: '#db3236',
  },
  FaceIcon: {
    color: '#4267B2',
  },
  GitIcon: {
    color: '#000',
  },
  TwitterIcon: {
    color: '#1DA1F2',
  },
  Login: {
    backgroundColor: '#2e43ac',
    marginTop: '30px',
    marginBottom: '10px',    
  },
  rodape: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
function App() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className={classes.app}>
      <Paper elevation={4} className={classes.paper}>
        <h1 className={classes.titulo}>Login</h1>
        
        <Typography variant="h6" className={classes.subTitulo}>
          login com redes sociais
        </Typography>
        <div className={classes.redesSociais}>
          <IconButton className={classes.GoogleIcon}>
            <FaGoogle />
          </IconButton>

          <IconButton className={classes.FaceIcon}>
            <FaFacebookF />
          </IconButton>

          <IconButton className={classes.GitIcon}>
            <FaGithub />
          </IconButton>

          <IconButton className={classes.TwitterIcon}>
            <FaTwitter />
          </IconButton>
        </div>

        <Typography className={classes.subTitulo}>
          ou login com email e senha
        </Typography>
        
        <FormControl className={ classes.textField} variant="outlined">
          <TextField id="outlined-basic" label="Endereço de Email*" variant="outlined" />
        </FormControl>

        <FormControl className={classes.textField} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Senha*</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
          <Button className={classes.Login}>
            <FiLogIn />
            LOGIN
          </Button>
        <div className={classes.rodape}>
          Não possui uma conta? <Link to="/">Cadastre-se</Link>
          <Link to="/">Esqueci minha senha</Link>
        </div>
        </FormControl>
      </Paper>
    </div>
  );
}
export default App;
