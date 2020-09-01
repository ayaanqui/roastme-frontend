const tokenAction = token => {
  return {
    type: 'LOGIN',
    payload: token,
  };
};

export default tokenAction;