import { combineReducers } from 'redux';

import typeReducer from './type';

const rootReducer = combineReducers({
  type: typeReducer
});

export default rootReducer;