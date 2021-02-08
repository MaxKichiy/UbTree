import React, { useRef, useContext, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { context } from '../index';
import axios from 'axios';

function Login() {
  const myContext = useContext(context);
  let history = useHistory();

  const refLogin = useRef();
  const refPass = useRef();

  const inputHandler = () => {
    myContext.login(refLogin.current.value, refPass.current.value, history);
  };

  const formHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    myContext.loginJWT(localStorage.getItem('jtoken'), history);
  }, []);

  return !myContext.isAuth ? (
    <div
      style={{
        height: '93vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <form
        onSubmit={formHandler}
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
        <label htmlFor='login'>login</label>
        <input
          id='login'
          ref={refLogin}
          type='text'
          name='login'
          style={{
            padding: '1rem',
            display: 'block',
            fontSize: '1rem',
            marginBottom: '1rem',
          }}
        />
        <label htmlFor='password'>password</label>
        <input
          id='password'
          ref={refPass}
          type='text'
          name='login'
          style={{
            padding: '1rem',
            fontSize: '1rem',
            marginBottom: '1rem',
          }}
        />
        <button
          onClick={inputHandler}
          className='button primary__button'
          style={{ display: 'block' }}>
          LOGIN
        </button>
      </form>
    </div>
  ) : (
    <Redirect to={{ pathname: '/pu' }} />
  );
}

export default Login;
