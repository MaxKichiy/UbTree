import React from 'react';

function Main() {
  return (
    <section className='main-page'>
      <div className='main-page__wrapper'>
        <h2 className='main-page__title header__section-title'>Казка зовсім поруч</h2>
        <p className='main-page__text'>Замовте її із доставкою у своє місто</p>
        <div className='main-page__button button button__primary'>
          <a href='/catalog'>
            <span className='large'>Перейти&nbsp;</span>
            <span className='small'>В</span> каталог
          </a>
        </div>
      </div>
    </section>
  );
}

export default Main;
