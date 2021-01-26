import React from 'react';
import part1 from '../assets/part1.png';
import part2 from '../assets/part2.png';
import part3 from '../assets/part3.png';
import part4 from '../assets/part4.png';
import part5 from '../assets/part5.png';
import part6 from '../assets/part6.png';
import puzzle from '../assets/et_puzzle.png';

function Setup() {
  return (
    <section className='setup'>
      <div className='setup__wrapper'>
        <div className='setup__bg-puzzle'>
          <img src={puzzle} alt='' />
        </div>
        <h2 className='setup__header header__section-title'>Скласти?! Не проблема</h2>
        <div className='setup__game'>&nbsp;</div>
        <ol className='setup__list'>
          <li className='setup__item'>
            <h3 className='setup__item-title'>Дістаньте ялинку з коробки</h3>
            <div className='setup__item-img'>
              <img src={part1} alt='' />
            </div>
          </li>
          <li className='setup__item'>
            <h3 className='setup__item-title'>Зберіть ніжку</h3>
            <div className='setup__item-img'>
              <img src={part2} alt='' />
            </div>
          </li>
          <li className='setup__item'>
            <h3 className='setup__item-title'>Візьміть нижню частину та вставте її в ніжку</h3>
            <div className='setup__item-img'>
              <img src={part3} alt='' />
            </div>
          </li>
          <li className='setup__item'>
            <h3 className='setup__item-title'>Розправте кожну гілочку на нижній частині</h3>
            <div className='setup__item-img'>
              <img src={part4} alt='' />
            </div>
          </li>
          <li className='setup__item'>
            <h3 className='setup__item-title'>Візьміть верхню частину та вставте її в нижню</h3>
            <div className='setup__item-img'>
              <img src={part5} alt='' />
            </div>
          </li>
          <li className='setup__item'>
            <h3 className='setup__item-title'>Розправте кожну гілочку на верхній частині</h3>
            <div className='setup__item-img'>
              <img src={part6} alt='' />
            </div>
          </li>
          <li className='setup__item'>
            <h3 className='setup__item-title'>Готово</h3>
          </li>
        </ol>
        <p className='setup__spec'>
          *Щоб виконати дію зажміть на потрібному елементі на декілька секунд
        </p>
      </div>
    </section>
  );
}

export default Setup;
