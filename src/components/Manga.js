import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Mangas({
  mangaResults,
  getAllMangaByGenre,
  getAllGenres,
  genres,
}) {
  const { id } = useParams();

  const [genreName, setGenreName] = useState("");

  useEffect(() => {
    getAllMangaByGenre(id);
  }, [getAllMangaByGenre, id, genres]);

  useEffect(() => {
    if (!genres.length) {
      getAllGenres();
    } else {
      const genre = genres.find((genre) => genre.id === parseInt(id));
      setGenreName(genre.name);
    }
  }, [getAllGenres, genres, id]);

  return (
    <div className="Manga">
      <h1 className="Manga__title">Mangas dans la catégorie : {genreName}</h1><br />
      <h2 className="Manga__subtitle">{mangaResults.length} résultats</h2>
      <ul className="Manga__results">
        {mangaResults.map((manga, index) => (
          <li className="Manga__results__item" key={index}>
            <h2 className="Manga__results__item__title">{manga.name}</h2>
            <img className="Manga__results__item__picture" src={manga.image_url} alt={manga.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}
