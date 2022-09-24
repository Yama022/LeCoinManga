export const GET_ALL_MANGA_BY_GENRE = "GET_ALL_MANGA_BY_GENRE";
export const SET_MANGA_RESULTS = "SET_MANGA_RESULTS";

export const getAllMangaByGenre = (payload) => ({
  type: GET_ALL_MANGA_BY_GENRE,
  payload,
});

export const setMangaResults = (payload) => ({
    type: SET_MANGA_RESULTS,
    payload,
});
