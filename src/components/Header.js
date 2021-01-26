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
          <ul className='nav__list'>
            <li className='nav__list-item'>
              <a href='/catalog'>Каталог</a>
            </li>
            <li className='nav__list-item'>
              <a href='#'>Часті запитання</a>
            </li>
            <li className='nav__list-item'>
              <a href='#'>Про нас</a>
            </li>
            <li className='nav__list-item'>
              <a href='/cart'>Корзина</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
