import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';

const Routes = () => {
  return (
    <Switch>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/register'>
        <Register />
      </Route>
      <Route path=''>
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;