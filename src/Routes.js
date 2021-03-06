import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Explore from './pages/Explore';
import CreateRoast from './pages/CreateRoast';

const Routes = () => {
  return (
    <Switch>
      <Route path='/post'>
        <CreateRoast />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/register'>
        <Register />
      </Route>
      <Route path='/explore'>
        <Explore />
      </Route>
      <Route path=''>
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;