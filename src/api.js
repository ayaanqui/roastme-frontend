const url = 'http://localhost:3001';
export default {
  base: url,
  login: `${url}/auth/login`,
  logout: `${url}/auth/logout`,
  register: `${url}/auth/register`,
  roasts: `${url}/roasts/`,
  verify: `${url}/auth/verify`,
  getUser: `${url}/auth/user`,
  uploads: `${url}/uploads`,
};