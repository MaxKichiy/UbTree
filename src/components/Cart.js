import React from 'react';

import tree from '../assets/shishTOP.png';
function Cart() {
  return (
    <section className='cart'>
      <div className='cart__wrapper'>
        <h2 className='cart__title'>Заказ № 222 від 08.09.2021</h2>
        <div className='cart__left'>
          <div className='catalog__item cart__item'>
            <div className='catalog__item-img cart__item-img'>
              <img src={tree} alt='' />
            </div>
            <div className='catalog__item-description cart__item-description'>
              <h2 className='catalog__item-name cart__item-name'>Ялинка Класична</h2>
              <div className='catalog__item-selector'>
                <select className='size-selector' name='size' id='size' placeholder='Розмір'>
                  <option value='1.2'>1.2</option>
                  <option value='1.2'>1.4</option>
                  <option value='1.4'>1.6</option>
                </select>
                <select className='color-selector' name='color' id='color'>
                  <option value='Green'>Зелена</option>
                  <option value='Blue'>Голуба</option>
                  <option value='Red'>Червона</option>
                </select>
                <button className='catalog__button button primary-button'>
                  Добавити в корзину
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='cart__right'>
          <div className='cart__right-top'>&nbsp;</div>
          <div className='cart__right-bottom'>
            <div className='cart__right-bottom-left'></div>
            <div className='cart__right-bottom-right'></div>
            &nbsp;
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
