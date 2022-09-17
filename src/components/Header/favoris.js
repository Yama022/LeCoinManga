import { NavLink } from 'react-router-dom'
import data from '../../data/data.json';
import './style.scss';

export default function Favoris(props) {
  const { data:mangas } = props;
  return (
    <div className='favoris'>
      <h1 className='favoris__title'>Retrouvez ici vos mangas favoris</h1>

      <div className='favoris__items'>
      {mangas.map((manga, index) => (
      <NavLink
        to={`/manga/${manga.id}`}
      >
        <div className="favoris__items__manga" key={index}>
          <div className="favoris__items__manga__image">
            <img src={manga.image} alt={manga.name} />
          </div>

          <div className="favoris__items__manga__content">
            <h2>{manga.name}</h2>
            <h3>{manga.tome}</h3>
          </div>
        </div>
      </NavLink>
      ))}
      </div>
        
    </div>
  );
}


