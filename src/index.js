import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const auth = {
  isAuth: false,
  login() {
    auth.isAuth = true;
  },
  logout() {
    auth.isAuth = false;
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
