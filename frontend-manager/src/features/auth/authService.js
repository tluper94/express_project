import axios from 'axios';

const API_URL = 'http://localhost:8000/';

const login = async userData => {
  const res = await axios.post(API_URL + 'login', userData);

  if (res.data) {
    localStorage.setItem('user', JSON.stringify(res.data));
  }

  return res.data;
};

const logout = async () => {
  localStorage.removeItem('user');
};

const authService = {
  login,
  logout
};

export default authService;
