import { combineReducers } from "redux";

import genreReducer from "./genre";
import userReducer from "./user";

const rootReducer = combineReducers({
  genre: genreReducer,
  user: userReducer,
});

export default rootReducer;
