import React from 'react';
import tree from '../assets/misc/tree.png';

function Header(props) {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <a href='#' className='header__button toggle__button'>
          <img src={tree} alt='toggle menu button' />
        </a>
        <div className='header__logo'>
          <a href='/'>urbantree</a>
        </div>
        <nav className='header__nav nav'>
          <ul className='nav-list'>
            <li className='nav-list__item'>
              <a href='#'>Каталог</a>
            </li>
            <li className='nav-list__item'>
              <a href='#'>Часті запитання</a>
            </li>
            <li className='nav-list__item'>
              <a href='#'>Про нас</a>
            </li>
            <li className='nav-list__item'>
              <a href='#'>Корзина</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
