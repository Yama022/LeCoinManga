import { combineReducers } from 'redux';

import typeReducer from './typeReducer';

const rootReducer = combineReducers({
  type: typeReducer
});

export default rootReducer;