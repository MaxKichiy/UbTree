import React from 'react';
import shishTOP from '../assets/shishTOP.png';

function Top() {
  return (
    <section className='top'>
      <div className='top__wrapper'>
        <h2 className='top__header header__section-title'>Найпопулярніша модель</h2>
        <div className='top__img'>
          <img src={shishTOP} alt='' />
        </div>
        <div className='top__description'>
          <p className='top__text'>
            Темно-зелена ялинка з білим напиленням, справжніми шишками та срібними блискітками
          </p>
          <h3 className='top__name'>Ялинка з шишками</h3>
          <div className='top__properties'>
            <div className='top__height'>
              <p>Висота:</p>
              <b>
                2.1<span>м</span>
              </b>
            </div>
            <div className='top__price'>
              <p>Вартість:</p>
              <b>
                1380<span>грн</span>
              </b>
            </div>
          </div>
          <div className='top__button   button'>
            <a href='#'>Добавити в корзину</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Top;
