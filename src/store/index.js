import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';

// Import all middlewares
import typeMiddleware from '../middlewares/type';

// Redux Devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Declare middlewares
const enhancers = composeEnhancers(
    applyMiddleware(typeMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
