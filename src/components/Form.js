import { useState } from 'react';
export default function Form({ isLoggin, genres, announcement }) {

  const [announce, setAnnounce] = useState(announcement)

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());
    console.log(value);
    setAnnounce([...announce, value])
  }

  return (

    <div className="Form">
      
    {isLoggin ? (

    <div className="Form__container" style={{border: "1px solid #09285e"}}>

      <form action="get" onSubmit={handleSubmit}>
        <div className="Form__container__form">
          <h1>Déposer une annonce</h1>
        </div>

        <div className="Form__container__title">
          <label htmlFor="title">Titre</label>
          <input type="text" name="title" id="title" />
        </div>

        <div className="Form__container__author">
          <label htmlFor="author">Auteur</label>
          <input type="text" name="author" id="author" />
        </div>

        <div className="Form__container__price">
          <label htmlFor="price">Prix</label>
          <input type="text" name="price" id="price" />
        </div>

        <div className="Form__container__description">
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" cols="30" rows="10"></textarea>
        </div>

        <div className="Form__container__image">
          <label htmlFor="image">Image</label>
          <input type="file" name="image" id="image" />
        </div>

        <input type="submit" value="Publier"/>
        
      </form>
    </div>

        )
        :
        (
          <div className="Form__container" >
            <p>Vous devez être connecté pour déposer une annonce</p>
          </div>
        )
        }

    
    </div>
  );
}
