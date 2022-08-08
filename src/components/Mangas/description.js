import { useParams } from 'react-router-dom'

import manga from 'src/data/data'

import './style.scss'

export default function Description() {
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

          <div className="description__item__content__origine">
            <p>Originie : <img src={`../${japon}`} alt={origin} /> {origin}</p>
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
