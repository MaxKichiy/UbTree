import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import candyLeft from '../assets/whh_candycaneLeft.png';
import candyRight from '../assets/whh_candycaneRight.png';

function Footer({ mainPage }) {
  return (
    <footer className={`footer${mainPage ? ' footer__main' : ''}`}>
      <div className='footer__wrapper'>
        <nav className='footer__nav'>
          <ul className='footer__nav-list'>
            <li className='footer__nav-item'>
              <Link to='/catalog'>Каталог</Link>
            </li>
            <li className='footer__nav-item'>
              <Link to='#'>Контакти</Link>
            </li>
            <li className='footer__nav-item'>
              <Link to='#'>Як обрати ялинку</Link>
            </li>
            <li className='footer__nav-item'>
              <Link to='#'>Повернення</Link>
            </li>
          </ul>
        </nav>
        <h2 className='footer__logo'>
          urbantree
          <span>
            <img src={candyLeft} alt='' />
            <img src={candyRight} alt='' />
          </span>
        </h2>
        <ul className='footer__links'>
          <li className='footer__link'>
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <g clipPath='url(#clip0)'>
                <path
                  d='M13.6064 9.04609C13.6183 7.62598 12.4001 6.3239 10.891 6.144L10.7921 6.12973C10.7164 6.11527 10.6396 6.107 10.5625 6.10498C10.2527 6.10498 10.1706 6.32009 10.1488 6.44859C10.1365 6.50195 10.1354 6.55715 10.1456 6.61094C10.1558 6.66472 10.1771 6.716 10.2082 6.76173C10.3111 6.89975 10.4912 6.92354 10.6357 6.94448C10.6783 6.95019 10.7188 6.95495 10.7515 6.96352C12.1082 7.26334 12.5654 7.73639 12.7881 9.07179C12.794 9.1051 12.796 9.14508 12.798 9.18791C12.8078 9.34686 12.8286 9.67904 13.1888 9.67904C13.2185 9.67904 13.2502 9.67714 13.2838 9.67143C13.6193 9.62098 13.6084 9.31736 13.6035 9.17173C13.601 9.13655 13.601 9.10125 13.6035 9.06608C13.6046 9.05978 13.6052 9.05342 13.6055 9.04704L13.6064 9.04609Z'
                  fill='#FE5F55'
                />
                <path
                  d='M10.4756 5.62218C10.5152 5.62504 10.5548 5.62789 10.5855 5.63265C12.812 5.9734 13.8372 7.0204 14.1212 9.24955C14.1262 9.28762 14.1262 9.33331 14.1272 9.3828C14.1301 9.55698 14.1361 9.91867 14.528 9.92629H14.5398C14.5936 9.92904 14.6474 9.92069 14.6976 9.90182C14.7478 9.88294 14.7932 9.85396 14.8308 9.81683C14.9525 9.69024 14.9446 9.50273 14.9376 9.35044C14.9357 9.31427 14.9337 9.27905 14.9347 9.24859C14.9624 6.969 12.9753 4.90166 10.6814 4.82551L10.6537 4.82646C10.6449 4.82771 10.636 4.82835 10.627 4.82837C10.6043 4.82837 10.5756 4.82646 10.5459 4.82456C10.5064 4.82109 10.4668 4.81918 10.4271 4.81885C10.062 4.81885 9.99269 5.07584 9.98379 5.23003C9.964 5.58506 10.3094 5.61076 10.4756 5.62218ZM14.0134 12.1297C13.9657 12.0938 13.9185 12.0573 13.8719 12.0203C13.6284 11.8261 13.3692 11.6472 13.1198 11.4739C13.0676 11.4379 13.0155 11.4017 12.9634 11.3654C12.6428 11.1427 12.3548 11.0332 12.0827 11.0332C11.7165 11.0332 11.3969 11.235 11.1327 11.6319C11.0159 11.8071 10.8734 11.8927 10.6993 11.8927C10.5777 11.8886 10.4585 11.859 10.3499 11.8061C9.31582 11.3397 8.5766 10.6259 8.15405 9.68357C7.95019 9.2267 8.01551 8.92974 8.37572 8.68702C8.57957 8.54996 8.95957 8.29392 8.93285 7.80374C8.90316 7.24693 7.66519 5.57173 7.14368 5.38137C6.92122 5.30062 6.6759 5.29994 6.45296 5.37947C5.85426 5.57935 5.42379 5.93152 5.20905 6.39505C5.00124 6.84431 5.01113 7.37066 5.23676 7.91891C5.88691 9.50463 6.8003 10.8867 7.95415 12.0269C9.08228 13.1434 10.4697 14.0572 12.0768 14.7444C12.2212 14.8062 12.3736 14.8396 12.4845 14.8643L12.5785 14.8871C12.5914 14.8907 12.6047 14.8926 12.6181 14.8929H12.6309C13.387 14.8929 14.2944 14.2075 14.5735 13.4252C14.8179 12.7399 14.3716 12.402 14.0134 12.1307V12.1297ZM10.8101 7.43348C10.6814 7.43634 10.4113 7.443 10.3163 7.71522C10.2727 7.84276 10.2777 7.95317 10.3321 8.0436C10.4123 8.17685 10.5667 8.21778 10.7062 8.23967C11.2129 8.32057 11.4741 8.59946 11.5256 9.11534C11.5503 9.3571 11.7136 9.52462 11.9234 9.52462C11.9392 9.52494 11.9551 9.52431 11.9709 9.52272C12.2232 9.49226 12.3449 9.30856 12.334 8.97542C12.338 8.62706 12.1549 8.23301 11.8432 7.91891C11.5305 7.60291 11.1535 7.42492 10.8101 7.43348Z'
                  fill='#FE5F55'
                />
                <path
                  d='M4.06234 1.99884C3.53743 1.99884 3.03402 2.1994 2.66286 2.5564C2.29169 2.9134 2.08317 3.3976 2.08317 3.90247V15.3242C2.08317 15.8291 2.29169 16.3133 2.66286 16.6703C3.03402 17.0273 3.53743 17.2279 4.06234 17.2279H15.9373C16.4622 17.2279 16.9657 17.0273 17.3368 16.6703C17.708 16.3133 17.9165 15.8291 17.9165 15.3242V3.90247C17.9165 3.3976 17.708 2.9134 17.3368 2.5564C16.9657 2.1994 16.4622 1.99884 15.9373 1.99884H4.06234ZM4.06234 0.0952148H15.9373C16.9872 0.0952148 17.994 0.496336 18.7363 1.21033C19.4786 1.92433 19.8957 2.89273 19.8957 3.90247V15.3242C19.8957 16.334 19.4786 17.3024 18.7363 18.0164C17.994 18.7304 16.9872 19.1315 15.9373 19.1315H4.06234C3.01252 19.1315 2.0057 18.7304 1.26337 18.0164C0.521041 17.3024 0.104004 16.334 0.104004 15.3242V3.90247C0.104004 2.89273 0.521041 1.92433 1.26337 1.21033C2.0057 0.496336 3.01252 0.0952148 4.06234 0.0952148Z'
                  fill='#FE5F55'
                />
              </g>
              <defs>
                <clipPath id='clip0'>
                  <rect width='20' height='19.5122' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </li>
          <li className='footer__link'>
            <Link to='pu'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <g clipPath='url(#clip0)'>
                  <path
                    d='M10.0541 4.72976C10.7928 4.72976 11.4865 4.85969 12.1351 5.11957C12.7838 5.37944 13.3514 5.74327 13.8378 6.21105C14.3243 6.67882 14.7027 7.22456 14.973 7.84826C15.2432 8.47196 15.3784 9.13897 15.3784 9.8493C15.3784 10.5596 15.2432 11.218 14.973 11.8244C14.7027 12.4307 14.3243 12.9765 13.8378 13.4616C13.3514 13.9467 12.7838 14.3105 12.1351 14.553C11.4865 14.7956 10.7928 14.9342 10.0541 14.9688C9.31532 15.0035 8.62162 14.8649 7.97297 14.553C7.32432 14.2412 6.76577 13.8774 6.2973 13.4616C5.82883 13.0458 5.45045 12.5 5.16216 11.8244C4.87387 11.1487 4.72973 10.4903 4.72973 9.8493C4.72973 9.20827 4.87387 8.54126 5.16216 7.84826C5.45045 7.15526 5.82883 6.60952 6.2973 6.21105C6.76577 5.81257 7.32432 5.44874 7.97297 5.11957C8.62162 4.79039 9.31532 4.66046 10.0541 4.72976ZM10.0541 13.1497C10.5225 13.1497 10.964 13.0631 11.3784 12.8898C11.7928 12.7166 12.1622 12.4827 12.4865 12.1882C12.8108 11.8937 13.0541 11.5385 13.2162 11.1227C13.3784 10.7069 13.4685 10.2824 13.4865 9.8493C13.5045 9.41617 13.4144 8.98305 13.2162 8.54992C13.018 8.1168 12.7748 7.76163 12.4865 7.48443C12.1982 7.20723 11.8288 6.97335 11.3784 6.78277C10.9279 6.5922 10.4865 6.50557 10.0541 6.5229C9.62162 6.54022 9.18018 6.62685 8.72973 6.78277C8.27928 6.9387 7.90991 7.17258 7.62162 7.48443C7.33333 7.79628 7.09009 8.15145 6.89189 8.54992C6.69369 8.9484 6.6036 9.38152 6.62162 9.8493C6.63964 10.3171 6.72973 10.7415 6.89189 11.1227C7.05405 11.5038 7.2973 11.859 7.62162 12.1882C7.94595 12.5174 8.31532 12.7512 8.72973 12.8898C9.14414 13.0284 9.58559 13.1151 10.0541 13.1497ZM20 4.98963C20.1622 8.22941 20.1622 11.4692 20 14.709C19.964 15.3327 19.8108 15.9217 19.5405 16.4761C19.2703 17.0305 18.9189 17.5156 18.4865 17.9314C18.0541 18.3472 17.5405 18.6937 16.9459 18.9709C16.3514 19.2481 15.7387 19.3954 15.1081 19.4127C14.2613 19.4474 13.4234 19.4733 12.5946 19.4907C11.7658 19.508 10.9189 19.5167 10.0541 19.5167C9.18919 19.5167 8.35135 19.508 7.54054 19.4907C6.72973 19.4733 5.88288 19.4474 5 19.4127C4.35135 19.3781 3.73874 19.2308 3.16216 18.9709C2.58559 18.711 2.08108 18.3645 1.64865 17.9314C1.21622 17.4983 0.855856 17.0132 0.567568 16.4761C0.279279 15.939 0.126126 15.35 0.108108 14.709C-0.036036 11.4692 -0.036036 8.22941 0.108108 4.98963C0.144144 4.36593 0.297297 3.77688 0.567568 3.22248C0.837838 2.66808 1.1982 2.17432 1.64865 1.74119C2.0991 1.30807 2.6036 0.970227 3.16216 0.727677C3.72072 0.485127 4.33333 0.337864 5 0.285889C8.36937 0.129964 11.7387 0.129964 15.1081 0.285889C15.7568 0.320539 16.3694 0.467802 16.9459 0.727677C17.5225 0.987552 18.036 1.32539 18.4865 1.74119C18.9369 2.15699 19.2883 2.65075 19.5405 3.22248C19.7928 3.79421 19.9459 4.38326 20 4.98963ZM18.1081 14.605C18.2703 11.4345 18.2703 8.2554 18.1081 5.06759C18.0901 4.68644 17.991 4.32262 17.8108 3.97612C17.6306 3.62962 17.4054 3.31777 17.1351 3.04057C16.8649 2.76337 16.5405 2.53814 16.1622 2.36489C15.7838 2.19164 15.4054 2.09635 15.027 2.07903C14.1982 2.04438 13.3694 2.01839 12.5405 2.00107C11.7117 1.98374 10.8829 1.97508 10.0541 1.97508C9.22523 1.97508 8.3964 1.98374 7.56757 2.00107C6.73874 2.01839 5.90991 2.04438 5.08108 2.07903C4.68468 2.09635 4.30631 2.19164 3.94595 2.36489C3.58559 2.53814 3.27027 2.76337 3 3.04057C2.72973 3.31777 2.4955 3.62962 2.2973 3.97612C2.0991 4.32262 2 4.68644 2 5.06759C1.83784 8.2554 1.83784 11.4432 2 14.631C2.01802 15.0122 2.11712 15.376 2.2973 15.7225C2.47748 16.069 2.71171 16.3722 3 16.632C3.28829 16.8919 3.6036 17.1171 3.94595 17.3077C4.28829 17.4983 4.66667 17.5936 5.08108 17.5936C8.3964 17.7495 11.7117 17.7495 15.027 17.5936C15.4234 17.5763 15.8018 17.481 16.1622 17.3077C16.5225 17.1345 16.8468 16.9092 17.1351 16.632C17.4234 16.3548 17.6486 16.043 17.8108 15.6965C17.973 15.35 18.0721 14.9862 18.1081 14.605ZM15.3784 3.58631C15.7027 3.58631 15.982 3.69892 16.2162 3.92414C16.4505 4.14937 16.5676 4.41791 16.5676 4.72976C16.5676 5.04161 16.4505 5.31014 16.2162 5.53537C15.982 5.76059 15.7027 5.87321 15.3784 5.87321C15.0541 5.87321 14.7748 5.76059 14.5405 5.53537C14.3063 5.31014 14.1892 5.04161 14.1892 4.72976C14.1892 4.41791 14.3063 4.14937 14.5405 3.92414C14.7748 3.69892 15.0541 3.58631 15.3784 3.58631Z'
                    fill='#FE5F55'
                  />
                </g>
                <defs>
                  <clipPath id='clip0'>
                    <rect width='20' height='20' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
