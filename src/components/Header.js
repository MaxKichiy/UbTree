import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import tree from '../assets/misc/tree.png';

function Header() {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <Link href='/menu' className='header__button toggle__button'>
          <img src={tree} alt='toggle menu button' />
        </Link>
        <div className='header__logo'>
          <Link to='/'>urbantree</Link>
        </div>
        <nav className='header__nav nav'>
          <ul className='nav__list'>
            <li className='nav__list-item'>
              <NavLink to='/catalog'>Каталог</NavLink>
            </li>
            <li className='nav__list-item'>
              <NavLink to='/faq'>Часті запитання</NavLink>
            </li>
            <li className='nav__list-item'>
              <NavLink to='/about'>Про нас</NavLink>
            </li>
            <li className='nav__list-item'>
              <NavLink to='/cart'>Корзина</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
