import React from 'react';

import './style.scss';

export default function Annonce() {
  return (
    <div className='annonce'>
        
        <h1 className='annonce__title'>
          Déposer une annonce
        </h1>

      <form action="get" className='annonce__form'>
        <div className='annonce__form__item'>
          <label htmlFor='title'>Titre de votre manga</label>
          <input type="text" id='title' placeholder='ex : Jujutsu Kaisen'/>

          <label htmlFor="origine">Origine</label>
          <input type="text" id='origine' placeholder='ex : Japon'/>

          <label htmlFor="author">Auteur</label>
          <input type="text" id='author' placeholder='ex : Akutami Gege'/>

          <label htmlFor='title'>Type de votre annonce</label>
          <select name='type' id='type'>
            <option value='shonen'>Shonen</option>
            <option value='shojo'>Shojo</option>
            <option value='seinen'>Seinen</option>
            <option value='manhwa'>Manhwa</option>
            <option value='manhua'>Manhua</option>
            <option value='drama'>Drama</option>
            <option value='comedy'>Comedy</option>
            <option value='action'>Action</option>
            <option value='adventure'>Adventure</option>
            <option value='fantasy'>Fantasy</option>
            <option value='horror'>Horror</option>
            <option value='mystery'>Mystery</option>
            <option value='romance'>Romance</option>
            <option value='sci-fi'>Sci-fi</option>
            <option value='supernatural'>Supernatural</option>
            <option value='thriller'>Thriller</option>
            <option value='martial arts'>Martial arts</option>
            <option value='magic'>Magic</option>
            <option value='sports'>Sports</option>
            <option value='war'>War</option>
            <option value='doujinshi'>Doujinshi</option>
            <option value='other'>Autre</option>
          </select>

          <label htmlFor='price'>Prix</label>
          <input type="number" id='price' placeholder='ex : 6,90'/>
          <span>€</span>

          <label htmlFor='age'>Âge conseillé</label>
          <input type="number" id='age' placeholder='ex : 12 ans'/>

          <label htmlFor='description'>Description</label>
          <textarea name='description' id='description' cols='30' rows='10' placeholder='ex : Jujutsu Kaisen est un manga de type shonen'></textarea>

          <label htmlFor='image'>Image</label>
          <input type="file" id='image'/>
          
          <button type='submit'>Poster votre annonce</button>
        </div>


      </form>
    </div>
  );
}
