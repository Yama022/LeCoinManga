export const GET_ALL_GENRES = 'GET_ALL_GENRES';
export const SET_GENRES = 'SET_GENRES';

export const getAllGenres = () => ({
    type: GET_ALL_GENRES,
})

export const setGenres = (payload) => ({
    type: SET_GENRES,
    payload,
})
