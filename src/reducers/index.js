import { combineReducers } from "redux";

import genreReducer from "./genre";
import userReducer from "./user";
import MangaReducer from "./manga";

const rootReducer = combineReducers({
  genre: genreReducer,
  user: userReducer,
  manga: MangaReducer,
});

export default rootReducer;
