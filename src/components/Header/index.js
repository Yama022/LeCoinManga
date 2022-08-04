import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BiUserCircle, BiSearch } from 'react-icons/bi';
import { MdFavoriteBorder } from 'react-icons/md';
import './style.scss';

export default function Header() {
  return (
    <div className='header'>
      <Link
        to='/'
      >
        <h1 className='header__title'>LeCoinManga</h1>
      </Link>

      <NavLink
        to='/annonce'
      >
        <button className='header__annonce'><span>+</span> Déposer une annonce</button>
      </NavLink>


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
          <NavLink
            to='/favoris'
          >
          <MdFavoriteBorder className='header__icons__items--item'/>
          <span className='header__icons__items__span'>Favoris</span>
          </NavLink>
        </div>

        <div className='header__icons__items'>
          <NavLink
            to='/profil'
          >
          <BiUserCircle className='header__icons__items--item' />
          <span className='header__icons__items__span'>Profil</span>
          </NavLink>
        </div>
      </div>
  </div>
  );
}
