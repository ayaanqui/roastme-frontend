// import React from 'react';
import { useDispatch } from 'react-redux';
import tokenAction from '../actions/tokenAction';

const SetToken = props => {
  const dispatch = useDispatch();
  dispatch(tokenAction(props.token));
  return null;
};

export default SetToken;