import React, { useContext } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';

import { context } from '../index';

function Panel() {
  const myContext = useContext(context);
  const history = useHistory();
  const location = useLocation();
  console.log('🚀 ~ file: Panel.js ~ line 10 ~ Panel ~ location', location);

  const logOutHandler = () => {
    myContext.logout();
    history.replace('/');
  };
  let pu = (
    <div>
      <p>Панель управления</p>
      <button onClick={logOutHandler}>logout</button>
    </div>
  );
  return myContext.isAuth ? pu : <Redirect to={{ pathname: '/login' }} />;
}

export default Panel;
