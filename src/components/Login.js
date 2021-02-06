import React, { useRef, useState, useContext } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { context } from '../index';

function Login() {
  const myContext = useContext(context);
  let history = useHistory();

  const ref = useRef();
  const inputHandler = () => {
    if (ref.current.value === 'Olya') {
      myContext.login();
      history.replace('/pu');
      console.log(myContext);
    }
  };

  return !myContext.isAuth ? (
    <div
      style={{
        height: '93vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <form
        method=''
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
        <input
          ref={ref}
          type='text'
          name='login'
          style={{
            padding: '1rem',
            fontSize: '1rem',
            marginBottom: '1rem',
          }}
        />
      </form>
      <button onClick={inputHandler} className='button primary__button'>
        LOGIN
      </button>
    </div>
  ) : (
    <Redirect to={{ pathname: '/pu' }} />
  );
}

export default Login;
