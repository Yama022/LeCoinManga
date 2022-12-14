import { useEffect } from "react";
import { Link } from "react-router-dom";
import CategoriesSlider from "./CategoriesSlider";

export default function Landing({ getAllGenres, genres }) {
  useEffect(() => {
    getAllGenres();
  }, [getAllGenres]);


  // Hide NSFW categories from the landing page if the user is not logged in
  const categories = genres.filter((category) => !category.is_nsfw);

  return (
    <div className="Landing">
      <div className="Landing__introduction">
        <h2 className="Landing__introduction__title">
          Achetez et Vendez vos mangas entre passionnés
        </h2>
        <div className="Landing__introduction__post">
          <button className="button dark-blue">
            <Link to='/form'>
              Déposer une annonce
            </Link>
          </button>
          </div>
      </div>

      <div className="Landing__categories">
        <h2 className="Landing__categories__title">
          Trouver votre prochain coup de coeur parmi les {categories.length}{" "}
          catégories disponibles
        </h2>
        <CategoriesSlider categories={categories} />
      </div>
    </div>
  );
}
