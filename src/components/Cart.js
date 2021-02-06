import React from 'react';

import tree from '../assets/shishTOP.png';
function Cart() {
  return (
    <section className='cart'>
      <div className='cart__wrapper'>
        <h2 className='cart__title'>Заказ № 222 від 08.09.2021</h2>
        <div className='cart__left'>
          <div className=' cart__item'>
            <div className=' cart__item-img'>
              <img src={tree} alt='' />
            </div>
            <div className='cart__item-description'>
              <h2 className='cart__item-name'>Ялинка класична зелена</h2>
              <div className='cart__item-selector'>
                <label htmlFor='size'>Висота</label>
                <select className='size-selector' name='size' id='size'>
                  <option value='' disabled selected>
                    Висота
                  </option>
                  <option value='1.2'>1.2</option>
                  <option value='1.2'>1.4</option>
                  <option value='1.4'>1.6</option>
                </select>
                <label htmlFor='acc'>Акссесуари</label>
                <select className='acc-selector' name='acc' id='acc'>
                  <option value='' disabled selected>
                    Акссесуари
                  </option>
                  <option value='wreath'>Вінок</option>
                  <option value='gerland'>Гірлянда</option>
                  <option value='toys'>Іграшки</option>
                </select>
              </div>
              <div className='cart__list'>
                <h3>Кількість:</h3>
                <ul className='cart__order-list order-list'>
                  <li className='order-list__item'>
                    <p className='order-list__item-name'>Ялинка класична зелена</p>
                    <p className='order-list__item-size'>
                      <span>1.8</span>м
                    </p>
                    <p className='order-list__item-price'>
                      <span>1440</span>грн
                    </p>
                    <div className='order-list__item-count'>
                      <button className='sub'>&minus;</button>
                      <span>1</span>
                      <button className='add'>&#43;</button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='cart__right'>
          <h2>Ваші контактні дані:</h2>
          <div className='cart__right-top'>
            <form action='POST' className='cart__form'>
              <label className='form__surname'>
                Прізвище
                <input type='text' name='surname' />
              </label>
              <label className='form__name'>
                Ім'я
                <input type='text' name='name' />
              </label>
              <label className='form__phone'>
                Номер телефону
                <input type='tel' name='phone' />
              </label>
              <label className='form__city'>
                Місто
                <input type='text' name='city' />
              </label>
              <label className='form__np'>
                Відділення НП
                <input type='text' name='adress' />
              </label>
              <div className='form__receiver'>
                <label className='form__same-receiver'>
                  Отримувач
                  <input type='checkbox' />
                </label>
                <label className='form__same-receiver-surname'>
                  Прізвище
                  <input type='tel' name='r_surname' />
                </label>
                <label className='form__same-receiver-name'>
                  Ім'я
                  <input type='tel' name='r_name' />
                </label>
                <label className='form__same-receiver-phone'>
                  Номер телефону
                  <input type='tel' name='r_phone' />
                </label>
              </div>

              <label className='form__payment-method'>
                Форма оплати
                <select name='payment' id='payment'>
                  <option value='' disabled selected>
                    Форма оплати
                  </option>
                  <option value='card'>На карту</option>
                  <option value='cash'>На пошті при одержанні</option>
                </select>
              </label>
              <label className='form__card-number'>
                Номер карти
                <input type='number' name='card-number' />
              </label>
            </form>
          </div>
          <div className='cart__right-bottom'>
            <div className='cart__right-bottom-left'>&nbsp;</div>
            <div className='cart__right-bottom-right'>
              <h2>Загальна вартість:</h2>
              <p className='subtitle'>
                <span>*</span>Вартість доставки не включенна у загальну вартість, та може
                варіюватись від перевізника
              </p>
              <p className='price'>
                <span>1440</span>грн
              </p>
              <button className='button primary__button' type='submit'>
                Оформити замовлення
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
