import { combineReducers } from 'redux';
import tokenReducer from './token';
import loggedInReducer from './loggedIn';

const reducers = combineReducers({
  token: tokenReducer,
  loggedIn: loggedInReducer
});

export default reducers;