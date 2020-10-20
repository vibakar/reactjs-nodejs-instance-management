import React, { useState } from "react";
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

function Login(props) {

  const [login, setLogin] = useState(true);
  const toggleForm = () => {
    setLogin(!login);
  }
  const doLogin = () => {
    props.history.push('/dashboard');
  }

  return (
    <div className="form-container">
      <Card>
        <CardContent>
          <Typography className="text-center" gutterBottom variant="h5" component="h2">
              {login ? 'Sign in' : 'Sign up'}
          </Typography>
          <form noValidate autoComplete="off">
            <div className="form-label"><label>EMAIL</label></div>
            <div>
              <TextField
                className="input-width"
                placeholder="user@gmail.com"
                size="small"
                variant="outlined"
                required
              />
            </div>
            <br></br>
            <div className="form-label"><label>PASSWORD</label></div>
            <div>
              <TextField
                className="input-width"
                type="password"
                placeholder="********"
                size="small"
                variant="outlined"
                required
              />
            </div>
            <br></br>
            <Button type="submit" onClick={doLogin} className="submit-btn" variant="outlined" size="medium">
              {login ? 'Login' : 'Create an account'}
            </Button>
          </form>
          <p className="text-center" onClick={toggleForm}><span className="toggle-form">{login ? 'Create an account' : 'Having an account already? Login here'}</span></p>
      </CardContent>
    </Card>
    </div>
  );
}

export default withRouter(Login);
