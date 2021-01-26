import React from 'react';

function Main() {
  return (
    <main className='main'>
      <h1 className='main__slogan visibility-hidden'>
        Urbantree- найкращий магазин ялинок в Україні
      </h1>
      <section className='main-page'>
        <div className='main-page__wrapper'>
          <h2 className='main-page__title header__section-title'>Казка зовсім поруч</h2>
          <p className='main-page__text'>Замовте її із доставкою у своє місто</p>
          <div className='main-page__button button button__primary'>
            <a href='#'>
              <span>В</span> каталог
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
