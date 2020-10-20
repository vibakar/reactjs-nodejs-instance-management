import React, { Suspense, lazy }  from 'react';
import { Route, withRouter } from 'react-router-dom';
// import Header from './Header';

const Login = lazy(() => import('./Login'));
const Dashboard = lazy(() => import('./Dashboard'));

function App({location}) {
  return (
    <>
      {/* {location.pathname !== '/' && <Header/>} */}
      <Suspense fallback={<h3>Loading...</h3>}>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" component={Dashboard} />
      </Suspense>
    </>
  );
}

export default withRouter(App);
