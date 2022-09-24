import { GET_ALL_MANGA_BY_GENRE, setMangaResults } from "../actions/manga";

import api from "./utils/api";

const manga = (store) => (next) => async (action) => {
  const { dispatch } = store;
  switch (action.type) {
    case GET_ALL_MANGA_BY_GENRE:
      const response = await api.get(`/manga?genre_id=${action.payload}`);
      dispatch(setMangaResults(response.data));
      break;
    default:
      next(action);
  }
};

export default manga;