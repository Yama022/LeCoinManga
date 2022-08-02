import React from 'react';
import { BiUserCircle, BiSearch } from 'react-icons/bi';
import { MdFavoriteBorder } from 'react-icons/md';
import './style.scss';

export default function Header() {
  return (
    <div className='header'>
      <h1 className='header__title'>LeCoinManga</h1>
      <button className='header__annonce'><span>+</span> Déposer une annonce</button>

      <div className='header__search'>
        <BiSearch className='header__search--item' />
        <input
        type="text"
        placeholder='Rechercher'
        className='header__input'
        name='headerInput'
        />
      </div>

      <div className='header__icons'>
        <div className='header__icons__items'>
          <MdFavoriteBorder className='header__icons__items--item'/>
          <span className='header__icons__items__span'>Favoris</span>
        </div>

        <div className='header__icons__items'>
        {/* Add Link */}
          <BiUserCircle className='header__icons__items--item' />
          <span className='header__icons__items__span'>Profil</span>
        </div>
      </div>
  </div>
  );
}
