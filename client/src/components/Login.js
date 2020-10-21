import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ApiService from '../services/api.service';

function Login(props) {

  const [login, setLogin] = useState(true);
  const [loginErr, setLoginErr] = useState(false);
  const [userData, setUserData] = useState({email: '', password: ''});
  const [btnDisabled, setBtnDisabled] = useState(true);

  const doLogin = (e) => {
    e.preventDefault();
    if(login) {
      ApiService.login(userData).then(resp => {
        success(resp);
      }).catch(err => setLoginErr(true));
    } else {
      ApiService.register(userData).then(resp => {
        success(resp);
      }).catch(err => setLoginErr(true));
    }
  }

  const success = (resp) => {
    if(resp && resp.success)
      props.history.push('/dashboard');
    else
      setLoginErr(true);
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  useEffect(() => {
    let disable = (!userData.email || !userData.password) ? true : false;
    setBtnDisabled(disable);
  }, [userData]);

  return (
    <div className="form-container">
      <Card>
        <CardContent>
          <Typography className="text-center" gutterBottom variant="h5" component="h2">
              {login ? 'Sign in' : 'Sign up'}
          </Typography>
          {loginErr ? <p className="login-err">Email or Password Incorrect</p> : ''}
          <form noValidate autoComplete="off" onSubmit={doLogin}>
            <div className="form-label"><label>EMAIL</label></div>
            <div>
              <TextField
                className="input-width"
                onChange={handleChange}
                name="email"
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
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="********"
                size="small"
                variant="outlined"
                required
              />
            </div>
            <br></br>
            <Button type="submit" onClick={doLogin} disabled={btnDisabled} className="submit-btn" variant="outlined" size="medium">
              {login ? 'Login' : 'Create an account'}
            </Button>
          </form>
          <p className="text-center" onClick={()=> setLogin(!login)}><span className="toggle-form">{login ? 'Create an account' : 'Having an account already? Login here'}</span></p>
      </CardContent>
    </Card>
    </div>
  );
}

export default withRouter(Login);
