import { NavLink } from 'react-router-dom'
import { BsHeart } from 'react-icons/bs'

import emptyHeartbis from '/public/images/empty-bg.png'
import yellowHeart from '/public/images/yellow-heart.png'

import './style.scss'

export default function Manga({
  id, image, name, origin, author, type, price, age, japon
})

{
  const addFavorite = (e) => {
    console.log('addFavorite')
    e.preventDefault()
  }
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

            <div className="manga__item__content__heart">
              <button onClick={addFavorite}>
                <img src={emptyHeartbis} alt="" />
              </button>
            </div>
            <div className="manga__item__content__title">
              <h1>{name}</h1>
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
