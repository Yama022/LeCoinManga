import { connect } from "react-redux";
import Manga from "../components/Manga";

import { getAllMangaByGenre } from "../actions/manga";

import { getAllGenres } from "../actions/genre";

const mapStateToProps = (state) => ({
  mangaResults: state.manga.mangaResults,
  genres: state.genre.genres,
});

const mapDispatchToProps = (dispatch) => ({
  getAllMangaByGenre: (payload) => dispatch(getAllMangaByGenre(payload)),
  getAllGenres: () => dispatch(getAllGenres()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Manga);
