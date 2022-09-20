import { combineReducers } from "redux";

import typeReducer from "./type";
import userReducer from "./user";

const rootReducer = combineReducers({
  type: typeReducer,
  user: userReducer,
});

export default rootReducer;
