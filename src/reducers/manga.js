import { SET_MANGA_RESULTS } from "../actions/manga";

const initialState = {
  mangaResults: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MANGA_RESULTS:
      return {
        ...state,
        mangaResults: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
