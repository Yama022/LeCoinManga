

export default function Form({ isLoggin }) {
  console.log(isLoggin);
  return (
    <div className="Form">

      <div className="Form__container">

        <form action="get">
          <div className="Form__container__form">
            <h1>Déposer une annonce</h1>
          </div>

          <div className="Form__container__type">
            <label htmlFor="type">Type</label>
            <select name="type" id="type">
              <option value="manga">Manga</option>
              <option value="anime">Anime</option>
              <option value="manga">Manga</option>
              <option value="anime">Anime</option>
              </select>
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
          
        </form>
      </div>
    </div>
  );
}
