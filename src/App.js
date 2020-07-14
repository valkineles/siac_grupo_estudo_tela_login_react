import { Button, FormControl, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, Paper, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';
import React from 'react';
import { FaFacebookF, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';

const useStyles = makeStyles((theme) => ({
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
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: '50ch',
  },
  button: {
    margin: theme.spacing(1),
    width: '400px',
  },
  redesSociais: {
    textAlign: 'center',
    fontWeight: 600,
  },
}));
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
      <Paper elevation={2} className={classes.paper}>
        <h1 className={classes.titulo}>Login</h1>
        <Typography variant="h6" className={classes.subTitulo}>
          login com redes sociais
        </Typography>
        <Typography classeName={classes.subTitulo}>
          <FaGoogle color="red" />
          <FaFacebookF color="blue" />
          <FaGithub color="primary" />
          <FaTwitter color="blue" />
        </Typography>

        <Typography variant="h6" classeName={classes.redesSociais}>ou login com email e senha</Typography>

        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <TextField id="outlined-basic" label="Endereço de Email*" variant="outlined" />
        </FormControl>

        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
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
        </FormControl>
        <div>
          <Button variant="contained" color="primary" className={classes.button}>
            <FiLogIn />
            LOGIN
          </Button>
        </div>
        <div>
          <h5>
            Não possui uma conta?
            <Link to="/">Cadastre-se</Link>
            <Link to="/">Esqueci minha senha</Link>
          </h5>
        </div>
      </Paper>
    </div>
  );
}
export default App;
