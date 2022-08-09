import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BiUserCircle, BiSearch, BiBasket } from 'react-icons/bi'
import { MdFavoriteBorder } from 'react-icons/md'
import data from '../../data/data.json'
import './style.scss'

export default function Header() {
  const [search, setSearch] = useState(data)

  const onSearch = (e) => {
    const value = e.target.value
    const check = data.filter(item => item.name.toLowerCase().includes(value))
    setSearch(check)
    return check
  }
  return (
    <div className="header">
      <div className="header__title">
        <Link
          to="/"
        >
          <h1>LeCoinManga</h1>
        </Link>
      </div>

      <div className="header__annonce">
        <NavLink
          to="/annonce"
        >
          <button type="button" className="header__annonce__button"><span>+</span> Déposer une annonce</button>
        </NavLink>
      </div>

      <div className="header__search">
        <BiSearch className="header__search--item" />
        <input
          type="text"
          placeholder="Rechercher"
          className="header__input"
          name="headerInput"
          onChange={onSearch}
          onClick={() => setSearch(data)}
        />
      </div>

      <div className="header__icons">
        <div className="header__icons__items">
          <NavLink
            to="/favoris"
            activeClassName="header__icons__items header__icons__items--active"
          >
            <MdFavoriteBorder className="header__icons__items--item" />
            <span className="header__icons__items__span">Favoris</span>
          </NavLink>
        </div>

        <div className="header__icons__items">
          <NavLink
            to="/profil"
            activeClassName="header__icons__items header__icons__items--active"
          >
            <BiUserCircle className="header__icons__items--item" />
            <span className="header__icons__items__span">Profil</span>
          </NavLink>
        </div>

        <div className="header__icons__items">
          <NavLink
            to="/panier"
            activeClassName="header__icons__items header__icons__items--active"
          >
            <BiBasket className="header__icons__items--item" />
            <span className="header__icons__items__span">Panier</span>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
