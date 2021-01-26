import React from 'react';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';

function Testimonials(props) {
  return (
    <section className='testimonials'>
      <div className='testimonials__wrapper'>
        <h2 className='testimonials__header header__section-title'>
          Наші клі<span>є</span>нти
        </h2>
        <ul className='testimonials__list'>
          <li className='testimonials__item'>
            <div className='testimonials__img'>
              <img src={pic1} alt='picture of user' />
              <figcaption>@maria_alkaline</figcaption>
            </div>
            <p className='testimonials__text'>
              Забрала свою красуню-ялинку 2,3 м і моїй радості немає меж. Ну така вона вже гарна,
              пухнаста і природня, що я не можу очей від неї відвести!
            </p>
          </li>
          <li className='testimonials__item'>
            <div className='testimonials__img'>
              <img src={pic2} alt='picture of user' />
              <figcaption>@tut.valeriya</figcaption>
            </div>
            <p className='testimonials__text'>
              Я у захваті!)) Ялинка така гарненька! Тільки занесла додому та не втрималася... одразу
              поставила)) Легко встановлюється, навіть інструкція є)) Новорічний настрій з'явився!
              Усім про вас розповідаю)) Дякую ще раз!
            </p>
          </li>
          <li className='testimonials__item'>
            <div className='testimonials__img'>
              <img src={pic3} alt='picture of user' />
              <figcaption>@olga_saiko27</figcaption>
            </div>
            <p className='testimonials__text'>
              Я всегда была ярым противником искусственных елок, но с каждым годом живые все меньше
              и меньше радости приносили - продаются уже желтые, кривые и очень быстро осыпаются((
              Это моя первая искусственная елка!! Сказать, что я довольна - ничего не сказать!! Я
              так благодарна Вам!
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Testimonials;
