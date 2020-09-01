const { default: tokenReducer } = require("../reducers/token");

export const tokenAction = token => {
  return {
    type: 'LOGIN',
    payload: token,
  };
};