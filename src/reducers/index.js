import { combineReducers } from 'redux';
import tokenReducer from './token';

const reducers = combineReducers({
  token: tokenReducer,
});

export default reducers;