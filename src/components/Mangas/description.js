import { useParams } from 'react-router-dom'
import { useState } from 'react'
import manga from 'src/data/data'
import { BiBasket } from 'react-icons/bi'

import greyHeart from '/public/images/grey_heart.png'
import yellowHeart from '/public/images/yellow-heart.png'
import shopping from '/public/images/shopping.png'

import './style.scss'

export default function Description() {

  const [favorite, setFavorite] = useState(false)

  const addFavorite = (e) => {
    e.preventDefault()
    const heart = document.querySelector('.heart')
    heart.src = yellowHeart
    setFavorite(true)
  }

  const removeFavorite = (e) => {
    e.preventDefault()
    const heart = document.querySelector('.heart')
    heart.src = greyHeart
    setFavorite(false)
  }

  const addToShop = (e) => {
    e.preventDefault()
    console.log("add to shop");
  }

  const { id } = useParams();

  const { image, name, origin, author, type, price, age, desc, japon } = manga.find(manga => manga.id === id);
  return (
    <div className="description">

    <>
    
      <div className="description__item">

        <div className="description__item__image">
          <img
            src={`../${image}`}
            alt={name}
          />
        </div>

        <div className="description__item__content">
          
          <div className="description__item__content__title">
            <h1>{name}</h1>
          </div>

          <div className="description__item__content__heart">
            <> {
            (!favorite) ?
            <button onClick={addFavorite}>
              <img src={greyHeart} alt="favorite" className='heart' />
            </button> 
            :
            <button onClick={removeFavorite}>
              <img src={greyHeart} alt="favorite" className='heart' />
            </button>
            } 
            </>
          </div>

          <div className="description__item__content__sold">
            <button className='description__item__content__sold__button ripple' onClick={addToShop}>
              Ajouter au panier
            </button>
          </div>

          <div className="description__item__content__origine">
            <p>Origine : <img src={`../${japon}`} alt={origin} /> {origin}</p>
          </div>

          <div className="description__item__content__author">
            <p>Auteur : {author}</p>
          </div>

          <div className="description__item__content__type">
            <h2>Type: {type}</h2>
          </div>

          <div className="description__item__content__price">
            <h3>Prix : {price}</h3>
          </div>

          <div className="description__item__content__age">
            <p>Âge conseillé : {age}</p>
          </div>

          <div className="description__item__content__description">
            <p>{desc}</p>
          </div>
        </div>

      </div>

      </>
    </div>
  )
}
