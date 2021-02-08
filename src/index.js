import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

const auth = {
  isAuth: false,
  loginJWT(token, cb) {
    axios
      .get('http://localhost:8000/login', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        res.data && cb.replace('/pu');
        auth.isAuth = true;
      });
  },
  login(login, pass, cb) {
    axios
      .post('http://localhost:8000/auth/signin/', {
        login: login,
        password: pass,
      })
      .then((res) => {
        localStorage.setItem('jtoken', res.data.accessToken);
        auth.isAuth = true;
        cb.replace('/pu');
      });
  },
  logout() {
    auth.isAuth = false;
    localStorage.removeItem('jtoken');
  },
};

export const context = React.createContext();

ReactDOM.render(
  <context.Provider value={auth}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </context.Provider>,
  document.getElementById('root'),
);
