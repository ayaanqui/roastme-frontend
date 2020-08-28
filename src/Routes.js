import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Login from './Pages/Login';
import Home from './Pages/Home';

const Routes = () => {
  return (
    <Switch>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path=''>
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;