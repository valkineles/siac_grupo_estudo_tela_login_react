import { Button, IconButton, InputAdornment, Paper, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React from 'react';
import { FaFacebookF, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';


const useStyles = makeStyles({
  app: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
   },
  paper: {
    flexBasis: 450,
    padding: '20px'
  },
  titulo: {
    marginBottom: 0,
    fontSize: '50px',
    fontWeight: 300,
    textAlign: 'center'
  },
  subTitulo: {
    textAlign: 'center',
    fontWeight: 300,
    color: '#c4c8c6',
    fontSize: '15px',
    marginTop: 0,
    marginBottom: '15px'
  },
  textField: {
    margin: '5px 0'
  },
  redesSociais: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px 0'
  },
  Login: {
    margin: '30px 0'
  },
  rodape: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});
function App() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    showPassword: false
  });
  const handleClickShowPassword = () => {
    setValues({ showPassword: !values.showPassword });
  };

  return (
    <div className={classes.app}>
      <Paper elevation={4} className={classes.paper}>
        <h1 className={classes.titulo}>Login</h1>

        <Typography variant="h6" className={classes.subTitulo}>
          login com redes sociais
        </Typography>
        <div className={classes.redesSociais}>
          <IconButton>
            <FaGoogle color="#db3236" />
          </IconButton>

          <IconButton>
            <FaFacebookF color="#4267B2" />
          </IconButton>

          <IconButton>
            <FaGithub color="#333" />
          </IconButton>

          <IconButton>
            <FaTwitter color="#1DA1F2" />
          </IconButton>
        </div>

        <Typography className={classes.subTitulo}>
          ou login com email e senha
        </Typography>

        <TextField
          fullWidth
          className={classes.textField}
          id="outlined-basic"
          label="Endereço de Email"
          variant="outlined"
          required
        />

        <TextField
          fullWidth
          className={classes.textField}
          type={values.showPassword ? "text" : "password"}
          label="Senha"
          variant="outlined"
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />

        <Button
          className={classes.Login}
          color="primary"
          variant="contained"
          fullWidth
          startIcon={<FiLogIn />}
        >
          login
        </Button>

        <div className={classes.rodape}>
          <span>
            Não possui uma conta?<a href="/"> Cadastre-se </a>
          </span>
          <a href="/">Esqueci minha senha</a>
        </div>
      </Paper>
    </div>
  );
}
export default App;