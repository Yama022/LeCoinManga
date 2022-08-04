import React from 'react';

import jujutsu from 'src/assets/images/jujutsu_kaisen_01.jpg';

import './style.scss';

export default function Description() {
  return (
    <div className='description'>
    <div className='manga'>

    <div className='manga__item'>

      <div className='manga__item__image'>
        <img src={jujutsu} alt='jujutsu' />
      </div>

      <div className='manga__item__content'>
        <div className='manga__item__content__title'>
          <h1>Jujutsu Kaisen</h1>
        </div>

        <div className='manga__item__content__origine'>
          <p>Originie : Japon</p>
        </div>

        <div className='manga__item__content__author'>
          <p>Auteur : Akutami Gege</p>
        </div>
        
        <div className="manga__item__content__type">
          <h2>Type: Shonen</h2>
        </div>

        <div className="manga__item__content__price">
          <h3>Prix : 6,90€</h3>
        </div>

        <div className="manga__item__content__age">
          <p>Âge conseillé : 12 ans et +</p>
        </div>
      </div>

    </div>
  </div>
  </div>
  );
}
