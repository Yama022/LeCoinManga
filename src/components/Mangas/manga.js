import { NavLink } from 'react-router-dom'

import './style.scss'

export default function Manga({
  id, image, name, origine, author, type, price, age,
}) {
  return (
    <div className="manga">

      <NavLink
        to={`/manga/${id}`}
      >

        <div className="manga__item" key={id}>

          <div className="manga__item__image">
            <img
              src={image}
              alt={name}
            />
          </div>

          <div className="manga__item__content">
            <div className="manga__item__content__title">
              <h1>{name}</h1>
            </div>

            <div className="manga__item__content__origine">
              <p>Origine : {origine}</p>
            </div>

            <div className="manga__item__content__author">
              <p>Auteur : {author}</p>
            </div>

            <div className="manga__item__content__type">
              <h2>Type: {type}</h2>
            </div>

            <div className="manga__item__content__price">
              <h3>Prix : {price}</h3>
            </div>

            <div className="manga__item__content__age">
              <p>Âge conseillé : {age}</p>
            </div>

          </div>

        </div>
      </NavLink>
    </div>
  )
}
