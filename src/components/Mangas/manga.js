import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import data from 'src/data/data.json';

import jujutsu from 'src/assets/images/jujutsu_kaisen_01.jpg';

import './style.scss';

export default function Manga() {
  console.log(data);
  return (
    <>
    {data.map((manga) => (
    <div className='manga'>
      
      <NavLink
        to='/manga'
      >

      <div className='manga__item' key={manga.id}>

        <div className='manga__item__image'>
          <img src={manga.image} alt='jujutsu' />
        </div>

        <div className='manga__item__content'>
          <div className='manga__item__content__title'>
            <h1>{manga.name}</h1>
          </div>

          <div className='manga__item__content__origine'>
            <p>Originie : {manga.origine}</p>
          </div>

          <div className='manga__item__content__author'>
            <p>Auteur : {manga.author}</p>
          </div>
          
          <div className="manga__item__content__type">
            <h2>Type: {manga.type}</h2>
          </div>

          <div className="manga__item__content__price">
            <h3>Prix : {manga.price}</h3>
          </div>

          <div className="manga__item__content__age">
            <p>Âge conseillé : {manga.age}</p>
          </div>

        </div>

      </div>
      </NavLink>
    </div>
      ))}
      </>
  );
}
