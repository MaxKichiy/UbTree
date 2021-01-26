import React from 'react';
import tree from '../assets/shishTOP.png';

function Catalogue() {
  return (
    <section className='catalog'>
      <div className='catalog__wrapper'>
        <ul className='catalog__list'>
          <li className='catalog__item'>
            <div className='catalog__item-img'>
              <img src={tree} alt='' />
            </div>
            <div className='catalog__item-description'>
              <h2 className='catalog__item-name'>Ялинка Класична</h2>
              <div className='catalog__item-price'>
                <p className='current-price'>
                  від <span>1380</span>грн
                </p>
                <p className='old-price'>
                  від <span>1800</span>грн
                </p>
              </div>
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
          </li>
          <li className='catalog__item'>
            <div className='catalog__item-img'>
              <img src={tree} alt='' />
            </div>
            <div className='catalog__item-description'>
              <h2 className='catalog__item-name'>Ялинка Класична</h2>
              <div className='catalog__item-price'>
                <p className='current-price'>
                  від <span>1380</span>грн
                </p>
                <p className='old-price'>
                  від <span>1800</span>грн
                </p>
              </div>
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
          </li>
          <li className='catalog__item'>
            <div className='catalog__item-img'>
              <img src={tree} alt='' />
            </div>
            <div className='catalog__item-description'>
              <h2 className='catalog__item-name'>Ялинка Класична</h2>
              <div className='catalog__item-price'>
                <p className='current-price'>
                  від <span>1380</span>грн
                </p>
                <p className='old-price'>
                  від <span>1800</span>грн
                </p>
              </div>
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
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Catalogue;
