import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

function Header(props) {
  const logout = () => {
    sessionStorage.removeItem('authorization');
    props.history.push('/');
  }

  return (
    <AppBar className="app-bar" position="static">
      <Toolbar>
        <Typography variant="h6" className="header">
          Dashboard
        </Typography>
        <Button className="logout-btn" onClick={logout} color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
}

export default withRouter(Header);
