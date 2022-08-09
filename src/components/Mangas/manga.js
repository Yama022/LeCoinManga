import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import greyHeart from '/public/images/grey_heart.png'
import yellowHeart from '/public/images/yellow-heart.png'

import './style.scss'

export default function Manga({
  id, image, name, tome, origin, author, type, price, age, japon,
}) {
  const [favorite, setFavorite] = useState(false)

  const addFavorite = (e) => {
    e.preventDefault()
    const heart = document.querySelector(`[data-id='${id}']`).querySelector('.heart')
    heart.src = yellowHeart
    setFavorite(true)
  }

  const removeFavorite = (e) => {
    e.preventDefault()
    const heart = document.querySelector(`[data-id='${id}']`).querySelector('.heart')
    heart.src = greyHeart
    setFavorite(false)
  }

  return (
    <div className="manga">

      <NavLink
        to={`/manga/${id}`}
      >

        <div data-id={id} className="manga__item" key={id}>

          <div className="manga__item__image">
            <img
              src={image}
              alt={name}
            />
          </div>

          <div className="manga__item__content">

            <div className="manga__item__content__heart">
              <> {
              (!favorite)
                ? (
                  <button type="button" onClick={addFavorite}>
                    <img src={greyHeart} alt="favortie" className="heart" />
                  </button>
                )
                : (
                  <button type="button" onClick={removeFavorite}>
                    <img src={greyHeart} alt="favortie" className="heart" />
                  </button>
                )
}
              </>
            </div>
            <div className="manga__item__content__title">
              <h1>{name}</h1>
              <h2>{tome}</h2>
            </div>

            <div className="manga__item__content__origine">
              <p>Origine : <img src={`../${japon}`} alt={origin} />{origin}</p>
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
